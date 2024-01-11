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
import InputLabel from '@mui/material/InputLabel';  // Add this line
import axios from 'axios';


// טופס ארגונים
const RegistrationForm = () => {
  // Schema and validation setup with Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is a required field'),
    email: Yup.string().email('Invalid email address').required('Email is a required field'),
    phoneNumber: Yup.string().required('Phone number is a required field'),
    instituteName: Yup.string().required('Institute name is a required field'),
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

  <hr></hr>
  return (
    <div id="subscribe" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Centering the form vertically and horizontally */}
      <form
        onSubmit={formik.handleSubmit}
        className="form"
        style={{ maxWidth: '600px', width: '100%', padding: '20px' }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            textAlign: 'center',
            margin: 'auto',
          }}
        >
          
          !טופס הרשמה לארגונים
          
        </Typography>

        <Typography variant="body1" component="div" sx={{ fontSize: '14px', textAlign: 'center' }}>
          !היי שלום לכל הארגונים המצטרפים
          <br />
          .במסגרת טופס ההרשמה, תצטרכו למלא פרטים שנועדו לנו על מנת שנתחיל בדרך משותפת יחד <br></br>  
          </Typography>


        <br />


        <Stack spacing={2}>

          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            // label="*שם מלא"
            variant="outlined"
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
            // label="*שם מלא"
            variant="outlined"
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
            id="phoneNumber"
            name="phoneNumber"
            variant="outlined"
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

          <TextField
            fullWidth
            id="instituteName"
            name="instituteName"
            // label="*שם מלא"
            variant="outlined"
            placeholder="שם הגוף"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.instituteName}
            error={formik.touched.instituteName && Boolean(formik.errors.instituteName)}
            helperText={formik.touched.instituteName && formik.errors.instituteName}
            InputProps={{
              sx: { textAlign: 'right' },
              inputProps: { dir: 'rtl' }, // Set the direction to right-to-left
            }}
          />

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="BodyName" sx={{ textAlign: 'right' }} dir="rtl" className="text-end">
              התחום החברתי של הגוף
            </InputLabel>
            <Select
              labelId="BodyName-label"
              id="BodyName"
              name="BodyName"
              value={formik.values.BodyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.BodyName && Boolean(formik.errors.BodyName)}
              sx={{ textAlign: 'right' }}
              inputProps={{ dir: 'rtl' }}
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

          <Stack spacing={2}>
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
          </Stack>
        </Stack>
      </form>
    </div>
  );
};



export default RegistrationForm;
