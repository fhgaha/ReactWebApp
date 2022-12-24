import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../context'

const Login = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	
	const login = (event) => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}

	return (
		<div>
			<h2>Login page</h2>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Enter Login"></MyInput>
				<MyInput type="password" placeholder="Enter Password"></MyInput>
				<MyButton>Log In</MyButton>
			</form>
		</div>
	)
}

export default Login