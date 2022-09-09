import React, { useEffect } from 'react';
// import React, { useEffect, useContext } from 'react';
// import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
// import { AnimatePresence } from 'framer-motion';
// import playerContext from '../context/playerContext';
// import { usePlayerContext } from '../hooks/usePlayerContext';
// import ProgressBar from './ProgressBar';
// import {
// 	FaRegPlayCircle,
// 	FaPauseCircle,
// 	FaRegPauseCircle,
// } from 'react-icons/fa';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { FiSkipForward, FiSkipBack, FiHeart } from 'react-icons/fi';
// import { VscUnmute } from 'react-icons/vsc';
import { GoUnmute } from 'react-icons/go';
import { BiShuffle, BiRepeat } from 'react-icons/bi';
import { MdPlaylistAdd } from 'react-icons/md';
import { usePlayerContext } from '../hooks/usePlayerContext';
import PlaylistOptions from './PlaylistOptions';
// import { log } from '../helper';

function Controls({
	dur,
	setDur,
	currentTime,
	setCurrentTime,
	fmtMSS,
	handleProgress,
	audio,
	stateVolume,
	setStateVolume,
	toggleAudio,
	handleVolume,
	// playing,
	toggleRandom,
	toggleRepeat,
	togglePlaying,
	handleEnd,
	prevSong,
	nextSong,

	currentSong,
	repeat,
	random,
	songslist,
	toggleFav,
	setPlaylistDisplay,
	playlistDisplay,
	handlePlaylist,
	addSongToPlaylist,
}) {
	// Global State
	const {
		// currentSong,
		// songs,
		// nextSong,
		// prevSong,
		// repeat,
		// random,
		playing,
		// toggleRandom,
		// toggleRepeat,
		// togglePlaying,
		// handleEnd,
		// songslist,
	} = usePlayerContext();

	// const audio = useRef('audio_tag');

	// self State
	// const [stateVolume, setStateVolume] = useState(0.3);
	// const [dur, setDur] = useState(0);
	// const [currentTime, setCurrentTime] = useState(0);

	// const fmtMSS = (s) => {
	// 	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
	// };

	// const toggleAudio = () =>
	// 	audio.current.paused ? audio.current.play() : audio.current.pause();

	// const handleVolume = (q) => {
	// 	setStateVolume(q);
	// 	audio.current.volume = q;
	// };

	// const handleProgress = (e) => {
	// 	let compute = (e.target.value * dur) / 100;
	// 	setCurrentTime(compute);
	// 	audio.current.currentTime = compute;
	// };
	// const { playing, dispatch } = usePlayerContext();
	// Set playing state
	// const togglePlaying = () =>
	// 	dispatch({ type: 'TOGGLE_PLAYING', data: playing ? false : true });
	// // Set current song
	// const SetCurrent = (id) => dispatch({ type: 'SET_CURRENT_SONG', data: id });

	// // Prev song
	// const prevSong = () => {
	// 	if (currentSong === 0) {
	// 		SetCurrent(songslist.length - 1);
	// 	} else {
	// 		SetCurrent(currentSong - 1);
	// 	}
	// };
	// // Next song
	// const nextSong = () => {
	// 	if (currentSong === songslist.length - 1) {
	// 		SetCurrent(0);
	// 	} else {
	// 		SetCurrent(currentSong + 1);
	// 	}
	// };

	// // Repeat and Random
	// const toggleRepeat = (id) =>
	// 	dispatch({ type: 'TOGGLE_REPEAT', data: repeat ? false : true });
	// const toggleRandom = (id) =>
	// 	dispatch({ type: 'TOGGLE_RANDOM', data: random ? false : true });

	// // End of Song
	// const handleEnd = () => {
	// 	// Check for random and repeat options
	// 	if (random) {
	// 		return dispatch({
	// 			type: 'SET_CURRENT_SONG',
	// 			data: ~~(Math.random() * songslist.length),
	// 		});
	// 	} else {
	// 		if (repeat) {
	// 			nextSong();
	// 		} else if (currentSong === songslist.length - 1) {
	// 			return;
	// 		} else {
	// 			nextSong();
	// 		}
	// 	}
	// };

	useEffect(() => {
		audio.current.volume = stateVolume;
		if (playing) {
			toggleAudio();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSong]);

	const handlePlaylistDisplay = () => {
		// navigate('/library');
		setPlaylistDisplay(!playlistDisplay);
	};

	return (
		<StyledControls className='controls'>
			<div className='upper-container'>
				{/* <div className='progressb'>
					<span className='currentT'>{fmtMSS(currentTime)}</span>
					<input
						onChange={handleProgress}
						value={dur ? (currentTime * 100) / dur : 0}
						type='range'
						name='progressBar'
						id='prgbar'
					/>

					<span className='totalT'>{fmtMSS(dur)}</span>
				</div> */}
				<span
					// onClick={setPlaylistDisplay(!playlistDisplay)}
					className='playlist'
					// className={'playlist ' + (random ? 'active' : '')}
				>
					<MdPlaylistAdd
						className='fas fa-playlist'
						onClick={handlePlaylistDisplay}
					/>
				</span>
				<div className='songMeta'>
					<span className='songtitle'>{songslist[currentSong].title}</span>
					<span className='songartistName'>
						{songslist[currentSong].artistName}
					</span>
				</div>
				<span
					onClick={toggleFav}
					// className={'favourite ' + (random ? 'active' : '')}
				>
					<FiHeart className='fas fa-favourite' />
				</span>
			</div>
			<div className='lower-container'>
				<audio
					onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
					onCanPlay={(e) => setDur(e.target.duration)}
					onEnded={handleEnd}
					ref={audio}
					type='audio/mpeg'
					preload='true'
					src={songslist[currentSong].fileUrl}
				/>
				<div className='vlme'>
					<span className='volum'>
						<GoUnmute className='fas fa-volume-down' />
					</span>
					<input
						value={Math.round(stateVolume * 100)}
						type='range'
						name='volBar'
						id='volBar'
						onChange={(e) => handleVolume(e.target.value / 100)}
					/>
				</div>
				<div className='musicControls'>
					<span className='prev' onClick={prevSong}>
						<FiSkipBack className='fas fa-step-backward' />
					</span>
					{/* {playing && ( */}
					<span
						className='play'
						onClick={() => {
							togglePlaying();
							toggleAudio();
						}}
					>
						{/* {!playing && ( */}
						<span className={!playing ? '' : 'hide'}>
							<BsPlayCircle className='fas fa-play' />
						</span>
						{/* )} */}
						{/* {playing && ( */}
						<span className={!playing ? 'hide' : ''}>
							<BsPauseCircle className='fas fa-pause' />
						</span>
						{/* )} */}
					</span>
					{/* )} */}

					<span className='next' onClick={nextSong}>
						<FiSkipForward className='fas fa-step-forward' />
					</span>
				</div>

				<div className='plsoptions'>
					{/* <span
						onClick={toggleFav}
						className={'random ' + (random ? 'active' : '')}
					>
						<FiHeart className='fas fa-random' />
					</span> */}
					<span
						onClick={toggleRandom}
						className={'random ' + (random ? 'active' : '')}
					>
						<BiShuffle className='fas fa-random' />
					</span>
					<span
						onClick={toggleRepeat}
						className={'repeat ' + (repeat ? 'active' : '')}
					>
						<BiRepeat className='fas fa-redo-alt' />
					</span>
				</div>
			</div>
			{/* <AnimatePresence mode='wait'> */}
			{/* {playlistDisplay === true && ( */}
			<PlaylistOptions
				setPlaylistDisplay={setPlaylistDisplay}
				playlistDisplay={playlistDisplay}
				handlePlaylistDisplay={handlePlaylistDisplay}
				handlePlaylist={handlePlaylist}
				addSongToPlaylist={addSongToPlaylist}
			/>
			{/* )} */}
			{/* </AnimatePresence> */}
		</StyledControls>
	);
}
const StyledControls = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* background: #3a3a3a; */
	color: ${({ theme }) => theme.white};
	align-items: center;
	width: 100%;
	padding: 1rem 0.5rem;
	background-color: ${({ theme }) => theme.bgGrey};
	border-top: 0.4rem solid ${({ theme }) => theme.primaryColor};
	z-index: 5;
	position: relative;
	.upper-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		span {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.white};
			.fas.fa-playlist {
				/* color: ${({ theme }) => theme.primaryColor}; */
				font-size: 3rem;
			}
			.fas.fa-favourite {
				/* color: ${({ theme }) => theme.primaryColor}; */
			}
		}
		.songMeta {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			flex: 1 1;
			.songtitle {
				font-size: 1.8rem;
				width: 100%;
				text-align: center;
			}
			.songartistName {
				font-size: 1.4rem;
				width: 100%;
				text-align: center;
				color: ${({ theme }) => theme.primaryColor};
				font-weight: 800;
				text-transform: uppercase;
			}
		}
	}
	.lower-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		/* border: 2px solid yellow; */
		.vlme {
			display: flex;
			align-content: center;
			justify-content: flex-start;
			column-gap: 1rem;
			overflow: hidden;
			/* width: 40%; */
			/* width: 40%; */
			width: 8rem;
			transition: all 500ms;
			/* border: 2px solid green; */
			/* &:hover {
				width: 11rem;
			} */
			.volum {
				font-size: 2.4rem;
				display: grid;
				place-content: center;
			}
			input[type='range'] {
				-webkit-appearance: none;
				margin: 1rem 0;
				width: 100%;
			}

			input[type='range']:focus {
				outline: none;
			}

			input[type='range']::-webkit-slider-runnable-track {
				width: 100%;
				height: 0.5rem;
				cursor: pointer;
				animation: 0.2s;
				box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
				/* background-color: ${({ theme }) => theme.txtGrey}; */
				background-color: ${({ theme }) => theme.white};
				border-radius: 0.5rem;
				border: 0px solid ${({ theme }) => theme.black};
			}

			input[type='range']::-webkit-slider-thumb {
				box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
				border: 0px solid ${({ theme }) => theme.black};
				height: 1.3rem;

				width: 0.4rem;
				/* height: 1.3rem;
				width: 1.3rem; */
				border-radius: 5rem;
				${'' /* background: #2a6586; */}
				background: ${({ theme }) => theme.primaryColor};
				cursor: pointer;
				-webkit-appearance: none;
				margin-top: -0.4rem;
			}

			input[type='range']:focus::-webkit-slider-runnable-track {
				background-color: ${({ theme }) => theme.white};
			}

			input[type='range']::-moz-range-track {
				width: 100%;
				height: 0.5rem;
				cursor: pointer;
				animation: 0.2s;
				box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
				background-color: ${({ theme }) => theme.white};
				border-radius: 0.5rem;
				border: 0px solid ${({ theme }) => theme.black};
			}

			input[type='range']::-moz-range-thumb {
				box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
				border: 0px solid ${({ theme }) => theme.black};
				height: 1.3rem;

				width: 0.4rem;
				/* height: 1.3rem;
				width: 1.3rem; */
				border-radius: 5rem;
				${'' /* background: #2a6586; */}
				background: ${({ theme }) => theme.primaryColor};
				cursor: pointer;
			}

			input[type='range']::-ms-track {
				width: 100%;
				height: 0.5rem;
				cursor: pointer;
				animation: 0.2s;
				background: transparent;
				/* background: ${({ theme }) => theme.green}; */
				border-color: transparent;
				/* color: ${({ theme }) => theme.green}; */
				color: transparent;
			}

			input[type='range']::-ms-fill-lower {
				background: ${({ theme }) => theme.primaryColor};
				border: 0px solid ${({ theme }) => theme.black};
				border-radius: 1rem;
				box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
			}

			input[type='range']::-ms-fill-upper {
				background: ${({ theme }) => theme.primaryColor};
				border: 0px solid ${({ theme }) => theme.black};
				border-radius: 1rem;
				box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
			}

			input[type='range']::-ms-thumb {
				box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
				border: 0px solid ${({ theme }) => theme.black};
				/* height: 1.3rem;
				width: 1.3rem; */
				height: 1.3rem;
				width: 0.4rem;
				border-radius: 5rem;
				${'' /* background: #2a6586; */}
				background: ${({ theme }) => theme.primaryColor};
				cursor: pointer;
			}

			/* input[type='range']:focus::-ms-fill-lower {
				background-color: ${({ theme }) => theme.bgGrey};
			} */

			/* input[type='range']:focus::-ms-fill-upper {
				background-color: ${({ theme }) => theme.bgGrey};
			} */
			#volBar {
				/* padding: 0;
				margin: 0;
				width: 50px; */
				/* width: 5rem; */
				width: 100%;
				background: transparent;
			}

			/* #volBar::-moz-range-thumb {
				height: 1rem;
				width: 3px;
				background-color: ${({ theme }) => theme.white};
				border-radius: 5px;
				cursor: pointer;
			} */
		}
		.hide {
			display: none;
		}
		.musicControls {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			flex: 1;
			column-gap: 1.4rem;
			/* border: 2px solid green; */

			span {
				cursor: pointer;
				&:hover {
					color: ${({ theme }) => theme.white};
				}
				&.prev {
					font-size: 2.4rem;
					/* display: grid;
					place-content: center; */
				}
				&.play {
					z-index: 3;
					span.hide {
						display: none;
					}
					span {
						display: block;
						.fas {
							font-size: 4rem;
						}
					}
					&:active {
						box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
					}
					&:hover {
						box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
					}
					/* display: grid;
					place-content: center; */
				}
				&.next {
					font-size: 2.4rem;
					/* display: grid;
					place-content: center; */
				}
			}
		}

		.plsoptions {
			display: flex;
			justify-content: space-between;
			column-gap: 1rem;
			width: 8rem;
			/* border: 2px solid green; */
			span {
				font-size: 2.4rem;
				cursor: pointer;
				z-index: 29;
				display: grid;
				place-content: center;
				&:hover {
					color: ${({ theme }) => theme.white};
				}
				&.active {
					color: ${({ theme }) => theme.primaryColor};
					.fas.fa-random {
						color: ${({ theme }) => theme.primaryColor};
					}
					.fas.fa-redo-alt {
						color: ${({ theme }) => theme.primaryColor};
					}
				}
			}
			/* .repeat {
				display: none;
			} */
		}
		/* .plsoptions {
			justify-self: flex-end;
			add
		} */
	}
	.playlist-model {
		position: absolute;
		z-index: 6000;
	}
`;

export default Controls;
