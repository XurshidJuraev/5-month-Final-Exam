import React from 'react';
import './Login.scss'
import { Context } from '../../Context/Authentication';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Login() {
	const { setToken } = React.useContext(Context);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { user_email, user_password } = evt.target.elements;

		console.log(user_email,
			user_password)

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: user_email.value.trim(),
				password: user_password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data?.token));
	};
	return (
		<div className="kone">
		<form onSubmit={handleSubmit}>
			<h1>Login For YouTube</h1>
		{/* <Box component="form"
		sx={{
		  '& .MuiTextField-root': { m: 1, width: '25ch' },
		}}
		autoComplete="off"> */}
			<TextField
				type='email'
				name='user_email'
				required
				id="user_email"
				label="Username"
				defaultValue="eve.holt@reqres.in"
        	/>

			<div className="alone">
			<TextField
				defaultValue='cityslicka'
				name='user_password'
				id="user_password"
				label="Password"
				type="password"
				autoComplete="current-password"
			/>
			</div>

			<div className="button-ni">
			<Stack spacing={2} direction="row">
				<Button variant="contained" type='submit'>Log In</Button>
			</Stack>
			</div>
		{/* </Box> */}
		</form>
		</div>
	);
}

export default Login;