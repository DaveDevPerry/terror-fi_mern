import { motion } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import playerContext from '../../context/playerContext';
import { log } from '../../helper';
// import { useStateContext } from '../../lib/context';

const DefaultAnimation = () => {
	// const { currentSongCover } = useStateContext();
	const { currentSong, songslist } = useContext(playerContext);

	useEffect(() => {
		log(currentSong, 'currentSong');
		log(songslist, 'songslist');
	}, [currentSong, songslist]);
	return (
		<StyledDefaultAnimation
			className='media-container media-default display-default media-active'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='default-wrapper'>
				<img
					src={songslist[currentSong].artworkUrl}
					alt='music-cover'
					className='cover default-cover'
				/>
				{/* <img
					src={currentSongCover}
					alt='music-cover'
					className='cover default-cover'
				/> */}
			</div>
		</StyledDefaultAnimation>
	);
};
const StyledDefaultAnimation = styled(motion.div)`
	display: grid;
	place-content: center;
	// height: 25rem;
	// overflow: hidden;
	transition: 0.5s ease linear;
	.default-cover {
		// width: 100%;
		height: 15rem;
		/* height: 20rem; */
		// object-fit: cover;
		border-radius: 2rem;
		margin: 0;
		box-shadow: -4px -4px 4px rgba(171, 171, 171, 0.25),
			4px 4px 4px rgba(0, 0, 0, 0.55);
	}
`;

export default DefaultAnimation;
