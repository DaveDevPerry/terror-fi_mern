import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import styled from 'styled-components';
import playerContext from '../../context/playerContext';
// import { useStateContext } from '../../lib/context';

const Turntable = () => {
	// const { currentSongCover, isPlaying } = useStateContext();
	const { currentSong, songslist } = useContext(playerContext);
	return (
		<StyledTurntable
			className='media-container media-turntable display-record'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div id='turntable'>
				<div className='circle-wrapper lp-table play'>
					{/* <div
					className={
						isPlaying === true
							? 'circle-wrapper lp-table play'
							: 'circle-wrapper lp-table'
					}
				> */}
					<img
						src='./assets/vinyl.webp'
						alt='vinyl record'
						className='black-vinyl'
					/>
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

				<div className='record-player-arm'>
					<div className='arm-wrapper'>
						<img
							src='./assets/record-player-arm-1.webp'
							alt='turntable arm'
							id='player-arm'
						/>
					</div>
				</div>
			</div>
		</StyledTurntable>
	);
};
const StyledTurntable = styled(motion.div)`
	display: grid;
	place-content: center;
	#turntable {
		background-color: ${({ theme }) => theme.bgGrey};
		width: 28rem;
		height: 22rem;
		border-radius: 2rem;
		position: relative;
		box-shadow: -4px -4px 4px rgba(171, 171, 171, 0.25),
			4px 4px 4px rgba(0, 0, 0, 0.55);
		.circle-wrapper.lp-table {
			position: absolute;
			top: 50%;
			left: 2rem;
			transform: translate(0, -50%);
			height: 20rem;
			width: 20rem;
			display: grid;
			place-content: center;
			.black-vinyl {
				height: 20rem;
				width: 20rem;
				border-radius: 50%;
				position: absolute;
			}
			.cover {
				height: 6rem;
				width: 6rem;
				border-radius: 50%;
				animation: rotate 10s linear infinite;
				animation-play-state: paused;
			}
		}
		.circle-wrapper.lp-table.play .cover {
			animation-play-state: running;
		}
		.record-player-arm {
			position: absolute;
			top: 0;
			left: 20rem;
			height: 22rem;
			width: 8rem;
			padding-top: 4rem;
			.arm-wrapper {
				position: relative;
				animation: playRecord 60s ease infinite;
				#player-arm {
					position: absolute;
					height: 16rem;
					top: -1.4rem;
					left: 0;
					transform: translate(-25%, 0);
				}
			}
		}
	}
	@keyframes playRecord {
		0% {
			transform: rotate(-10deg);
		}
		5% {
			transform: rotate(2deg);
		}
		90% {
			transform: rotate(25deg);
		}
		100% {
			transform: rotate(-10deg);
		}
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

export default Turntable;
