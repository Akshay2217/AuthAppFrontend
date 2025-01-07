import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/Slices/AuthSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Required'),
});

const RegisterForm = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, isAuthenticated } = useSelector(state => state.Auth);
     const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev); // Toggle showPassword state
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async(values, { resetForm }) => {
            try {
                console.log(values); // Log values for debugging
               const response =  await dispatch(registerUser(values));
               if(response.status == 200 ){
                 toast.success(response.payload.message)
                 resetForm(); // Reset form after successful submission
                 navigate('/login');// Assuming registerUser is an async action creator
               } else {
                toast.error(response.payload.message)
               }
                console.log("response",response.payload.message) 
                
              } catch (error) {
                // console.error('Registration error:', error);
                 // Log error for debugging
                // toast.error('Registration failed'); // Notify user of registration failure
              }
          
        },
      })
    

      // useEffect(() => {
      //   if (error) {
      //       toast.error(error.message); // Notify user of registration failure
      //   }
      // },[error])
    //   console.log(data);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          style={{marginBottom: 25}}
          id="firstName"
          name="firstName"
          label="Frist Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          style={{marginBottom: 25}}
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          style={{marginBottom: 25}}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
         <TextField
          fullWidth
          style={{marginBottom: 25}}
          id="password"
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'} 
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={togglePasswordVisibility} // Call toggle function
                              onMouseDown={(e) => e.preventDefault()} // Prevent focus shift on button press
                              edge="end"
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        </form>
        <p className="text-center mt-6">Already have an account? <span className="text-blue-500 underline" onClick={() => navigate('/login')}>Login</span></p>
      </div>
    </div>
  );
};

export default RegisterForm;