import React, { useEffect, useRef, useState } from 'react';
// import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';
// import { useStateContext } from '../lib/context';

import Playlist from '../components/playlist/Playlist';
// import Actions from '../components/playlist/Actions';
import Controls from '../components/Controls';

// import PlayerState from '../context/PlayerState';

// import '../main.css';
// import '../input.css';
import Header from '../components/Header';
// import DefaultAnimation from '../components/mediaAnimations/DefaultAnimation';
// import Cassette from '../components/mediaAnimations/Cassette';
// import CdPlayer from '../components/mediaAnimations/CdPlayer';
// import Turntable from '../components/mediaAnimations/Turntable';
import AnimationsContainer from '../components/AnimationsContainer';
import SongProgressWidget from '../components/SongProgressWidget';
import { usePlayerContext } from '../hooks/usePlayerContext';
import { useStateContext } from '../lib/context';
import { log } from '../helper';
// import playerContext from '../context/playerContext';
// import VisualyzerWidget from '../components/VisualyzerWidget';
// import ProgressWidget from '../components/ProgressWidget';

// const close = () => {
// 	log('Closing the app');
// };

function AudioPlayer() {
	const { dataLoaded } = useStateContext();
	const navigate = useNavigate();
	// const navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);
	// const { SetCurrent, currentSong, songslist } = useContext(playerContext);
	// const {
	// 	mediaToDisplay,
	// } = useStateContext();
	const {
		currentSong,
		// songs,
		// nextSong,
		// prevSong,
		repeat,
		random,
		// playing,
		// toggleRandom,
		// toggleRepeat,
		// togglePlaying,
		// handleEnd,
		songslist,
	} = usePlayerContext();
	const { playing, dispatch } = usePlayerContext();

	const audio = useRef('audio_tag');

	const togglePlaying = () =>
		dispatch({ type: 'TOGGLE_PLAYING', data: playing ? false : true });
	// Set current song
	const SetCurrent = (id) => dispatch({ type: 'SET_CURRENT_SONG', data: id });

	// Prev song
	const prevSong = () => {
		if (currentSong === 0) {
			SetCurrent(songslist.length - 1);
		} else {
			SetCurrent(currentSong - 1);
		}
	};
	// Next song
	const nextSong = () => {
		if (currentSong === songslist.length - 1) {
			SetCurrent(0);
		} else {
			SetCurrent(currentSong + 1);
		}
	};

	// Repeat and Random
	const toggleRepeat = (id) =>
		dispatch({ type: 'TOGGLE_REPEAT', data: repeat ? false : true });
	const toggleRandom = (id) =>
		dispatch({ type: 'TOGGLE_RANDOM', data: random ? false : true });

	// End of Song
	const handleEnd = () => {
		// Check for random and repeat options
		if (random) {
			return dispatch({
				type: 'SET_CURRENT_SONG',
				data: ~~(Math.random() * songslist.length),
			});
		} else {
			if (repeat) {
				nextSong();
			} else if (currentSong === songslist.length - 1) {
				return;
			} else {
				nextSong();
			}
		}
	};

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

	const { menuStatus, setMenuStatus } = useStateContext();

	const handleMenu = () => {
		log(menuStatus, 'menu status');
		setMenuStatus(!menuStatus);
	};

	const handleBackClick = () => {
		setMenuStatus(false);
		dispatch({ type: 'SET_ALL_SONGS_ARRAY', data: 'reset' });
		navigate('/library');
	};

	return (
		<StyledAudioPlayer
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <PlayerState> */}
			{/* <div className='main'>
					<div className='top'> */}
			{/* <div className="left">
          </div> */}

			<Header handleBackClick={handleBackClick} handleMenu={handleMenu} />
			{/* <div className='content-wrapper'> */}
			{/* <Cassette /> */}
			{/* <DefaultAnimation /> */}
			<AnimationsContainer />
			{/* <div className='all-media-container'>
						{mediaToDisplay === 'display-default' && <DefaultAnimation />}
						{mediaToDisplay === 'display-record' && <Turntable />}
						{mediaToDisplay === 'display-cd' && <CdPlayer />}
						{mediaToDisplay === 'display-cassette' && <Cassette />}
					</div> */}

			{/* <ProgressWidget /> */}
			<SongProgressWidget
				dur={dur}
				// setDur={setDur}
				currentTime={currentTime}
				// setCurrentTime={setCurrentTime}
				fmtMSS={fmtMSS}
				handleProgress={handleProgress}
				// audio={audio}
				// stateVolume={stateVolume}
				// setStateVolume={setStateVolume}
				// toggleAudio={toggleAudio}
				// handleVolume={handleVolume}
			/>
			<Playlist />
			{/* <VisualyzerWidget /> */}
			{/* </div> */}
			{/* <Actions /> */}
			{/* </div> */}
			<Controls
				dur={dur}
				setDur={setDur}
				currentTime={currentTime}
				setCurrentTime={setCurrentTime}
				fmtMSS={fmtMSS}
				handleProgress={handleProgress}
				audio={audio}
				stateVolume={stateVolume}
				setStateVolume={setStateVolume}
				toggleAudio={toggleAudio}
				handleVolume={handleVolume}
				handleEnd={handleEnd}
				// playing,
				toggleRandom={toggleRandom}
				toggleRepeat={toggleRepeat}
				togglePlaying={togglePlaying}
				prevSong={prevSong}
				nextSong={nextSong}
				currentSong={currentSong}
				repeat={repeat}
				random={random}
				songslist={songslist}
			/>
			{/* <Footer /> */}
			{/* </div> */}
			{/* </PlayerState> */}
		</StyledAudioPlayer>
	);
}
const StyledAudioPlayer = styled(motion.section)`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	/* row-gap: 1rem; */
	z-index: 2;
	max-width: 42rem;
	margin: 0 auto;
`;

export default AudioPlayer;
