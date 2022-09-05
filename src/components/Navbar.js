import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setUserLoggedIn, userLoggedIn }) => {
	// let navigate = useNavigate();
	// const logout = () => {
	// 	localStorage.setItem('loopycurrentuser', JSON.stringify('false'));

	// 	setUserLoggedIn(false);
	// 	navigate('/login');
	// };
	return (
		<StyledNavbar>
			{/* {userLoggedIn && <button onClick={logout}>LOGOUT</button>} */}
			{/* <button onClick={logout}>LOGOUT</button> */}
			{/* <Link to='/login'>
				<li>LOGIN</li>
			</Link> */}
			{/* <Link to='/'>
				<li>HOME</li>
			</Link> */}
			{/* <NavLink
				to='/'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>
					GAME
					<br />
					SELECT
				</li>
			</NavLink> */}
			{/* <NavLink
				to='/leagues'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>LEAGUES</li>
			</NavLink> */}
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>LANDING</li>
			</NavLink>
			<NavLink
				to='/playing'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>PLAYING</li>
			</NavLink>
			{/* <NavLink
				to='/race'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>
					RACE TO
					<br />
					THE FINISH
				</li>
			</NavLink>
			<NavLink
				to='/dashboard'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>
					PLAYER
					<br />
					DASHBOARD
				</li>
			</NavLink>
			<NavLink
				to='/numbers'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>
					PLAYER
					<br />
					NUMBERS
				</li>
			</NavLink>
			<NavLink
				to='/gamehistory'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>
					GAME
					<br />
					HISTORY
				</li>
			</NavLink> */}
			{/* <NavLink
				to='/drawhistory'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>
					DRAW
					<br />
					HISTORY
				</li>
			</NavLink>
			<NavLink
				to='/ballhistory'
				className={({ isActive }) => (isActive ? 'selected' : '')}
			>
				<li>
					BALL
					<br />
					HISTORY
				</li>
			</NavLink> */}

			{/* <Link to='/'>
				<li>
					CURRENT
					<br />
					GAME
				</li>
			</Link>
			<Link to='/dashboard'>
				<li>
					PLAYER
					<br />
					DASHBOARD
				</li>
			</Link>
			<Link to='/numbers'>
				<li>
					PLAYER
					<br />
					NUMBERS
				</li>
			</Link>
			<Link to='/gamehistory'>
				<li>
					GAME
					<br />
					HISTORY
				</li>
			</Link>
			<Link to='/drawhistory'>
				<li>
					DRAW
					<br />
					HISTORY
				</li>
			</Link> */}

			{/* <Link to='/ballhistory'>
				<li>
					BALL
					<br />
					HISTORY
				</li>
			</Link> */}
			{/* <Link to='/leagues'>
						<li>LEAGUES</li>
					</Link> */}
			{/* <Link to='/tools'>
				<li>
					USER
					<br />
					TOOLS
				</li>
			</Link> */}
		</StyledNavbar>
	);
};
const StyledNavbar = styled.ul`
	/* border: 1px solid red; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	column-gap: 2rem;
	list-style: none;
	li {
		font-size: 1.4rem;
		text-align: center;
		color: ${({ theme }) => theme.titleText};
		transition: all 200ms linear;
		&:hover {
			color: ${({ theme }) => theme.primaryColor};
			/* font-weight: bold; */
		}
	}
	.selected {
		li {
			color: ${({ theme }) => theme.primaryColor};
		}
	}
	/* @media screen and (max-width: 420px) {
		display: none;
	} */
`;
export default Navbar;
