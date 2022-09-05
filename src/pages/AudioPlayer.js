import React from 'react';
// import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';

import Playlist from '../components/playlist/Playlist';
// import Actions from './components/playlist/Actions';
import Controls from '../components/Controls';

import PlayerState from '../context/PlayerState';

// import '../main.css';
// import '../input.css';
import Header from '../components/Header';
import DefaultAnimation from '../components/mediaAnimations/DefaultAnimation';
import Cassette from '../components/mediaAnimations/Cassette';
import CdPlayer from '../components/mediaAnimations/CdPlayer';
import Turntable from '../components/mediaAnimations/Turntable';
// import playerContext from '../context/playerContext';
// import VisualyzerWidget from '../components/VisualyzerWidget';
// import ProgressWidget from '../components/ProgressWidget';

// const close = () => {
// 	log('Closing the app');
// };

function AudioPlayer() {
	// const { SetCurrent, currentSong, songslist } = useContext(playerContext);
	const {
		mediaToDisplay,
		// audioSrc,
		// nextSong,
		// getSongDuration,
		// getCurrentTime,
		// updateProgressBar,
	} = useStateContext();
	const navigate = useNavigate();

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
				<div className='content-wrapper'>
					{/* <Cassette /> */}
					{/* <DefaultAnimation /> */}
					<div className='all-media-container'>
						{mediaToDisplay === 'display-default' && <DefaultAnimation />}
						{mediaToDisplay === 'display-record' && <Turntable />}
						{mediaToDisplay === 'display-cd' && <CdPlayer />}
						{mediaToDisplay === 'display-cassette' && <Cassette />}
					</div>
					{/* <div className='all-media-container'>
						{mediaToDisplay === 'display-default' && <DefaultAnimation />}
						{mediaToDisplay === 'display-record' && <Turntable />}
						{mediaToDisplay === 'display-cd' && <CdPlayer />}
						{mediaToDisplay === 'display-cassette' && <Cassette />}
					</div> */}

					{/* <ProgressWidget /> */}
					<Playlist />
					{/* <VisualyzerWidget /> */}
				</div>
				{/* <Actions /> */}
				{/* </div> */}
				<Controls />
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
	.content-wrapper {
		// height: calc(100vh - (24rem));
		width: 100%;
		/* @include flex(space-between, center, column); */
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		/* flex-grow: 1; */
		/* overflow-y: hidden; */
		row-gap: 2rem;
		overflow-y: auto;
		margin-bottom: 1rem;
	}
`;

export default AudioPlayer;
