import './App.css';
// import { Box, Typography, Button, TextField, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
// import { useFormik } from 'formik';
// import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import Counter from './Components/Counter';
// import { useDispatch } from 'react-redux';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import links from './Components/Link';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Register from './pages/Register';
import Login from './pages/login';
import PrivateRoute from './Components/PrivateRoute';
import { useSelector } from 'react-redux';
import Products from './Components/Products';
import Profile from './pages/Profile';



function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const [name, setName ] = useState("Your Name");
  // const [ecomData, setEcomData ] = useState([]);
  // const dispatch = useDispatch();


  // const fetchData = async () => {
  //   const res = await axios.get('https://fakestoreapi.com/products?limit=20');
  //   setEcomData(res.data)
  //   console.log(res.data);
  //  } 

  // useEffect(() => {
  //    fetchData();
  // },[])

  // const formik = useFormik({
  //   initialValues: {
  //     fullName:'',
  //     email: '',
  //     contact: ''
  //   },
  //   onSubmit: (values,{ resetForm }) => {
  //     alert(JSON.stringify(values, null, 2));
  //     setName(values)
  //     resetForm();
  //   }
  // });
  // const notify = () => toast.success("form submited successfully!");

  return (
    <div className="bg-slate-300">
       <Router>
      <Navbar links={links} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Redirect default path */}
        {/* <Route
          path="*"
          element={<Navigate to={isAuthenticated ? '/home' : '/login'} />}
        /> */}
      </Routes>
    
      <Footer />
      </Router>
      {/* <Button variant='contained' onClick={e => dispatch({ type:'INCREMENT'})}>Increament</Button>
      <Counter />
      <Button variant='contained' onClick={e => dispatch({ type:'DECREMENT'})}>decreament</Button> */}
      {/* <Typography variant='h2' sx={{margin: "auto",fontWeight:700}}>
        Show All Products
      </Typography>
       */}
      {/*  
      <Box sx={{ width: '100%', maxWidth: 1000, margin: "auto" }}>
        <Typography variant="h3" fontWeight={700} align='center' >
          Register form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          sx={{marginBottom:"20px"}}
          id="fullName"
          name="fullName"
          label="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
          
          <TextField
          fullWidth
          sx={{marginBottom:"20px"}}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}

        />
          <TextField
          fullWidth
          sx={{marginBottom:"20px"}}
          id="contact"
          name="contact"
          label="Conatact"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
          <Button variant='contained' fullWidth type="submit" onClick={notify}>Submit</Button>
        </form>
      </Box>

      <h1 className='text-3xl	bg-indigo-200 text-center font-bold'>{name.fullName}</h1>
      <h1 className='text-3xl	bg-indigo-200 text-center font-bold'>{name.email}</h1>
      <h1 className='text-3xl	bg-indigo-200 text-center font-bold'>{name.contact}</h1>\
*/}
      {/* <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-between', margin:"30px" }}>
      {ecomData.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        <Card key={index} sx={{ width: 345, flex: '1 1 auto', margin:"20px" }}>
          <CardMedia
            component="img"
            align
            alt={item.title}
            sx={{ width: "50%", margin:"auto" ,marginTop:"10px"}}
            image={item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="h5" color="text.secondary" fontWeight={700}>
              Price: ${item.price}
            </Typography>

          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
      ))}
    </div> */}


    </div>
  );
}

export default App;
