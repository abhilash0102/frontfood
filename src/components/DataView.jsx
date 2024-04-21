// DataView.jsx

import React, { useState, useEffect } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';

const DataView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server endpoint
    axios.get('http://localhost:3006/view')
      .then(response => {
        setData(response.data); // Set fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {data.map(item => (
        <Card key={item._id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default DataView;
