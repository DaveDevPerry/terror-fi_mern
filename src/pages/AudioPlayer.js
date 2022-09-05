import React, { useRef, useState } from 'react';
// import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';
// import { useStateContext } from '../lib/context';

import Playlist from '../components/playlist/Playlist';
// import Actions from './components/playlist/Actions';
import Controls from '../components/Controls';

import PlayerState from '../context/PlayerState';

// import '../main.css';
// import '../input.css';
import Header from '../components/Header';
// import DefaultAnimation from '../components/mediaAnimations/DefaultAnimation';
// import Cassette from '../components/mediaAnimations/Cassette';
// import CdPlayer from '../components/mediaAnimations/CdPlayer';
// import Turntable from '../components/mediaAnimations/Turntable';
import AnimationsContainer from '../components/AnimationsContainer';
import SongProgressWidget from '../components/SongProgressWidget';
// import playerContext from '../context/playerContext';
// import VisualyzerWidget from '../components/VisualyzerWidget';
// import ProgressWidget from '../components/ProgressWidget';

// const close = () => {
// 	log('Closing the app');
// };

function AudioPlayer() {
	// const { SetCurrent, currentSong, songslist } = useContext(playerContext);
	// const {
	// 	mediaToDisplay,
	// } = useStateContext();
	const navigate = useNavigate();

	const audio = useRef('audio_tag');

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

	const handleBackClick = () => {
		navigate('/library');
	};
	return (
		<StyledAudioPlayer
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<PlayerState>
				{/* <div className='main'>
					<div className='top'> */}
				{/* <div className="left">
          </div> */}

				<Header handleBackClick={handleBackClick} />
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
				/>
				{/* <Footer /> */}
				{/* </div> */}
			</PlayerState>
		</StyledAudioPlayer>
	);
}
const StyledAudioPlayer = styled(motion.section)`
	height: 100%;
	width: 100%;

	/* @include flex(space-between, center, column); */
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	flex-direction: column;
	row-gap: 1rem;
	/* .content-wrapper {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		row-gap: 2rem;
		overflow-y: auto;
		margin-bottom: 1rem;
	} */
	z-index: 2;
`;

export default AudioPlayer;
