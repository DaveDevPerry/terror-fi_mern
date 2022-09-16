// import { Link } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { TbVinyl, TbDeviceAudioTape, TbDisc } from 'react-icons/tb';
// import { FiImage } from 'react-icons/fi';
import { log } from '../helper';
// import { format } from 'date-fns';

const UserDefaultViewMode = ({ targets }) => {
	// const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		// logout();
		log('clicked');
	};
	return (
		<StyledUserDefaultViewMode>
			{user && (
				<div>
					<ul className='user-details-list'>
						<li>
							<p>View Mode:</p>
							<ul id='view-mode-menu'>
								<li
									id='display-default'
									className='active-view-mode'
									onClick={handleClick}
								>
									<button
										className='view-mode-btn'
										onClick={() => {
											// setViewMode('visualizer');
										}}
									>
										visualizer
									</button>
								</li>
								<li id='display-record' onClick={handleClick}>
									<button
										className='view-mode-btn'
										onClick={() => {
											// setViewMode('tracklist');
										}}
									>
										track list
									</button>
								</li>
							</ul>
						</li>
					</ul>

					{/* <button onClick={handleClick}>Log out</button> */}
				</div>
			)}
		</StyledUserDefaultViewMode>
	);
};
const StyledUserDefaultViewMode = styled.nav`
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
					width: 12rem;
					text-align: right;
				}
				#view-mode-menu {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
					list-style: none;
					width: 100%;
					column-gap: 1.5rem;
					li {
						cursor: pointer;
						.view-mode-btn {
							padding: 0.3rem 1rem;
							outline: none;
							border: none;
							border-radius: 0.5rem;
							background-color: ${({ theme }) => theme.bgGrey};
							color: ${({ theme }) => theme.txtGrey};
							width: 8rem;
							pointer-events: none;
							border: 1px solid ${({ theme }) => theme.txtGrey};
						}
						/* span {
							pointer-events: none !important;
						} */
						&.active-view-mode {
							/* li { */
							/* cursor: pointer; */
							.view-mode-btn {
								padding: 0.3rem 1rem;
								outline: none;
								border: none;
								border-radius: 0.5rem;
								background-color: ${({ theme }) => theme.bgGrey};
								color: ${({ theme }) => theme.white};
								width: 8rem;
								color: ${({ theme }) => theme.white};
								/* font-size: 3rem; */
								border: 1px solid ${({ theme }) => theme.white};
								pointer-events: none;
							}
							/* span {
								pointer-events: none !important; */
						}
						/* } */
					}
				}
			}
		}
		/* } */

		a {
			text-decoration: none;
		}
	}
`;

export default UserDefaultViewMode;
