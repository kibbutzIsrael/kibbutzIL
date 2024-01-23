import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    organizationContactName: Yup.string()
      .required("Full name is a required field")
      .min(2, "Minimum length is 2 characters"),
    organizationEmail: Yup.string()
      .email("Invalid organizationEmail address")
      .required("organizationEmail is a required field"),
    organizationPhoneNumber: Yup.string()
      .required("Phone number is a required field")
      .required("מספר הטלפון הוא שדה חובה")
      .matches(/^0\d{8,9}$/, "מספר הטלפון מכיל 8 או 9 ספרות (מספרים בלבד)"),
    organizationName: Yup.string()
      .required("Institute name is a required field")
      .required("Full name is a required field"),
    organizationMessageBody: Yup.string()
      .required("Institute name is a required field")
      .min(10, "Minimum length is 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      organizationContactName: "",
      organizationEmail: "",
      organizationPhoneNumber: "",
      organizationMessageBody: "",
      organizationType: "",
      organizationName: "",
      linkedin: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "https://kibbutzil.online/organizations-forms",
          values
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
        console.error("Error submitting form:", error);

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
    },
  });

  <hr></hr>;
  return (
    <div
      id="subscribe"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* Centering the form vertically and horizontally */}
      <form
        onSubmit={formik.handleSubmit}
        className="form"
        style={{ maxWidth: "600px", width: "100%", padding: "20px" }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            textAlign: "center",
            margin: "auto",
          }}
        >
          !טופס הרשמה לארגונים
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{ fontSize: "14px", textAlign: "center" }}
        >
          !היי שלום לכל הארגונים המצטרפים
          <br />
          .במסגרת טופס ההרשמה, תצטרכו למלא פרטים שנועדו לנו על מנת שנתחיל בדרך
          משותפת יחד <br></br>
        </Typography>

        <br />

        <Stack spacing={2}>
          <TextField
            fullWidth
            id="organizationContactName"
            name="organizationContactName"
            // label="*שם מלא"
            variant="outlined"
            placeholder="שם מלא*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.organizationContactName}
            error={
              formik.touched.organizationContactName &&
              Boolean(formik.errors.organizationContactName)
            }
            helperText={
              formik.touched.organizationContactName &&
              formik.errors.organizationContactName
            }
            InputProps={{
              sx: { textAlign: "right" },
              inputProps: { dir: "rtl" }, // Set the direction to right-to-left
            }}
          />
          <TextField
            fullWidth
            id="organizationEmail"
            name="organizationEmail"
            // label="*שם מלא"
            variant="outlined"
            placeholder="מייל*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.organizationEmail}
            error={
              formik.touched.organizationEmail &&
              Boolean(formik.errors.organizationEmail)
            }
            helperText={
              formik.touched.organizationEmail &&
              formik.errors.organizationEmail
            }
            InputProps={{
              sx: { textAlign: "right" },
              inputProps: { dir: "rtl" }, // Set the direction to right-to-left
            }}
          />

          <TextField
            fullWidth
            id="organizationPhoneNumber"
            name="organizationPhoneNumber"
            variant="outlined"
            placeholder="מספר טלפון*"
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, "");
              formik.handleChange({
                target: {
                  name: "organizationPhoneNumber",
                  value: numericValue,
                },
              });
            }}
            onBlur={formik.handleBlur}
            value={formik.values.organizationPhoneNumber}
            error={
              formik.touched.organizationPhoneNumber &&
              Boolean(formik.errors.organizationPhoneNumber)
            }
            helperText={
              formik.touched.organizationPhoneNumber &&
              formik.errors.organizationPhoneNumber
            }
            InputProps={{
              sx: { textAlign: "right" },
              inputProps: { dir: "rtl" }, // Set the direction to right-to-left
            }}
          />

          <TextField
            fullWidth
            id="organizationName"
            name="organizationName"
            // label="*שם מלא"
            variant="outlined"
            placeholder="שם הגוף"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.organizationName}
            error={
              formik.touched.organizationName &&
              Boolean(formik.errors.organizationName)
            }
            helperText={
              formik.touched.organizationName && formik.errors.organizationName
            }
            InputProps={{
              sx: { textAlign: "right" },
              inputProps: { dir: "rtl" }, // Set the direction to right-to-left
            }}
          />

          <FormControl fullWidth variant="outlined">
            <InputLabel
              htmlFor="organizationType"
              sx={{ textAlign: "right" }}
              dir="rtl"
              className="text-end"
            >
              התחום החברתי של הגוף
            </InputLabel>
            <Select
              labelId="organizationType-label"
              id="organizationType"
              name="organizationType"
              value={formik.values.organizationType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.organizationType &&
                Boolean(formik.errors.organizationType)
              }
              sx={{ textAlign: "right" }}
              inputProps={{ dir: "rtl" }}
              className="text-end" // Add any additional classes needed for styling
            >
              <MenuItem value="" disabled>
                בחר/י את התחום החברתי של הגוף
              </MenuItem>
              <MenuItem value="בריאות">בריאות</MenuItem>
              <MenuItem value="חינוך">חינוך</MenuItem>
              <MenuItem value="חברה ורווחה">חברה ורווחה</MenuItem>
              <MenuItem value="תעסוקה">תעסוקה</MenuItem>
              <MenuItem value="סביבה">סביבה</MenuItem>
              <MenuItem value="אחר">אחר</MenuItem>
            </Select>
          </FormControl>

          <div className="mb-3">
            <textarea
              id="organizationMessageBody"
              name="organizationMessageBody"
              className={`form-control border-2 text-end ${
                formik.touched.organizationMessageBody &&
                formik.errors.organizationMessageBody
                  ? "is-invalid"
                  : ""
              }`}
              rows={3}
              {...formik.getFieldProps("organizationMessageBody")}
              placeholder=".....שלח הודעה"
            />
            {formik.touched.organizationMessageBody &&
              formik.errors.organizationMessageBody && (
                <div className="invalid-feedback">
                  {formik.errors.organizationMessageBody}
                </div>
              )}
          </div>

          <Stack spacing={2}>
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
          </Stack>
        </Stack>
      </form>
    </div>
  );
};

export default RegistrationForm;
