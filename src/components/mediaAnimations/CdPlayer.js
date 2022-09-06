import { motion } from 'framer-motion';
// import React, { useContext } from 'react';
import styled from 'styled-components';
// import { useStateContext } from '../../lib/context';
// import playerContext from '../../context/playerContext';
import { usePlayerContext } from '../../hooks/usePlayerContext';

const CdPlayer = () => {
	// const { currentSongCover, isPlaying } = useStateContext();
	const { currentSong, songslist, playing } = usePlayerContext();
	return (
		<StyledCdPlayer
			className='media-container media-cd display-cd'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div
				className={
					playing === true
						? 'circle-wrapper record play'
						: 'circle-wrapper record'
				}
			>
				{/* <div
				className={
					isPlaying === true
						? 'circle-wrapper record play'
						: 'circle-wrapper record'
				}
			> */}

				<img
					src={songslist[currentSong].artworkUrl}
					alt='music-cover'
					className='cover'
				/>
				{/* <img
					src={currentSongCover}
					alt='music-cover'
					className='cover'
				/> */}
			</div>
		</StyledCdPlayer>
	);
};
const StyledCdPlayer = styled(motion.div)`
	/* .media-container.media-cd.media-active { */
	height: 100%;
	display: grid;
	place-content: center;
	.circle-wrapper.record {
		height: 20rem;
		width: 20rem;
		display: grid;
		place-content: center;
		.cover {
			height: 20rem;
			width: 20rem;
			border-radius: 50%;
			animation: rotate 10s linear infinite;
			animation-play-state: paused;
		}
	}
	.circle-wrapper.record.play .cover {
		animation-play-state: running;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;

export default CdPlayer;
