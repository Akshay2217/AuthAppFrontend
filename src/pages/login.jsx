import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/Slices/AuthSlice'; // Ensure you have a loginUser action in AuthSlice
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Visibility, VisibilityOff } from '@mui/icons-material';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const { error, isAuthenticated } = useSelector((state) => state.Auth);
  const [showPassword, setShowPassword] = useState(false); // Correctly initialize the state

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = await dispatch(loginUser(values)); // Assuming loginUser is an async action creator
        if (data.payload.success) {
          toast.success('Login successful');
          resetForm(); // Reset form on successful login
        }
      } catch (err) {
        console.error('Login error:', err); // Log error for debugging
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle showPassword state
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home'); // Redirect to Home page after successful login
    }
    if (error) {
      toast.error(error.message); // Notify user of login failure
    }
  }, [isAuthenticated, error, navigate]); // Add navigate to dependency array

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            style={{ marginBottom: 25 }}
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
            style={{ marginBottom: 25 }}
            id="password"
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'} // Switch between text and password
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
            Login
          </Button>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account? <span className="text-blue-500 underline" onClick={() => navigate('/register')}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
