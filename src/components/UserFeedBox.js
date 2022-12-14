import React from 'react';
import './UserFeedBox.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserFeedBox = (props) => {
  return (
    <Paper 
      elevation={3} 
      sx="display: flex;"
    >
      <img src="https://placekitten.com/200/150" className='userAvatar'/>
      <Box paddingX={1}>
        <Typography variant="h6" component="h6" className="userBoxInfo">
          Nainoa Villegas
        </Typography>
        <Typography variant="body1" component="body1" className="userBoxInfo">
          @nainoavillegas
        </Typography>
        <br />
        <Typography variant="body1" component="body1" className="userBoxInfo">
          Followers: 20
        </Typography>
        <br />
        <Typography variant="body1" component="body1" className="userBoxInfo">
          Following: 1
        </Typography>
        <br />
        <Typography variant="subtitle2" component="subtitle2" className="userBoxInfo">
          Seattle, WA
        </Typography>
      </Box>
    </Paper>
  )
}

export default UserFeedBox;