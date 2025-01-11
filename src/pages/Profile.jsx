import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getUser } from '../redux/Slices/AuthSlice';

const Profile = () => {
  const dispatch = useDispatch();

  // Select data from the Redux store
  const { user, loading, error } = useSelector((state) => state.Auth);

const userData  = user.data
  // Fetch user profile when the component is mounted

  const token =  localStorage.getItem('token');

//   const getData = async ( ) => {
    
//     const response = dispatch(getUser(token));
//     console.log(response);
//   }


  useEffect(() => {
    dispatch(getUser(token));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div>
          <p><strong>First Name:</strong> {userData?.firstName}</p>
          <p><strong>Last Name:</strong> {userData?.lastName}</p>
          <p><strong>Email:</strong> {userData?.email}</p>
          {/* Add more fields as necessary */}
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;

