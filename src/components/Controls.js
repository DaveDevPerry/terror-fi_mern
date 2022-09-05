import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import playerContext from '../context/playerContext';
// import ProgressBar from './ProgressBar';

function Controls() {
	// Global State
	const {
		currentSong,
		// songs,
		nextSong,
		prevSong,
		repeat,
		random,
		playing,
		toggleRandom,
		toggleRepeat,
		togglePlaying,
		handleEnd,
		songslist,
	} = useContext(playerContext);

	const audio = useRef('audio_tag');

	// self State
	const [stateVolume, setStateVolume] = useState(0.3);
	const [dur, setDur] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const fmtMSS = (s) => {
		return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
	};

	const toggleAudio = () =>
		audio.current.paused ? audio.current.play() : audio.current.pause();

	const handleVolume = (q) => {
		setStateVolume(q);
		audio.current.volume = q;
	};

	const handleProgress = (e) => {
		let compute = (e.target.value * dur) / 100;
		setCurrentTime(compute);
		audio.current.currentTime = compute;
	};

	useEffect(() => {
		audio.current.volume = stateVolume;
		if (playing) {
			toggleAudio();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSong]);

	return (
		<StyledControls className='controls'>
			<div className='upper-container'>
				<div className='progressb'>
					<span className='currentT'>{fmtMSS(currentTime)}</span>
					<input
						onChange={handleProgress}
						value={dur ? (currentTime * 100) / dur : 0}
						type='range'
						name='progressBar'
						id='prgbar'
					/>

					<span className='totalT'>{fmtMSS(dur)}</span>
					{/* <div className='songMeta'>
						<span className='songtitle'>{songslist[currentSong].title}</span>
						<span className='songartistName'>
							{songslist[currentSong].artistName}
						</span>
					</div> */}
				</div>
				<div className='songMeta'>
					<span className='songtitle'>{songslist[currentSong].title}</span>
					<span className='songartistName'>
						{songslist[currentSong].artistName}
					</span>
				</div>
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
						<i className='fas fa-volume-down'></i>
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
						<i className='fas fa-step-backward'></i>
					</span>

					<span
						className='play'
						onClick={() => {
							togglePlaying();
							toggleAudio();
						}}
					>
						<span className={!playing ? '' : 'hide'}>
							<i className='fas fa-play'></i>
						</span>
						<span className={!playing ? 'hide' : ''}>
							<i className='fas fa-pause'></i>
						</span>
					</span>

					<span className='next' onClick={nextSong}>
						<i className='fas fa-step-forward'></i>
					</span>
				</div>
				{/* <ProgressBar
				dur={dur}
				currentTime={currentTime}
				handleProgress={handleProgress}
				songslist={songslist}
				currentSong={currentSong}
				fmtMSS={fmtMSS}
			/> */}

				{/* <div className='progressb'>
				<div className='songMeta'>
					<span className='songtitle'>{songslist[currentSong].title}</span>
					<span className='songartistName'>
						{songslist[currentSong].artistName}
					</span>
				</div>
				<input
					onChange={handleProgress}
					value={dur ? (currentTime * 100) / dur : 0}
					type='range'
					name='progressBar'
					id='prgbar'
				/>
				<span className='currentT'>{fmtMSS(currentTime)}</span>/
				<span className='totalT'>{fmtMSS(dur)}</span>
			</div> */}
				<div className='plsoptions'>
					<span
						onClick={toggleRandom}
						className={'random ' + (random ? 'active' : '')}
					>
						<i className='fas fa-random'></i>
					</span>
					<span
						onClick={toggleRepeat}
						className={'repeat ' + (repeat ? 'active' : '')}
					>
						<i className='fas fa-redo-alt'></i>
					</span>
				</div>
			</div>
		</StyledControls>
	);
}
const StyledControls = styled.div`
	/* .controls { */
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	background: #3a3a3a;
	color: ${({ theme }) => theme.white};
	align-items: center;
	width: 100vw;
	padding: 1rem 0.5rem;
	background-color: ${({ theme }) => theme.bgCircle};
	border-top: 0.4rem solid ${({ theme }) => theme.primaryColor};
	z-index: 5;
	.upper-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		.progressb {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			#prgbar {
				background: transparent;
				width: 100%;
			}
			.currentT,
			.totalT {
				width: 35px;
				margin: 0 1rem;
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
				font-size: 1.125em;
				font-weight: 600;
				width: 100%;
				text-align: center;
			}
			.songartistName {
				font-size: 0.8em;
				width: 100%;
				text-align: center;
			}
		}
	}
	.lower-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		.vlme {
			display: flex;
			align-content: center;
			overflow: hidden;
			width: 40%;
			transition: all 500ms;
			&:hover {
				width: 40%;
			}
		}
		.volum {
			padding: 1rem;
			font-size: 2rem;
		}

		#volBar {
			padding: 0;
			margin: 0;
			width: 50px;
			background: transparent;
		}

		#volBar::-moz-range-thumb {
			height: 1rem;
			width: 3px;
			background-color: ${({ theme }) => theme.white};
			/* background: #2a6586; */
			border-radius: 5px;
			cursor: pointer;
		}
		.hide {
			display: none;
		}
		.musicControls {
			width: 60%;
			text-align: center;
			span {
				cursor: pointer;
				&:hover {
					color: ${({ theme }) => theme.white};
					/* color: #2a6586; */
				}
			}
			.play {
				/* background: #4aa9de; */
				background-color: ${({ theme }) => theme.primaryColor};
				padding: 15px 18px;
				border-radius: 100%;
				box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
				position: relative;
				z-index: 3;
				&:active {
					box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
				}
				&:hover {
					box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
				}
			}
			.prev {
				/* background: #4aa9de; */
				background-color: ${({ theme }) => theme.primaryColor};
				border-radius: 1rem 0 0px 1rem;
				padding-left: 15px;
				padding-right: 1rem;
				margin-right: -5px;
				z-index: 1;
			}
			.next {
				/* background: #4aa9de; */
				background-color: ${({ theme }) => theme.primaryColor};
				border-radius: 0px 1rem 1rem 0px;
				padding-right: 15px;
				padding-left: 1rem;
				margin-left: -5px;
				z-index: 1;
			}
		}
		.plsoptions {
			display: flex;
			justify-content: space-evenly;
			width: 40%;
			span {
				cursor: pointer;
				z-index: 29;
				&:hover {
					color: ${({ theme }) => theme.white};
					/* color: #2a6586; */
				}
				&.active {
					/* color: rgb(32, 77, 104); */
					color: ${({ theme }) => theme.primaryColor};
					.fas.fa-random {
						color: ${({ theme }) => theme.primaryColor};
					}
					.fas.fa-redo-alt {
						color: ${({ theme }) => theme.primaryColor};
					}
				}
			}
		}
		.plsoptions {
			justify-self: flex-end;
		}
	}
	/* } */
`;

export default Controls;
