import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/Slices/CartSlice";

const CardComponent = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card
        key={item.id}
        sx={{
          width: 345,
          height: 450, // Fixed card height
          flex: '1 1 auto',
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardMedia
          component="img"
          alt={item.title}
          image={item.image}
          sx={{
            width: "100%",
            height: "180px", // Fixed image height
            objectFit: "contain", // Ensures image scales proportionally
            marginTop: "10px",
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            overflow: "hidden", // Prevents content overflow
            textOverflow: "ellipsis",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: "40px", // Fixed content height for description
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2, // Limits to 2 lines
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.description}
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            fontWeight={700}
            sx={{ marginTop: "10px" }}
          >
            Price: ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={() => dispatch(addItem({ name: item.title, price: item.price }))}
            sx={{ flexGrow: 1 }}
          >
            Add to Cart
          </Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComponent;
