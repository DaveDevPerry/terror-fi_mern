// import { Link } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { TbVinyl, TbDeviceAudioTape, TbDisc } from 'react-icons/tb';
import { FiImage } from 'react-icons/fi';
import { log } from '../helper';
// import { format } from 'date-fns';

const UserDefaultAnimation = ({ targets }) => {
	// const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		// logout();
		log('clicked');
	};
	return (
		<StyledUserDefaultAnimation>
			{user && (
				<div>
					<ul className='user-details-list'>
						<li>
							<p>Animation:</p>
							<ul id='animation-menu'>
								<li
									id='display-default'
									className='active-animation'
									onClick={handleClick}
								>
									<FiImage className='media-menu-icons' />
								</li>
								<li id='display-record' onClick={handleClick}>
									<TbVinyl className='media-menu-icons' />
								</li>
								<li id='display-cd' onClick={handleClick}>
									<TbDisc className='media-menu-icons' />
								</li>
								<li id='display-cassette' onClick={handleClick}>
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
					width: 7.5rem;
					text-align: right;
				}
				#animation-menu {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					flex-direction: row;
					list-style: none;
					width: 100%;
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
