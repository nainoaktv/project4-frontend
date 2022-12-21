import React from 'react';
import UserFeedBox from './UserFeedBox';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { Link } from 'react-router-dom';

// ++ TODO: When finished with Profile component comment back in all code ++

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Profile = (props) => {
	// const { handleLogout, user } = props;
	// const { id, name, email, exp } = user;
	// const expirationTime = new Date(exp * 1000);
	// let currentTime = Date.now();

	// if (currentTime >= expirationTime) {
	// 	handleLogout();
	// 	alert('Session has ended. Please login to continue.');
	// }

	// const userData = user ?
	// 	(<div>
	// 		<h1>Profile</h1>
	// 		<p>Name: {name}</p>
	// 		<p>Email: {email}</p>
	// 		<p>ID: {id}</p>
	// 	</div>) : <h2>Loading...</h2>

	// const errorDiv = () => {
	// 	return (
	// 		<div className="text-center pt-4">
	// 			<h3>Please <Link to="/login">login</Link> to view this page</h3>
	// 		</div>
	// 	);
	// };


	return (

		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={8}>
					<Item><UserFeedBox /></Item>
				</Grid>
				<Grid item xs={6} md={4}>
					<Item>Top Followed</Item>
				</Grid>
				<Grid item xs={6} md={4}>
					<Item>Most Popular</Item>
				</Grid>
				<Grid item xs={6} md={8}>
					<Item>All Your Posts</Item>
				</Grid>
			</Grid>
		</Box>

	);

}

export default Profile;