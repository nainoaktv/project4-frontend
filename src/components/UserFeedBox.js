import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserFeedBox = (props) => {
  return (
    <Paper 
      elevation={3}
      sx="display: flex;">
        <img src="https://placekitten.com/200/150"/>
      <Box
      paddingX={1}>
          <Typography variant="testText" component="h4">
            DaCat
          </Typography>
          <Typography variant="testText" component="p">
            Garfield Placeholder
          </Typography>
          <Typography variant="testText" component="p">
            Location
          </Typography>
      </Box>
    </Paper>
  )
}

export default UserFeedBox;