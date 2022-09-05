import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProgressWidget from '../components/ProgressWidget';
import VisualyzerWidget from '../components/VisualyzerWidget';
import DefaultAnimation from '../components/DefaultAnimation';
import Turntable from '../components/Turntable';
import CdPlayer from '../components/CdPlayer';
import Cassette from '../components/mediaAnimations/Cassette';

const Playing = () => {
	const {
		mediaToDisplay,
		audioSrc,
		nextSong,
		getSongDuration,
		getCurrentTime,
		// updateProgressBar,
	} = useStateContext();
	// const { mediaToDisplay, songs, songIndex,audioSrc, loadSong } = useStateContext();
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate('/landing');
	};

	// 	// Update song details
	// function loadSong(song) {
	// 	const songTitle = song.replace(/\d+/g, '');
	// 	title.innerText = songTitle;
	// 	tapeTitle.innerText = songTitle;
	// 	audio.src = `./music/${song}.mp3`;
	// 	// cover.src = `./images/${song}.jpg`;
	// 	covers.forEach((cover) => {
	// 		cover.src = `./images/${song}.jpg`;
	// 	});
	// }

	// const getDuration = (e) => {
	// 	log(e);
	// };

	return (
		<StyledPlaying
			// initial={{ x: window.innerWidth }}
			// animate={{ width: '100%' }}
			// exit={{ width: 0 }}
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<Header handleBackClick={handleBackClick} />
			<div className='content-wrapper'>
				<div className='all-media-container'>
					{mediaToDisplay === 'display-default' && <DefaultAnimation />}
					{mediaToDisplay === 'display-record' && <Turntable />}
					{mediaToDisplay === 'display-cd' && <CdPlayer />}
					{mediaToDisplay === 'display-cassette' && <Cassette />}
				</div>

				<ProgressWidget />
				<VisualyzerWidget />
			</div>
			<Footer />
			<div className='music-container' id='music-container'>
				<audio
					src={audioSrc}
					onEnded={nextSong}
					// duration={getDuration}
					// onTimeUpdate={(e) => {
					// 	getSongDuration();
					// 	// getCurrentTime(e);
					// 	// updateProgressBar();
					// }}
					id='audio'
				></audio>
				{/* <audio src={audioSrc} id='audio' onEnded={nextSong}></audio> */}
				{/* <audio src={audioSrc} id='audio' onEnded={() => alert('DONE')}></audio> */}
				{/* <audio ref={(input) => {this.audioRef = input}} src={audioSrc} style={{ display: 'none' }} /> */}
			</div>
		</StyledPlaying>
	);
};
const StyledPlaying = styled(motion.section)`
	/* background-color: blue; */
	/* flex: 1;
	p {
		text-align: center;
	} */
	height: 100%;
	width: 100%;

	/* @include flex(space-between, center, column); */
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	/* display: none; */
	/*  */
	.content-wrapper {
		// height: calc(100vh - (24rem));
		width: 100%;
		/* @include flex(space-between, center, column); */
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		flex-grow: 1;
		// background-color: white;
		// .media-container.media-turntable {
		// 	// height: 100%;
		// 	width: 100%;
		// 	// background-color: $bg-grey;
		// 	padding: 1rem 2rem;
		// 	display: grid;
		// 	// // display: none;
		// 	place-content: center;
		// 	display: none;
		// 	// @include flex(space-between, center, column);
		// 	.circle-wrapper.vinyl {
		// 		height: 20rem;
		// 		width: 20rem;
		// 		display: grid;
		// 		place-content: center;
		// 		#vinyl {
		// 			height: 20rem;
		// 			width: 20rem;
		// 			border-radius: 50%;
		// 			animation: rotate 10s linear infinite;

		// 			animation-play-state: paused;
		// 		}
		// 	}
		// 	.circle-wrapper.vinyl.play #vinyl {
		// 		animation-play-state: running;
		// 	}
		// }
		// .media-container.media-cd {
		// 	// height: 100%;
		// 	width: 100%;
		// 	// background-color: $bg-grey;
		// 	padding: 1rem 2rem;
		// 	display: grid;
		// 	// // display: none;
		// 	place-content: center;
		// 	// @include flex(space-between, center, column);
		// 	.circle-wrapper.record {
		// 		height: 20rem;
		// 		width: 20rem;
		// 		display: grid;
		// 		place-content: center;
		// 		#cover {
		// 			height: 20rem;
		// 			width: 20rem;
		// 			border-radius: 50%;
		// 			animation: rotate 10s linear infinite;

		// 			animation-play-state: paused;
		// 		}
		// 	}
		// 	.circle-wrapper.record.play #cover {
		// 		animation-play-state: running;
		// 	}
		// }
		.media-container {
			/* height: 25rem; */
			width: 100%;
			// padding: 2rem 0;
			// background-color: lawngreen;
		}

		/* .progress-container {
			height: 4rem;
			margin: 1rem 0;
		} */
		/* .visualyser-container {
			height: 12rem;
		} */
	}
`;

export default Playing;
