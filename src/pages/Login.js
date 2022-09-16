import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';
import AppDetails from '../components/AppDetails';

const Login = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(email, password);
	};

	return (
		<StyledLogin
			className='login-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='brand-wrapper'>
				<h1 id='brand'>
					Terror<span id='hyphen'>-</span>Fi
				</h1>
			</div>

			<div className='form-page-container'>
				<form onSubmit={handleSubmit} className='login'>
					<h3>Log in</h3>
					<div>
						<label>Email:</label>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							autoComplete='current-email'
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							autoComplete='current-password'
						/>
					</div>
					<button className='action-btn' disabled={isLoading}>
						Log in
					</button>
					{error && <div className='error'>{error}</div>}
				</form>

				<p>
					Need an account? Sign up<Link to='/signup'> here</Link>
				</p>
				<AppDetails theme={theme} />
			</div>

			<div className='launch-wrapper'>
				<h1 className='launch-btn' id='lets-rock'>
					The Demo Tapes
				</h1>
			</div>
		</StyledLogin>
	);
};
const StyledLogin = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	margin: 0 auto;
	max-width: 42rem;
	overflow: hidden;
	transition: all 200ms linear;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	z-index: 600;
	/* position: relative; */
	.brand-wrapper {
		background-color: ${({ theme }) => theme.primaryColor};
		/* border: 2px solid ${({ theme }) => theme.bgGrey}; */
		margin-right: 5rem;
		width: 100%;
		height: 1.5rem;
		transform: rotate(-2.5deg);
		margin-top: 5rem;
		/* margin-top: 10rem; */
		border-radius: 0.5rem;
		position: relative;
		h1#brand {
			position: absolute;
			top: 0;
			right: 0.5rem;
			transform: translate(0, -40%);
			color: ${({ theme }) => theme.white};
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
			animation: glitch1 2500ms infinite;
		}
		span#hyphen {
			font-family: 'Roboto';
			color: ${({ theme }) => theme.white};
		}
	}
	.launch-wrapper {
		/* border: 2px solid ${({ theme }) => theme.bgGrey}; */
		background-color: ${({ theme }) => theme.primaryColor};
		margin-left: 5rem;
		width: 100%;
		height: 1.5rem;
		transform: rotate(-2.5deg);
		margin-bottom: 5rem;
		/* margin-bottom: 10rem; */
		border-radius: 0.5rem;
		position: relative;
		.launch-btn {
			position: absolute;
			top: 0;
			left: 0.5rem;
			transform: translate(0, -30%);
			color: ${({ theme }) => theme.white};
			font-size: 3.6rem;
			letter-spacing: 0.1rem;
		}
	}
	.form-page-container {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		flex: 1;
		justify-content: center;
	}
	.login {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		background-color: ${({ theme }) => theme.bgGrey};
		/* background: ${({ theme }) => theme.bgCircle}; */
		border: 0.2rem solid ${({ theme }) => theme.primaryColor};
		/* background: ${({ theme }) => theme.white}; */
		border-radius: 1rem;
		/* border-radius: 4px; */
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
		z-index: 601;
		margin: 0 1rem;
		h3 {
			text-align: center;
			margin: 0;
			/* color: ${({ theme }) => theme.txtDarkGrey}; */
			color: ${({ theme }) => theme.white};
		}
		input {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			/* color: ${({ theme }) => theme.txtGrey}; */
			color: ${({ theme }) => theme.white};
			flex: 1;
			&:focus {
				outline: none;
				border: none;
				border: 2px solid ${({ theme }) => theme.primaryColor};
				border-radius: 4px;
				box-sizing: border-box;
			}
		}
		.action-btn {
			color: ${({ theme }) => theme.white};
			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
		}
	}
	p {
		text-align: center;
		/* color: ${({ theme }) => theme.txtDarkGrey}; */
		color: ${({ theme }) => theme.white};
		a {
			color: ${({ theme }) => theme.secondaryColor};
			text-decoration: none;
		}
	}
	label,
	input {
		display: block;
		/* color: ${({ theme }) => theme.txtGrey}; */
		color: ${({ theme }) => theme.white};
	}
	input {
		padding: 10px;
		margin-top: 10px;
		margin-bottom: 20px;
		width: 100%;
		border: 2px solid ${({ theme }) => theme.borderGrey};
		border-radius: 4px;
		box-sizing: border-box;
	}
	input:focus {
		outline: none;
		border: none;
		border: 2px solid ${({ theme }) => theme.primaryColor};
		border-radius: 4px;
		box-sizing: border-box;
	}
	form button {
		background: ${({ theme }) => theme.primaryColor};
		border: 0;
		color: #fff;
		padding: 1rem;
		border-radius: 4px;
		cursor: pointer;
	}
	div.error {
		padding: 1rem;
		background: ${({ theme }) => theme.bgError};
		border: 1px solid ${({ theme }) => theme.error};
		color: ${({ theme }) => theme.error};
		border-radius: 4px;
	}
	input.error {
		border: 1px solid ${({ theme }) => theme.error};
	}
`;

export default Login;
