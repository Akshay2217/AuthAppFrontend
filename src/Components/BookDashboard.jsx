import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    description: 'A novel written by F. Scott Fitzgerald, set in the Jazz Age.',
    imageUrl: 'https://source.unsplash.com/featured/?book,classic',
  },
  {
    id: 2,
    title: '1984',
    description: 'A dystopian novel by George Orwell about a totalitarian regime.',
    imageUrl: 'https://source.unsplash.com/featured/?book,1984',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    description: 'A classic novel by Harper Lee about racial injustice in the Deep South.',
    imageUrl: 'https://source.unsplash.com/featured/?book,to-kill-a-mockingbird',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    description: 'A romantic novel by Jane Austen about manners and marriage.',
    imageUrl: 'https://source.unsplash.com/featured/?book,pride-and-prejudice',
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    description: 'A story by J.D. Salinger about teenage angst and rebellion.',
    imageUrl: 'https://source.unsplash.com/featured/?book,catcher-in-the-rye',
  },
];

const BookDashboard = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: '2rem', fontWeight: 'bold' }}>
        Book Dashboard
      </Typography>

      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Card style={{ height: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={book.title}
                  height="200"
                  image={book.imageUrl}
                  style={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookDashboard;

