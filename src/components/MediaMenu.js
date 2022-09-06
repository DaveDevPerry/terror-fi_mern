import React from 'react';
// import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
import { TbVinyl, TbDeviceAudioTape, TbDisc } from 'react-icons/tb';
import { FiImage } from 'react-icons/fi';

const MediaMenu = () => {
	const { menuStatus, setMediaToDisplay } = useStateContext();
	// const { menuStatus, setMenuStatus } = useStateContext();

	// useEffect(() => {
	// 	log(menuStatus, 'menu status 1');
	// }, [menuStatus]);

	const handleClick = (e) => {
		// log(e.target.id, 'media to display');
		setMediaToDisplay(e.target.id);
	};
	// const handleClick = (clicked_id) => {
	// 	log(clicked_id, 'media to display');
	// };

	return (
		<>
			<AnimatePresence mode='wait'>
				{menuStatus === true && (
					<StyledMediaMenu
						className='media-menu'
						initial={{ height: 0 }}
						animate={{ height: '100%' }}
						exit={{ height: 0 }}
						// exit={{ y: '-200px' }}
						// exit={{ y: '-7rem' }}
						// exit={{ y: window.innerHeight }}
					>
						<ul id='media-menu'>
							<li id='display-default' onClick={handleClick}>
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
					</StyledMediaMenu>
				)}
			</AnimatePresence>
		</>
	);
};
const StyledMediaMenu = styled(motion.div)`
	position: absolute;
	/* top: -7rem; */
	/* top: 100%; */
	top: 0px;
	left: 50%;
	/* transform: translate(-50%, -100%); */
	transform: translate(-50%, 0);
	/* height: 5.5rem; */
	border-radius: 0 0 1rem 1rem;
	width: calc(100% - 16rem);
	background-color: ${({ theme }) => theme.primaryColor};
	box-shadow: -4px -4px 4px rgba(171, 171, 171, 0.25),
		4px 4px 4px rgba(0, 0, 0, 0.25);
	/* height: 90%; */
	z-index: 50000;
	overflow: hidden;
	display: flex;
	align-items: center;
	#media-menu {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: row;
		list-style: none;
		/* position: absolute; */
		/* top: 50%; */
		/* left: 50%; */
		/* transform: translate(-50%, -50%); */
		width: 100%;
		li {
			cursor: pointer;
			.media-menu-icons {
				color: ${({ theme }) => theme.white};
				font-size: 3rem;
				pointer-events: none;
			}
			span {
				pointer-events: none !important;
			}
		}
	}
`;

export default MediaMenu;
