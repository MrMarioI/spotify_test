import React from 'react';
import './../App.css'
import { accessUrl } from './../spotify';
import './../login.css'

function Login() {
	return (
		<div className="login">
            <p>Cliquez pour vous connecter : </p>
			<a href={accessUrl}>LOGIN TO SPOTIFY</a>
		</div>
	);
}

export default Login;