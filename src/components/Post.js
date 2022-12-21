import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Post = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Create Post</h1>
      <TextField
        id="outlined-multiline-static"
        label="Enter your post..."
        multiline
        rows={4}
      />
      <Button variant="contained" sx={{ m: 2 }}>Submit</Button>
    </Box>
  )
}

export default Post;