import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import UserFeedBox from './UserFeedBox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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

const buttons = [
  <Button key="one">Like</Button>,
  <Button key="two">Comment</Button>,
  <Button key="three">View Post</Button>,
];

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
              <Avatar>🚀N</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>Post Goes Here</Typography>
              <ButtonGroup size="small" aria-label="small button group">
                {buttons}
              </ButtonGroup>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>👾H</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>Ayyo?</Typography>
              <ButtonGroup size="small" aria-label="small button group">
                {buttons}
              </ButtonGroup>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>💩P</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>This is a random post for looks :D</Typography>
              <ButtonGroup size="small" aria-label="small button group">
                {buttons}
              </ButtonGroup>
            </Grid>
          </Grid>
        </StyledPaper>
        <StyledPaper
          sx={{
            my: 1,
            mx: 'auto',
            p: 2,
          }}
        >
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>621</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>Hire me plz I'm begging you</Typography>
              <ButtonGroup size="small" aria-label="small button group">
                {buttons}
              </ButtonGroup>
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