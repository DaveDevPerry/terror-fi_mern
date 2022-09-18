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
// import { useUsersContext } from '../hooks/useUserContext';
import { useStateContext } from '../lib/context';
import { log } from '../helper';
import { useAuthContext } from '../hooks/useAuthContext';
import AddPlaylistForm from '../components/AddPlaylistForm';

import { Toaster } from 'react-hot-toast';
// import playerContext from '../context/playerContext';
// import VisualyzerWidget from '../components/VisualyzerWidget';
import AudioVisualizer from '../components/VisualyzerWidget';
// import { useFavouritesContext } from '../hooks/useFavouritesContext';

// import { AnimatePresence } from 'framer-motion';
// import ProgressWidget from '../components/ProgressWidget';

// const close = () => {
// 	log('Closing the app');
// };

function AudioPlayer({
	setPlaylistDisplay,
	playlistDisplay,
	handlePlaylist,
	addSongToPlaylist,
	handlePlaylistFormDisplay,
	playlistFormDisplay,
	setPlaylistFormDisplay,
}) {
	// const { user, dispatch: userDispatch } = useUsersContext();
	const { user, dispatch: authDispatch } = useAuthContext();
	const { dataLoaded } = useStateContext();
	// const { favourites } = useFavouritesContext();
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

	// const toggleFav = async (e) => {
	// 	log(e.target, 'e target');
	// 	log(currentSong, 'song this title');
	// 	// log(this.song._id, 'song id?');
	// 	const songId = songslist[currentSong]._id;
	// 	log(songId, 'song id in mongo');

	// 	// user details
	// 	log(user, 'user in audio player toggle fav');

	// 	// check if already a fav
	// 	log(user.favourites, 'user favs');

	// 	// log(favourites, 'favourites');
	// 	// const clonedFavs = [...favourites];
	// 	// const isFav = clonedFavs.filter((obj) => obj._id === songId);
	// 	// log(isFav, 'is Fav value', songId);
	// 	// // if (favourites.filter((obj) => obj._id === songId) {
	// 	// // 	log(songId, 'songId is a fav');
	// 	// // }){
	// 	// if (isFav.length === 1) {
	// 	// 	log('remove from favs', songId);
	// 	// 	let songIndex = favourites.indexOf(songId);
	// 	// 	favourites.splice(songIndex, 1);
	// 	// 	log(favourites, 'favourites after remove');
	// 	// } else {
	// 	// 	log('add to favs', songId);

	// 	// 	favourites.push(songId);
	// 	// 	log(favourites, 'favourites after add');
	// 	// }
	// 	// // }
	// 	// // if (favourites.filter((obj) => obj._id !== songId)) {
	// 	// // 	log(songId, 'songId is not a fav');
	// 	// // }
	// 	// // add songId to users favourites
	// 	// // userDispatch({ type: 'UPDATE_USER', payload: songId });
	// 	// // authDispatch({ type: 'UPDATE_USER_FAVOURITE', payload: songId });
	// 	// // http://localhost:4000/api/favourites/632741e355a6587b5e1db96a
	// 	// const response = await fetch(
	// 	// 	`${process.env.REACT_APP_BACKEND_URL}/api/favourites/632741e355a6587b5e1db96a`,
	// 	// 	// `${process.env.REACT_APP_BACKEND_URL}/api/favourites/${user.favourites}`,
	// 	// 	{
	// 	// 		// const response = await fetch('/api/weights', {
	// 	// 		method: 'PATCH',
	// 	// 		headers: {
	// 	// 			'Content-Type': 'application/json',
	// 	// 			Authorization: `Bearer ${user.token}`,
	// 	// 		},
	// 	// 		body: favourites,
	// 	// 	}
	// 	// );
	// 	// const json = await response.json();
	// 	// log(json, 'json updating fav in toggle fav');
	// 	// if (!response.ok) {
	// 	// 	// setError(json.error);
	// 	// 	log('error in patch');
	// 	// }
	// 	// if (response.ok) {
	// 	// 	// setError(null);
	// 	// 	log('fav updated?', json);
	// 	// 	// authDispatch({ type: 'UPDATE_USER_FAVOURITE', payload: songId });
	// 	// }
	// 	// log('new band added', json);

	// 	// const response = await fetch(
	// 	// 	`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`,
	// 	// 	{
	// 	// 		// const response = await fetch('/api/user/signup', {
	// 	// 		method: 'PATCH',
	// 	// 		headers: {
	// 	// 			'Content-Type': 'application/json',
	// 	// 		},
	// 	// 		body: JSON.stringify({ email, password, username }),
	// 	// 	}
	// 	// );
	// 	// // this will return the data as json or the error
	// 	// const json = await response.json();

	// 	// if (!response.ok) {
	// 	// 	setIsLoading(false);
	// 	// 	setError(json.error);
	// 	// }
	// 	// if (response.ok) {
	// 	// 	// save the user to local storage
	// 	// 	localStorage.setItem('user-terror-fi', JSON.stringify(json));
	// 	// 	// update auth context with email
	// 	// 	dispatch({ type: 'LOGIN', payload: json });
	// 	// 	// update loading state to false as finished
	// 	// 	setIsLoading(false);
	// 	// }
	// };

	const toggleFav = async (e) => {
		log(e.target, 'e target');
		log(currentSong, 'song this title');
		// log(this.song._id, 'song id?');
		const songId = songslist[currentSong]._id;
		log(songId, 'song id in mongo');

		// user details
		log(user, 'user in audio player toggle fav');

		// check if already a fav

		// add songId to users favourites
		// userDispatch({ type: 'UPDATE_USER', payload: songId });
		// authDispatch({ type: 'UPDATE_USER_FAVOURITE', payload: songId });

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/user`,
			{
				// const response = await fetch('/api/weights', {
				method: 'PATCH',
				body: songId,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();
		log(json, 'json updating user in form post submit');
		if (!response.ok) {
			// setError(json.error);
			log('error in patch');
		}
		if (response.ok) {
			// setError(null);
			log('user updated?', json);
			authDispatch({ type: 'UPDATE_USER_FAVOURITE', payload: songId });
		}
		log('new band added', json);

		// const response = await fetch(
		// 	`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`,
		// 	{
		// 		// const response = await fetch('/api/user/signup', {
		// 		method: 'PATCH',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({ email, password, username }),
		// 	}
		// );
		// // this will return the data as json or the error
		// const json = await response.json();

		// if (!response.ok) {
		// 	setIsLoading(false);
		// 	setError(json.error);
		// }
		// if (response.ok) {
		// 	// save the user to local storage
		// 	localStorage.setItem('user-terror-fi', JSON.stringify(json));
		// 	// update auth context with email
		// 	dispatch({ type: 'LOGIN', payload: json });
		// 	// update loading state to false as finished
		// 	setIsLoading(false);
		// }
	};

	const { menuStatus, setMenuStatus, viewMode, setViewMode } =
		useStateContext();

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

			<Toaster />

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
			<div className='view-mode-btns'>
				{viewMode === 'tracklist' && (
					<button
						className='view-mode-btn'
						onClick={() => {
							setViewMode('visualizer');
						}}
					>
						visualizer
					</button>
				)}
				{viewMode === 'visualizer' && (
					<button
						className='view-mode-btn'
						onClick={() => {
							setViewMode('tracklist');
						}}
					>
						track list
					</button>
				)}
			</div>
			{/* <AnimatePrescence mode='wait'> */}

			{viewMode === 'tracklist' && <Playlist />}
			{viewMode === 'visualizer' && <AudioVisualizer />}
			{/* {viewMode === 'visualizer' && <VisualyzerWidget />} */}
			{/* </AnimatePrescence> */}
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
				toggleFav={toggleFav}
				setPlaylistDisplay={setPlaylistDisplay}
				playlistDisplay={playlistDisplay}
				handlePlaylist={handlePlaylist}
				addSongToPlaylist={addSongToPlaylist}
				handlePlaylistFormDisplay={handlePlaylistFormDisplay}
			/>
			{/* <Footer /> */}
			{/* </div> */}
			{/* </PlayerState> */}

			{/* // add playlist form */}
			<AddPlaylistForm
				handlePlaylistFormDisplay={handlePlaylistFormDisplay}
				playlistFormDisplay={playlistFormDisplay}
				setPlaylistFormDisplay={setPlaylistFormDisplay}
				// handleCreatePlaylist={handleCreatePlaylist}
			/>
		</StyledAudioPlayer>
	);
}
const StyledAudioPlayer = styled(motion.section)`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	row-gap: 1rem;
	z-index: 2;
	max-width: 42rem;
	margin: 0 auto;
	.view-mode-btns {
		display: flex;
		justify-content: flex-end;
		column-gap: 1rem;
		align-items: center;
		margin: 0 2rem;
		.view-mode-btn {
			padding: 0.3rem 1rem;
			outline: none;
			border: none;
			border-radius: 0.5rem;
			background-color: ${({ theme }) => theme.bgGrey};
			color: ${({ theme }) => theme.white};
			width: 8rem;
		}
	}
`;

export default AudioPlayer;
