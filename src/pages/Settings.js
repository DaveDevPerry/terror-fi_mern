import React from 'react';
// import { useTargetsContext } from '../hooks/useTargetsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Toggle from '../components/Toggler';
import Navbar from '../components/Navbar';
// import TargetForm from '../components/TargetForm';
import { CgCloseR } from 'react-icons/cg';
import { NavLink, useNavigate } from 'react-router-dom';
import AppDetails from '../components/AppDetails';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoChevronBack } from 'react-icons/io5';
import UserDefaultAnimation from '../components/UserDefaultAnimation';
import UserDefaultViewMode from '../components/UserDefaultViewMode';
// import KeyWidget from '../components/KeyWidget';
// import { useEffect } from 'react';
// import UserForm from '../components/UserForm';

const Settings = ({ themeToggler, theme }) => {
	// const { targets, dispatch } = useTargetsContext();
	// const { user } = useAuthContext();

	const navigate = useNavigate();

	// useEffect(() => {
	// 	const fetchTargets = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/targets`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_TARGETS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchTargets();
	// 	}
	// }, [dispatch, user]);

	const handleClose = () => {
		navigate('/library');
	};
	// log(targets, 'targets');
	return (
		<StyledSettings
			className='settings-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<header>
				{/* <div className='circle-wrapper' id='t-back-btn'>
					<IoChevronBack className='fas fa-angle-left' />
				</div> */}
				<NavLink to='/library' className='circle-wrapper'>
					<IoChevronBack className='fas fa-angle-left' />
				</NavLink>
				{/* {location.pathname === '/library' && ( */}
				<h5 className='page-heading'>Settings</h5>
				{/* )} */}
				{/* {location.pathname === '/player' && (
				<h5 className='page-heading'>
					terror<span id='hyphen'>-</span>fi
				</h5>
			)} */}
				<NavLink to='/settings' className='circle-wrapper'>
					<IoSettingsOutline className='settings-icon' />
				</NavLink>
				{/* <div className='circle-wrapper' onClick={handleSettings}>
			<IoSettingsOutline className='settings-icon' />
			</div> */}

				{/* <AnimatePresence> */}
				{/* <MediaMenu /> */}
				{/* </AnimatePresence> */}
			</header>
			<div className='settings-modal'>
				<h3>
					User settings
					<CgCloseR className='close-icon' onClick={handleClose} />
				</h3>

				<Toggle toggleTheme={themeToggler} theme={theme} />
				<UserDefaultAnimation theme={theme} />
				<UserDefaultViewMode theme={theme} />
				<Navbar />
				{/* <Navbar targets={targets} /> */}
				{/* {!targets && <TargetForm />} */}
				{/* {targets && targets.length === 0 && <TargetForm />} */}
				{/* <UserForm /> */}

				{/* <a
					href='https://www.daveperry.tech'
					className='developer-link'
					rel='noopener noreferrer'
					target='_blank'
				>
					developed by © daveperry.tech 2022
				</a> */}
			</div>
			{/* <h3>
				User settings
				<CgCloseR className='close-icon' onClick={handleClose} />
			</h3>

			<Toggle toggleTheme={themeToggler} theme={theme} />
			<Navbar />
		

			<a
				href='https://www.daveperry.tech'
				className='developer-link'
				rel='noopener noreferrer'
				target='_blank'
			>
				developed by © daveperry.tech 2022
			</a> */}
			{/* <KeyWidget /> */}

			<AppDetails theme={theme} />
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	row-gap: 1rem;
	padding: 2rem;
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	transition: all 200ms linear; */

	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	flex: 1;
	max-width: 42rem;
	/* padding: 0 1rem; */
	/* overflow-y: auto; */
	/* overflow: hidden; */
	overflow: hidden;
	transition: all 200ms linear;
	margin: 0 auto;
	/* margin: 1rem; */
	z-index: 500;
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		padding: 1rem 1rem 0 1rem;
		position: relative;
		transition: all 200ms linear;
		/* margin-bottom: 1rem; */
		.page-heading {
			font-family: 'BadSignal';
			font-size: 4rem;
			letter-spacing: 0.3rem;
			color: ${({ theme }) => theme.white};
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
			animation: glitch1 2500ms infinite;
			line-height: 3rem;
			transition: all 200ms linear;
			span#hyphen {
				font-family: 'Roboto';
				color: ${({ theme }) => theme.white};
			}
		}
		.circle-wrapper {
			height: 5rem;
			width: 5rem;
			display: grid;
			place-content: center;
			/* background-color: ${({ theme }) => theme.bgCircle}; */
			background-color: ${({ theme }) => theme.bgGrey};
			border: 0.3rem solid ${({ theme }) => theme.primaryColor};
			transition: 0.2s;

			.fa-angle-left {
				font-size: 3rem;
				transition: 0.2s;
			}
			.fa-bars {
				font-size: 2.2rem;
				transition: 0.2s;
			}
			.settings-icon {
				/* color: ${({ theme }) => theme.txtDarkGrey}; */
				font-size: 3rem;
				color: ${({ theme }) => theme.white};
			}
			/* &:hover {
			transition: 0.2s;
			.fa-angle-left {
				color: ${({ theme }) => theme.primaryColor};
			}
			.fa-bars {
				color: ${({ theme }) => theme.primaryColor};
			}
		} */
		}
	}
	.settings-modal {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		padding: 2rem;
		/* background: ${({ theme }) => theme.white};
		border-radius: 4px; */
		/* background: ${({ theme }) => theme.bgCircle}; */
		background-color: ${({ theme }) => theme.bgGrey};
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
		transition: all 200ms linear;
		border: 0.2rem solid ${({ theme }) => theme.primaryColor};
		border-radius: 1rem; /* border-radius: 4px; */
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
		transition: all 200ms linear;
		margin: 0 1rem;
		/* flex: 1; */
	}
	h3 {
		text-align: center;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.white};
			cursor: pointer;
		}
	}
	/* a.developer-link {
		text-decoration: none;
		align-self: center;
		margin-top: 6rem;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtDarkGrey};
	} */
	.circle-wrapper-hidden {
		height: 5rem;
		width: 5rem;
		display: grid;
		place-content: center;
		background-color: ${({ theme }) => theme.bgCircle};
		border: 0.3rem solid ${({ theme }) => theme.primaryColor};
		transition: 0.2s;
		opacity: 0;
		pointer-events: none;
		.fa-angle-left {
			font-size: 3rem;
			transition: 0.2s;
		}
		.fa-bars {
			font-size: 2.2rem;
			transition: 0.2s;
		}
		#menu {
			position: relative;
			display: hidden;
			#media-burger {
				z-index: 50;
				pointer-events: none;
				display: none;
			}
		}
		&:hover {
			transition: 0.2s;
			.fa-angle-left {
				color: ${({ theme }) => theme.primaryColor};
			}
			.fa-bars {
				color: ${({ theme }) => theme.primaryColor};
			}
		}
	}
`;

export default Settings;
