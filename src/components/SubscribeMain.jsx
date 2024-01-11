import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import { useDropzone } from 'react-dropzone';

const RegistrationVolForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('שם מלא הוא שדה חובה'),
    email: Yup.string().email('כתובת דוא"ל אינה חוקית').required('כתובת דוא"ל היא שדה חובה'),
    phoneNumber: Yup.string().required('מספר הטלפון הוא שדה חובה'),
    gender: Yup.string().required('בחירת מגדר היא שדה חובה'),
    rolesUntilToday: Yup.string().required('יש לציין את התפקידים שבהם השתתפת עד כה'),
    whichRolesToday: Yup.string().required('יש לציין את התפקידים שברצונך להשתתף בהם'),
    ExpYear: Yup.string().required('יש לציין את מספר שנות הניסיון'),
  }).test('rtl-concat', ' ', function (value) {
    // Add right-to-left mark to the error message
    return this.createError({ message: '\u200F' });
  });
  
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      BodyName: '',
      resume: null, // New field for resume file
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append('fullName', values.fullName);
        formData.append('email', values.email);
        formData.append('phoneNumber', values.phoneNumber);
        formData.append('BodyName', values.BodyName);
        formData.append('gender', values.gender);
        formData.append('rolesUntilToday', values.rolesUntilToday);
        formData.append('whichRolesToday', values.whichRolesToday);
        formData.append('ExpYear', values.ExpYear);
        formData.append('resume', values.resume);

        const response = await axios.post('endpoint backend kibutz', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Server Response:', response.data);
        formik.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    formik.setFieldValue('resume', acceptedFiles[0]);
  }, [formik]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf', // Allow only PDF files
    maxFiles: 1, // Allow only one file
  });

  return (
    <div id='subscribeMain' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={formik.handleSubmit} className="form" style={{ maxWidth: '400px', width: '100%', padding: '10px' }}>
        <Typography variant="h4" component="div" gutterBottom sx={{ textAlign: 'right' }}>
          <br></br>
          שאלון למתנדב/ת
        </Typography>

        <Typography variant="body1" component="div" sx={{ fontSize: '14px', textAlign: 'right' }}>
          !היי שמחים לראות אותך כאן איתנו
          <br />
          במסגרת הפרויקטים שלנו, המתנדבים שלנו עובדים על פיתוח או הטמעה של פתרונות טכנולוגיים<br></br> שנועדו
          לתת מענה לאתגר חברתי כואב
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
            helperText={formik.touched.fullName && formik.errors.fullName && <span style={{ textAlign: 'right' }}>{formik.errors.fullName}</span>}
            InputProps={{ sx: { textAlign: 'right', fontSize: '12px' }, inputProps: { dir: 'rtl' } }}
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
            InputProps={{ sx: { textAlign: 'right', fontSize: '12px' }, inputProps: { dir: 'rtl' } }}
          />
          <TextField
            fullWidth
            id="placeliving"
            name="placeliving"
            variant="outlined"
            size="small"
            placeholder="מקום מגורים"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.placeliving}
            error={formik.touched.placeliving && Boolean(formik.errors.placeliving)}
            helperText={formik.touched.placeliving && formik.errors.placeliving}
            InputProps={{ sx: { textAlign: 'right', fontSize: '12px' }, inputProps: { dir: 'rtl' } }}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            variant="outlined"
            size="small"
            placeholder="מספר טלפון*"
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, '');
              formik.handleChange({
                target: { name: 'phoneNumber', value: numericValue },
              });
            }}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            InputProps={{ sx: { textAlign: 'right', fontSize: '12px', }, inputProps: { dir: 'rtl' } }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="gender" sx={{ textAlign: 'right', fontSize: '24px' }}>
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
              sx={{ textAlign: 'right', fontSize: '12px' }}
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
            id="rolesUntilToday"
            name="rolesUntilToday"
            variant="outlined"
            size="small"
            placeholder="באיזה תפקידים לקחת חלק עד היום?*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rolesUntilToday}
            error={formik.touched.rolesUntilToday && Boolean(formik.errors.rolesUntilToday)}
            helperText={formik.touched.rolesUntilToday && formik.errors.rolesUntilToday}
            InputProps={{ sx: { textAlign: 'right', fontSize: '12px' }, inputProps: { dir: 'rtl' } }}
          />
          <TextField
            fullWidth
            id="whichRolesToday"
            name="whichRolesToday"
            variant="outlined"
            size="small"
            placeholder="באיזה תפקיד תרצה לקחת חלק?*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.whichRolesToday}
            error={formik.touched.whichRolesToday && Boolean(formik.errors.whichRolesToday)}
            helperText={formik.touched.whichRolesToday && formik.errors.whichRolesToday}
            InputProps={{ sx: { textAlign: 'right', fontSize: '12px' }, inputProps: { dir: 'rtl' } }}
          />
          <TextField
            fullWidth
            id="ExpYear"
            name="ExpYear"
            variant="outlined"
            size="small"
            placeholder="כמה שנות ניסיון יש לך בתחום התפקיד?*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ExpYear}
            error={formik.touched.ExpYear && Boolean(formik.errors.ExpYear)}
            helperText={formik.touched.ExpYear && formik.errors.ExpYear}
            InputProps={{ sx: { textAlign: 'right', fontSize: '12px' }, inputProps: { dir: 'rtl' } }}
          />

          {/* File upload (resume) */}
          <div {...getRootProps()} style={{ margin: '10px 0', border: '2px dashed #eeeeee', borderRadius: '4px', padding: '20px', textAlign: 'right', fontSize: '12px' }}>
            <input {...getInputProps()} />
            <p> PDF File שלח קורות חיים </p>
            {formik.values.resume && (
              <p>קובץ: {formik.values.resume.name}</p>
            )}
          </div>

          <Stack spacing={1}>
          <Button
    type="submit"
    variant="contained"
    style={{
        backgroundColor: '#5059B3',  // צבע הרקע של הכפתור
        color: '#ffffff',  // צבע הטקסט בכפתור
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
