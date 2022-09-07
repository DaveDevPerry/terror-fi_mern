import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { format } from 'date-fns';

const Navbar = ({ targets }) => {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		logout();
	};
	return (
		<StyledNavbar>
			{/* <div className='container'> */}
			{/* <Link to='/'>
					<h1>
						Wedding
						<br />
						Weight
					</h1>
				</Link> */}
			{/* <nav> */}
			{user && (
				<div>
					<ul className='user-details-list'>
						{/* <li>
							<p>username:</p>
							<span>{user.username}</span>
						</li> */}
						{/* <li>
							<p>D.O.B:</p>
							<span>12/02/1978</span>
						</li> */}
						<li>
							<p>email:</p>
							<span>{user.email}</span>
						</li>
						<li>
							<p>&nbsp;</p>
							<span>&nbsp;</span>
						</li>
						{/* {targets.length === 1 && (
							<>
								<li>
									<p>target:</p>
									<span>{targets[0].target_weight.toFixed(2)} Kgs</span>
								</li>
								<li>
									<p>date:</p>
									<span>
										{format(new Date(targets[0].deadline_date), 'dd/MM/yyyy')}
									</span>
								</li>
								<li>
									<p>event:</p>
									<span>{targets[0].deadline_reason}</span>
								</li>
							</>
						)} */}
					</ul>

					<button onClick={handleClick}>Log out</button>
				</div>
			)}
			{!user && (
				<div>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>Signup</Link>
				</div>
			)}
			{/* </nav> */}
			{/* </div> */}
		</StyledNavbar>
	);
};
const StyledNavbar = styled.nav`
	/* background: ${({ theme }) => theme.bgCircle}; */
	background-color: ${({ theme }) => theme.bgGrey};
	transition: all 200ms linear;
	/* .container { */
	/* max-width: 1400px; */
	/* margin: 0 auto; */
	/* padding: 0.5rem 1rem; */
	color: ${({ theme }) => theme.txtGrey};
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		row-gap: 3rem;
		.user-details-list {
			list-style: none;
			li {
				display: flex;
				align-items: center;
				column-gap: 1rem;
				p {
					/* width: 5rem; */
					/* text-align: right; */
				}
			}
		}
		/* h1 {
		font-size: 2rem;
	} */
		/* nav {
		display: flex;
		align-items: center;
		text-align: right;
	} */
		/* a,
	button {
		margin-left: 1rem;
	} */
		p {
			span {
				font-weight: bold;
				text-transform: capitalize;
			}
		}
		a {
			text-decoration: none;
		}
		button {
			align-self: flex-end;
			/* background: ${({ theme }) => theme.white}; */
			/* background: ${({ theme }) => theme.bgCircle}; */
			background-color: ${({ theme }) => theme.bgGrey};
			color: ${({ theme }) => theme.white};
			border: 2px solid ${({ theme }) => theme.white};
			/* color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor}; */
			padding: 0.3rem 0.6rem;
			border-radius: 0.4rem;
			/* font-family: 'Poppins'; */
			cursor: pointer;
			font-size: 1em;
		}
	}
	/* } */
`;

export default Navbar;
