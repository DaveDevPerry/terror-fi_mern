import React, { useState } from 'react';
import styled from 'styled-components';
import {
	IoPlay,
	IoPlaySkipForward,
	IoPlaySkipBack,
	IoPlayBack,
	IoPlayForward,
	IoPause,
	// IoHeartOutline,
	// IoHeart,
	// IoStop,
} from 'react-icons/io5';
import { useStateContext } from '../lib/context';

const Footer = () => {
	const {
		currentSongTitle,
		currentArtistName,
		playMusic,
		prevSong,
		nextSong,
		isPlaying,
		setIsPlaying,
	} = useStateContext();

	// const [isPaused] = useState(isPlaying);
	// const [isPaused, setIsPaused] = useState(isPlaying)

	const handleClick = () => {};
	return (
		<StyledFooter>
			<div className='song-details'>
				<div className='music-info'>
					<h2 className='song-title' id='title'>
						{currentSongTitle}
					</h2>
					<h3 className='artist'>{currentArtistName}</h3>
				</div>
			</div>

			<div className='player-controls'>
				<button id='prev' className='action-btn' onClick={prevSong}>
					<IoPlaySkipBack className='fas fa-backward' />
				</button>
				<button id='rewind' className='action-btn' onClick={handleClick}>
					<IoPlayBack className='fas fa-backward' />
				</button>
				<button
					id='play'
					className='action-btn action-btn-big'
					onClick={playMusic}
				>
					{isPlaying === true ? (
						<IoPause className='fas fa-pause' />
					) : (
						<IoPlay className='fas fa-play' />
					)}
				</button>
				{/* <button
						id='play'
						className='action-btn action-btn-big'
						onClick={playMusic}
					>
					</button> */}
				{/* {isPlaying === true ? (
					<button
						id='play'
						className='action-btn action-btn-big'
						onClick={playMusic}
					>
						<IoPause className='fas fa-pause' />
					</button>
				) : (
					<button
						id='play'
						className='action-btn action-btn-big'
						onClick={playMusic}
					>
						<IoPlay className='fas fa-play' />
					</button>
				)} */}

				<button id='forward' className='action-btn' onClick={handleClick}>
					<IoPlayForward className='fas fa-fast-forward' />
				</button>
				<button id='next' className='action-btn' onClick={nextSong}>
					<IoPlaySkipForward className='fas fa-forward' />
				</button>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	height: 16rem;
	width: 100%;
	background-color: ${({ theme }) => theme.bgCircle};
	border-top: 0.4rem solid ${({ theme }) => theme.primaryColor};
	z-index: 5;
	.song-details {
		// height: 100%;
		// height: 40%;
		width: 100%;
		padding: 1rem 2rem;
		text-align: center;
	}
	.player-controls {
		// height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		// z-index: 1;
		.action-btn {
			background-color: transparent;
			border: 0;
			// color: #dfdbdf;
			font-size: 2rem;
			// border-radius: 50%;
			// height: 5rem;
			// width: 5rem;
			cursor: pointer;

			padding: 1rem;
			/* margin: 0 20px; */
		}
		#play {
			background-color: ${({ theme }) => theme.primaryColor};
			border-radius: 50%;
			height: 7rem;
			width: 7rem;
			color: ${({ theme }) => theme.white};
			display: grid;
			place-content: center;
			// background: radial-gradient(
			// 	91.67% 91.67% at 50% 50%,
			// 	#a90808 0%,
			// 	#d71313 48.84%,
			// 	rgba(169, 8, 8, 0) 59.03%
			// );
			border: 0.4rem solid ${({ theme }) => theme.borderCircle};
			// box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3),
			// 	-2px -2px 2px 2px rgba(0, 0, 0, 0.3);
		}
		.fa-pause,
		.fa-play {
			color: ${({ theme }) => theme.white};
		}

		.action-btn.action-btn-big {
			color: ${({ theme }) => theme.white};
			font-size: 30px;
		}

		.action-btn:focus {
			outline: 0;
		}
	}
`;

export default Footer;
