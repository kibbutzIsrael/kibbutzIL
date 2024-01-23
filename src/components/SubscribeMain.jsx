import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import { useDropzone } from "react-dropzone";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2lLiDun1SBFVNp9LYTzVQpXvSRgnINz4",
  authDomain: "kibbutzil-homepage.firebaseapp.com",
  projectId: "kibbutzil-homepage",
  storageBucket: "kibbutzil-homepage.appspot.com",
  messagingSenderId: "632741138209",
  appId: "1:632741138209:web:111fdeadc5bf8bd541f860",
  measurementId: "G-2R1VLPLDHK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Initialize Firebase Storage

/// טופס מתנדבים

const RegistrationVolForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("שם מלא הוא שדה חובה")
      .min(2, "נדרשים לפחות 2 תווים"),
    email: Yup.string()
      .email('כתובת דוא"ל אינה חוקית')
      .required('כתובת דוא"ל היא שדה חובה'),
    phoneNumber: Yup.string()
      .required("מספר הטלפון הוא שדה חובה")
      .matches(/^0\d{8,9}$/, "מספר הטלפון אינו תקין"),
    gender: Yup.string(),
    positionUntilNow: Yup.string(),
    fecerPosition: Yup.string(),
    yearExperience: Yup.string(),
    linkedin: Yup.string()
      .matches(/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/, "כתובת לא תקינה")
      .optional(),
  }).test("rtl-concat", " ", function (value) {
    // Add right-to-left mark to the error message
    return this.createError({ message: "\u200F" });
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      positionUntilNow: "",
      fecerPosition: "",
      yearExperience: "",
      CVfile: null,
      BodyName: "",
      location: "",
      CVfile: null,
      linkedin: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("values", values);

      try {
        const response = await axios.post(
          "https://kibbutzil.online/volunteers-forms",
          values,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.success("הפרטים נשלחו בהצלחה", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        resetForm({ values: "" });
      } catch (error) {
        console.error("Error submitting form:", error.response.data.message);

        if (
          error.response.data.message ===
          "Volunteer with this email already exists"
        ) {
          toast.error("המייל כבר רשום במערכת  ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    },
  });

  const onDrop = useCallback(
    (acceptedFiles) => {
      formik.setFieldValue("CVfile", acceptedFiles[0]);
    },
    [formik]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".pdf", // Allow only PDF files
    maxFiles: 1, // Allow only one file
  });

  return (
    <div
      id="subscribeMain"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="form"
        style={{ maxWidth: "400px", width: "100%", padding: "10px" }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{ textAlign: "right" }}
        >
          <br></br>
          שאלון למתנדב/ת
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{ fontSize: "14px", textAlign: "right" }}
        >
          !היי שמחים לראות אותך כאן איתנו
          <br />
          במסגרת הפרויקטים שלנו, המתנדבים שלנו עובדים על פיתוח או הטמעה של
          פתרונות טכנולוגיים<br></br> שנועדו לתת מענה לאתגר חברתי כואב
          <br />
          .נשמח למענה קצר על השאלות הבאות
          <br />
          *חשוב לציין שהתנדבות מתאפשרת לבעלי ניסיון של שנה אחת לפחות
          <br></br>
          <br></br>
        </Typography>

        <Stack spacing={1}>
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            variant="outlined"
            size="small"
            placeholder="שם מלא*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={
              formik.touched.fullName &&
              formik.errors.fullName && (
                <span style={{ textAlign: "right" }}>
                  {formik.errors.fullName}
                </span>
              )
            }
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            variant="outlined"
            size="small"
            placeholder="מייל*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />
          <TextField
            fullWidth
            id="location"
            name="location"
            variant="outlined"
            size="small"
            placeholder="מקום מגורים"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            variant="outlined"
            size="small"
            placeholder="מספר טלפון*"
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, "");
              formik.handleChange({
                target: { name: "phoneNumber", value: numericValue },
              });
            }}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel
              htmlFor="gender"
              sx={{ textAlign: "right", fontSize: "24px" }}
            >
              {/* *בחירת מין */}
            </InputLabel>
            <Select
              label="מגדר"
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              helperText={formik.touched.gender && formik.errors.gender}
              displayEmpty
              sx={{ textAlign: "right", fontSize: "12px" }}
            >
              <MenuItem value="" disabled>
                בחר/י מגדר
              </MenuItem>
              <MenuItem value="male">זכר</MenuItem>
              <MenuItem value="female">נקבה</MenuItem>
              <MenuItem value="other">מעדיף/ה לא להגיד</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id="positionUntilNow"
            name="positionUntilNow"
            variant="outlined"
            size="small"
            placeholder="באיזה תפקידים לקחת חלק עד היום?*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.positionUntilNow}
            error={
              formik.touched.positionUntilNow &&
              Boolean(formik.errors.positionUntilNow)
            }
            helperText={
              formik.touched.positionUntilNow && formik.errors.positionUntilNow
            }
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />
          <TextField
            fullWidth
            id="fecerPosition"
            name="fecerPosition"
            variant="outlined"
            size="small"
            placeholder="באיזה תפקיד תרצה לקחת חלק?*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fecerPosition}
            error={
              formik.touched.fecerPosition &&
              Boolean(formik.errors.fecerPosition)
            }
            helperText={
              formik.touched.fecerPosition && formik.errors.fecerPosition
            }
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />
          <TextField
            fullWidth
            id="yearExperience"
            name="yearExperience"
            variant="outlined"
            size="small"
            placeholder="כמה שנות ניסיון יש לך בתחום התפקיד?*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.yearExperience}
            error={
              formik.touched.yearExperience &&
              Boolean(formik.errors.yearExperience)
            }
            helperText={
              formik.touched.yearExperience && formik.errors.yearExperience
            }
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />

          <TextField
            fullWidth
            id="linkedin"
            name="linkedin"
            variant="outlined"
            size="small"
            placeholder="קישור לפרופיל ב-LinkedIn"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.linkedin}
            error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
            helperText={formik.touched.linkedin && formik.errors.linkedin}
            InputProps={{
              sx: { textAlign: "right", fontSize: "12px" },
              inputProps: { dir: "rtl" },
            }}
          />

          {/* File upload (CVfile) */}
          <div
            {...getRootProps()}
            style={{
              margin: "10px 0",
              border: "2px dashed #eeeeee",
              borderRadius: "4px",
              padding: "20px",
              textAlign: "right",
              fontSize: "12px",
            }}
          >
            <input {...getInputProps()} />
            <p> PDF File שלח קורות חיים </p>
            {formik.values.CVfile && <p>קובץ: {formik.values.CVfile.name}</p>}
          </div>

          <Stack spacing={1}>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#5059B3", // צבע הרקע של הכפתור
                color: "#ffffff", // צבע הטקסט בכפתור
              }}
              size="small"
            >
              !בואו נצא לדרך
            </Button>
            <hr></hr>
          </Stack>
        </Stack>
      </form>
    </div>
  );
};

export default RegistrationVolForm;
