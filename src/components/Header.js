// import React, { useContext } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import MediaMenu from './MediaMenu';
import { IoMenu, IoChevronBack } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { log } from '../helper';

const Header = ({ handleBackClick }) => {
	const location = useLocation();
	const { menuStatus, setMenuStatus } = useStateContext();

	const handleMenu = () => {
		log(menuStatus, 'menu status');
		setMenuStatus(!menuStatus);
	};

	return (
		<StyledHeader>
			<div className='circle-wrapper' id='t-back-btn' onClick={handleBackClick}>
				<IoChevronBack className='fas fa-angle-left' />
			</div>
			{location.pathname === '/library' && (
				<h5 className='page-heading'>Library</h5>
			)}
			{location.pathname === '/player' && (
				<h5 className='page-heading'>
					terror<span id='hyphen'>-</span>fi
				</h5>
			)}
			<div className='circle-wrapper' id='menu' onClick={handleMenu}>
				<IoMenu className='fas fa-bars' id='media-burger' />
			</div>

			<MediaMenu />
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	height: 8rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 1rem;
	position: relative;
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
		background-color: ${({ theme }) => theme.bgCircle};
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
	#menu {
		position: relative;
		#media-burger {
			z-index: 50;
			pointer-events: none;
		}
	}
`;

export default Header;
