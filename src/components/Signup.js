// Imports
import React, { useState } from 'react';
// import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { register } from "../api/services/auth.js";
import './Signup.css';
// import { Redirect } from 'react-router-dom';

// const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const theme = createTheme();

export default function Signup() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [occupation, setOccupation] = useState();

  // +++++ OLD CODE ++++++
  // const [name, setName] = useState();
  // const [displayName, setDisplayName] = useState();
  // const [profilePic, setProfilePic] = useState();
  // const [email, setEmail] = useState();
  // const [location, setLocation] = useState();
  // const [occupation, setOccupation] = useState();
  // const [password, setPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleDisplayName = (e) => {
    setDisplayName(e.target.value);
  }

  const handleProfilePic = (e) => {
    setProfilePic(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleLocation = (e) => {
    setLocation(e.target.value);
  }

  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  // const handleConfirmPassword = (e) => {
  //   setConfirmPassword(e.target.value);
  // }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("event ");
    register(
      name,
      displayName,
      profilePic,
      email,
      password,
      location,
      occupation
    ).then((res) => {
      console.log(" res ", res);
    });
    alert(`${name} ${email} submitted`);
  };

  // ++++++ OLD CONFIRM PASSWORD & REDIRECT CODE ++++++
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (password === confirmPassword && password.length >= 8) {
  //     console.log("event ");
  //     register(
  //       name,
  //       displayName,
  //       profilePic,
  //       email,
  //       password,
  //       location,
  //       occupation
  //     )
  //     .then(response => {
  //       console.log('===> Yay, new user');
  //       console.log("response ", response);
  //       setRedirect(true);
  //     })
  //     .catch(error => console.log('===> Error in Signup', error));
  //   } else {
  //     if (password !== confirmPassword) return alert('Passwords don\'t match');
  //     alert('Password needs to be at least 8 characters. Please try again.');
  //   }
  // }

  // if (redirect) return <Redirect to="/profile" />

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12} className="formControl">
                <TextField
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  fullWidth
                  autoComplete="given-name"
                  required
                />
              </Grid>

              <Grid item xs={12} className="formControl">
                <TextField
                  type="text"
                  name="displayName"
                  value={displayName}
                  onChange={handleDisplayName}
                  id="displayName"
                  label="Username"
                  fullWidth
                  autoComplete="user-name"
                  required
                />
              </Grid>

              <Grid item xs={12} className="formControl">
                <TextField
                  type="text"
                  name="profilePic"
                  value={profilePic}
                  onChange={handleProfilePic}
                  id="profilePic"
                  label="Upload Profile Picture here..."
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} className="formControl">
                <TextField
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  id="email"
                  label="Email Address"
                  fullWidth
                  autoComplete="new-email"
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6} className="formControl">
                <TextField
                  type="location"
                  name="location"
                  value={location}
                  onChange={handleLocation}
                  id="location"
                  label="Location"
                  fullWidth
                  autoComplete="new-location"
                />
              </Grid>

              <Grid item xs={12} sm={6} className="formControl">
                <TextField
                  type="occupation"
                  name="occupation"
                  value={occupation}
                  onChange={handleOccupation}
                  id="occupation"
                  label="Occupation"
                  fullWidth
                  autoComplete="new-occupation"
                />
              </Grid>

              <Grid item xs={12} className="formControl">
                <TextField
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePassword}
                  id="password"
                  label="Password"
                  fullWidth
                  autoComplete="new-password"
                  required
                />
              </Grid>
              {/* OLD CONFIRM PASSWORD CODE */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  id="confirmPassword"
                  label="Confirm Password"
                  fullWidth
                  autoComplete="new-password"
                  required
                />
              </Grid> */}

            </Grid>

            <Button
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in!
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
