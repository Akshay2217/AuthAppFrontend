import React from 'react'
import Products from './Products';
import {  useSelector } from 'react-redux'; 
import BookDashboard from './BookDashboard';


const Home = () => {
  const items = useSelector(state => state);
  const total = items?.cart.reduce((a,b) => a + b.price,0)
  return (
    <div>
      <div  className='h-20 bg-slate-100 content-center'>
        <h1 className='text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"'>Products Page </h1>
        <h1 className='text-2xl font-bold text-center'>Total items: {items?.cart?.length} Price: $ {total} /- </h1>
        
      </div>
      {/* <Products /> */}
      <BookDashboard /> 
    
    </div>
  )
}

export default Home;
