import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import UserFeedBox from './UserFeedBox';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const Feed = () => {
  return (
    <Grid container spacing={4}>
      {/* Search Bar */}
      <Grid item xs={3}>
        <Item>
          <TextField
            fullWidth
            id="standard-search"
            label="Search..."
            type="search"
            variant="standard"
          />
        </Item>
      </Grid>
      {/* Post Section */}
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>Nai</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>Post Goes Here</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>
      {/* User display box on Feed */}
      <Grid item xs={4}>
        <Item><UserFeedBox /></Item>
      </Grid>

    </Grid>
  )
}

export default Feed;