// import { Link } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
import { useUsersContext } from '../hooks/useUserContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { TbVinyl, TbDeviceAudioTape, TbDisc } from 'react-icons/tb';
import { FiImage } from 'react-icons/fi';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
// import { format } from 'date-fns';

const UserDefaultAnimation = ({ targets }) => {
	// const { logout } = useLogout();
	const { user } = useAuthContext();
	const { active_user } = useUsersContext();
	const { setMediaToDisplay, setDefaultAnimation, defaultAnimation } =
		useStateContext();
	// const { dispatch, active_user } = useUsersContext();

	const handleClick = async (display) => {
		// logout();
		log('clicked');
		log(display, 'display chosen');
		setMediaToDisplay(display);
		setDefaultAnimation(display);

		// const response = await fetch(
		// 	`${process.env.REACT_APP_BACKEND_URL}/api/user/${active_user.userId}`,
		// 	{
		// 		method: 'PATCH',
		// 		body: display,
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${user.token}`,
		// 		},
		// 	}
		// );
		// const json = await response.json();
		// log(json, 'json updating user default animation');
		// if (!response.ok) {
		// 	// setError(json.error);
		// 	log('error in patch');
		// }
		// if (response.ok) {
		// 	// setError(null);
		// 	log('user updated?', json);
		// 	// playlistDispatch({ type: 'UPDATE_USER_PLAYLIST_WITH_SONG', payload: songId });
		// 	dispatch({ type: 'UPDATE_USER', payload: display });
		// }
	};
	return (
		<StyledUserDefaultAnimation>
			{user && active_user && (
				<div>
					<ul className='user-details-list'>
						<li>
							<p>Animation:</p>
							<ul id='animation-menu'>
								<li
									id='display-default'
									className={
										defaultAnimation === 'display-default'
											? 'active-animation'
											: ''
									}
									// className={
									// 	active_user.defaultAnimation === 'display-default'
									// 		? 'active-animation'
									// 		: ''
									// }
									onClick={() => {
										handleClick('display-default');
									}}
								>
									<FiImage className='media-menu-icons' />
								</li>
								<li
									id='display-record'
									className={
										defaultAnimation === 'display-record'
											? 'active-animation'
											: ''
									}
									// className={
									// 	active_user.defaultAnimation === 'display-record'
									// 		? 'active-animation'
									// 		: ''
									// }
									onClick={() => {
										handleClick('display-record');
									}}
								>
									<TbVinyl className='media-menu-icons' />
								</li>
								<li
									id='display-cd'
									className={
										defaultAnimation === 'display-cd' ? 'active-animation' : ''
									}
									// className={
									// 	active_user.defaultAnimation === 'display-cd'
									// 		? 'active-animation'
									// 		: ''
									// }
									onClick={() => {
										handleClick('display-cd');
									}}
								>
									<TbDisc className='media-menu-icons' />
								</li>
								<li
									id='display-cassette'
									className={
										defaultAnimation === 'display-cassette'
											? 'active-animation'
											: ''
									}
									// className={
									// 	active_user.defaultAnimation === 'display-cassette'
									// 		? 'active-animation'
									// 		: ''
									// }
									onClick={() => {
										handleClick('display-cassette');
									}}
								>
									<TbDeviceAudioTape className='media-menu-icons' />
								</li>
							</ul>
						</li>
					</ul>

					{/* <button onClick={handleClick}>Log out</button> */}
				</div>
			)}
		</StyledUserDefaultAnimation>
	);
};
const StyledUserDefaultAnimation = styled.nav`
	background-color: ${({ theme }) => theme.bgGrey};
	transition: all 200ms linear;
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
					/* width: 7.5rem; */
					/* width: 12rem; */
					width: 8.5rem;
					text-align: right;
				}
				#animation-menu {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
					list-style: none;
					/* width: 100%; */
					column-gap: 1.5rem;
					li {
						cursor: pointer;
						.media-menu-icons {
							color: ${({ theme }) => theme.txtGrey};
							font-size: 3rem;
							pointer-events: none;
						}
						span {
							pointer-events: none !important;
						}
						&.active-animation {
							/* li { */
							/* cursor: pointer; */
							.media-menu-icons {
								color: ${({ theme }) => theme.white};
								font-size: 3rem;
								pointer-events: none;
							}
							span {
								pointer-events: none !important;
							}
							/* } */
						}
					}
				}
			}
		}

		a {
			text-decoration: none;
		}
	}
`;

export default UserDefaultAnimation;
