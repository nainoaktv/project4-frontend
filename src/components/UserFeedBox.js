import React from 'react';
import './UserFeedBox.css';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ** We can adjust UserFeedBox styling later focus on relations for each element **

const UserFeedBox = (props) => {
  return (
    <Paper 
      elevation={5} 
      sx="display: flex;"
      id="userFeedPaper"
    >
      {/* Change img to use MUI Avatar */}
      <Box 
        paddingX={8}
        id="userFeedBox"
      >
        <Avatar 
          src="https://placekitten.com/200/150" 
          alt="Random Cat Picture"
          id="userAvatar"
          variant="rounded"
        />
        
        <Typography variant="body1" component="h1" id="firstName" className="userBoxInfo">
          {/* TODO: Change hardcode to show actual users name */}
          Random Named
        </Typography>
        <Typography variant="body1" component="h1" id="lastName" className="userBoxInfo">
          Palala
        </Typography>
        <Typography variant="overline" component="overline" className="userBoxInfo">
          {/* TODO : Change hardcode to actual username for each user */}
          @nainoavillegas
        </Typography>

        <br />

        <Typography variant="overline" component="overline" className="userBoxInfo">
          {/* TODO: Change hardcoded Followers to increment with each follower */}
          Followers: 20
        </Typography>
        <Typography variant="overline" component="overline" className="userBoxInfo">
          {/* TODO: Change hardcoded Following to increment with each user followed */}
          Following: 1
        </Typography>

        <br />

        <Typography variant="subtitle2" component="subtitle2" className="userBoxInfo">
          {/* TODO: Change hardcoded location to actual user location */}
          Seattle, WA
        </Typography>

      </Box>
    </Paper>
  )
}

export default UserFeedBox;