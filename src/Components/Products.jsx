import React, { useState, useEffect } from 'react';
import {  Button,  Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/Slices/ProductSlice';
import CircularProgress from '@mui/material/CircularProgress';
import CardComponent from './CardComponent';


const Products = () => {
  const [count, setCount] = useState(10);
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  console.log(Product);
  const { data } = Product;

  const showMore = () => {
    setCount(count + 5)
  }

  useEffect(() => {
    dispatch(fetchProducts(count));
  }, [count])

  // console.log(state.Product.data)
  return (
    <div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: "30px" }}>
        {Product?.isLoading && <><CircularProgress /></>}
        {data && data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CardComponent item={item} />
          </Grid>
        ))}
      </div>
      {Product?.isLoading && <><CircularProgress /></>}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={() => showMore()}>Show more....</Button>
      </div>    </div>
  )
}

export default Products

