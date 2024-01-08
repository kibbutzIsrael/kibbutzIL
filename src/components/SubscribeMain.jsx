import React from 'react';
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

const RegistrationVolForm = () => {
  // Schema and validation setup with Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is a required field'),
    email: Yup.string().email('Invalid email address').required('Email is a required field'),
    phoneNumber: Yup.string().required('Phone number is a required field'),
    instituteName: Yup.string().required('Institute name is a required field'),
    GenderName: Yup.string().required('Full name is a required field'),
    gender: Yup.string().required('Gender is a required field'),
    rolesUntilToday: Yup.string().required('Please enter the roles you have been involved in.'),
    whichRolesToday: Yup.string().required('Please enter the roles you want to be involved!.'),
  });

  // Form setup with useFormik
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      instituteName: '',
      BodyName: '',
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        // Send the form data to the server using Axios
        const response = await axios.post('endpoint backend kibutz', values);

        // Log the server response (modify as needed)
        console.log('Server Response:', response.data);

        // Clear the form values after a successful submission
        formik.resetForm();
      } catch (error) {
        // Handle any errors during the request (e.g., display an error message)
        console.error('Error submitting form:', error);
      }
    },
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Centering the form vertically and horizontally */}
      <form
        onSubmit={formik.handleSubmit}
        className="form"
        style={{ maxWidth: '600px', width: '100%', padding: '20px' }}
      >
        <Typography variant="h3" component="div" gutterBottom sx={{ textAlign: 'right' }}>
          שאלון למתנדב/ת
        </Typography>

        <Typography variant="body1" component="div" sx={{ fontSize: '14px', textAlign: 'right' }}>
          !היי שמחים לראות אותך כאן איתנו
          <br />
          במסגרת הפרויקטים שלנו, המתנדבים שלנו עובדים על פיתוח או הטמעה של פתרונות טכנולוגיים שנועדו
          לתת מענה לאתגר חברתי כואב
          <br />
          .נשמח למענה קצר על השאלות הבאות
          <br />
          *חשוב לציין שהתנדבות מתאפשרת לבעלי ניסיון של שנה אחת לפחות
        </Typography>

        <Stack spacing={2}>
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
            helperText={formik.touched.fullName && formik.errors.fullName}
            InputProps={{
              sx: { textAlign: 'right' },
              inputProps: { dir: 'rtl' }, // Set the direction to right-to-left
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
              sx: { textAlign: 'right' },
              inputProps: { dir: 'rtl' }, // Set the direction to right-to-left
            }}
          />
          <TextField
            fullWidth
            id="placeliving"
            name="placeliving"
            variant="outlined"
            size="small"
            placeholder="מקום מגורים*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.placeliving}
            error={formik.touched.placeliving && Boolean(formik.errors.placeliving)}
            helperText={formik.touched.placeliving && formik.errors.placeliving}
            InputProps={{
              sx: { textAlign: 'right' },
              inputProps: { dir: 'rtl' }, // Set the direction to right-to-left
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
              const numericValue = e.target.value.replace(/\D/g, '');
              formik.handleChange({
                target: { name: 'phoneNumber', value: numericValue },
              });
            }}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            InputProps={{
              sx: { textAlign: 'right' },
              inputProps: { dir: 'rtl' }, // Set the direction to right-to-left
            }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="gender" sx={{ textAlign: 'right' }}>
              Select Gender*
            </InputLabel>
            <Select
              label="מגדר"
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              displayEmpty
              sx={{ textAlign: 'right' }}
            >
              <MenuItem value="" disabled>
                בחר/י מגדר
              </MenuItem>
              <MenuItem value="male">זכר</MenuItem>
              <MenuItem value="female">נקבה</MenuItem>
              <MenuItem value="other">אחר</MenuItem>
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
            InputProps={{
              sx: { textAlign: 'right' },
              inputProps: { dir: 'rtl' }, // Set the direction to right-to-left
            }}
          />
          <TextField
            fullWidth
            id="whichRolesToday"
            name="whichRolesToday"
            variant="outlined"
            size="small"
            placeholder="באיזה תפקידים תרצה לקחת חלק?*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.whichRolesToday}
            error={formik.touched.whichRolesToday && Boolean(formik.errors.whichRolesToday)}
            helperText={formik.touched.whichRolesToday && formik.errors.whichRolesToday}
            InputProps={{
              sx: { textAlign: 'right' },
              inputProps: { dir: 'rtl' }, // Set the direction to right-to-left
            }}
          />
          <Stack spacing={2}>
            <Button type="submit" variant="contained" color="primary" size="small">
              !מוכן לאתגר
            </Button>
          </Stack>
        </Stack>
      </form>
    </div>
  );
};

export default RegistrationVolForm;
