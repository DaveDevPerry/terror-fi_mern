import React, { createContext, useContext, useState } from 'react';
import { log } from '../helper';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [menuStatus, setMenuStatus] = useState(false);
	const [mediaToDisplay, setMediaToDisplay] = useState(null);
	const [playlistToView, setPlaylistToView] = useState(null);
	const [viewPlaylist, setViewPlaylist] = useState(null);
	const [showOptions, setShowOptions] = useState(false);
	const [viewMode, setViewMode] = useState(null);
	// const [viewMode, setViewMode] = useState('tracklist');

	const [defaultViewMode, setDefaultViewMode] = useState(null);
	const [defaultAnimation, setDefaultAnimation] = useState(null);
	// const [currentSong, setCurrentSong] = useState(null);
	const audio = document.getElementById('audio');
	// SONGS
	let songs = [
		'01 (Not So) Hot',
		'02 You Talk Too Much',
		'03 I Could Die',
		"04 She's A Drag",
		'01 Sex Doll Love Cramp',
		'02 Going Down Again',
		'03 Stuck In A Rut',
		"04 Crawlin' On Broken Glass",
		'02 Past Times',
		'03 Ignorance',
		'01 Brand New Toy',
		'02 Human Error',
		'04 The Pilgrims Rest',
		'01 Under the Moon of Love',
		'14 Bring Your Daughter To The Slaughter',
		"09 Keep On Movin'",
	];

	songs = songs.sort(() => Math.random() - 0.5);

	const randomFirstTrack = Math.floor(Math.random() * songs.length);

	let songIndex = randomFirstTrack;
	// log(songIndex, 'song index context');

	const [currentSongTitle, setCurrentSongTitle] = useState('');
	const [currentSongCover, setCurrentSongCover] = useState('');
	const [audioSrc, setAudioSrc] = useState('./music/01 (Not So) Hot.mp3');
	// Update song details
	function loadSong(song) {
		const songTitle = song.replace(/\d+/g, '');
		setCurrentSongTitle(songTitle);
		// title.innerText = songTitle;
		// tapeTitle.innerText = songTitle;
		const audioSource = `./music/${song}.mp3`;
		setAudioSrc(audioSource);
		// audio.src = `./music/${song}.mp3`;
		// cover.src = `./images/${song}.jpg`;
		const songCover = `./assets/${song}.webp`;
		setCurrentSongCover(songCover);
		// covers.forEach((cover) => {
		// 	cover.src = `./images/${song}.jpg`;
		// });
		showArtistName(audio);
	}

	// loadSong(songs[songIndex]);

	const [isPlaying, setIsPlaying] = useState(false);

	function playMusic() {
		// loadSong(songs[songIndex]);
		// const isPlaying = recordContainer.classList.contains('play');
		if (isPlaying) {
			pauseSong();
		} else {
			playSong();
		}
	}

	// Play song
	function playSong() {
		// loadSong(songs[songIndex]);
		setIsPlaying(true);
		const audio = document.getElementById('audio');
		// recordContainer.classList.add('play');
		// lpContainer.classList.add('play');
		// playBtn.querySelector('i.fas').classList.remove('fa-play');
		log(audio);
		// playBtn.querySelector('i.fas').classList.add('fa-pause');
		audio.play();

		// log(audio.src.duration, 'duration');

		// Once the metadata has been loaded, display the duration in the console
		// audio.addEventListener(
		// 	'loadedmetadata',
		// 	function () {
		// 		// Obtain the duration in seconds of the diodio file (with milliseconds as well, a float value)
		// 		var duration = audio.duration;

		// 		// example 12.3234 seconds
		// 		log('The duration of the song is of: ' + duration + ' seconds');
		// 		// Alternatively, just display the integer value with
		// 		// parseInt(duration)
		// 		// 12 seconds
		// 	},
		// 	false
		// );
		// start visualiser?
		// startVisualiser(audio);
		// update artist name in dom
		// showArtistName(audio);
	}

	// Pause song
	function pauseSong() {
		setIsPlaying(false);
		const audio = document.getElementById('audio');
		// recordContainer.classList.remove('play');
		// lpContainer.classList.remove('play');
		// playBtn.querySelector('i.fas').classList.add('fa-play');
		// playBtn.querySelector('i.fas').classList.remove('fa-pause');
		audio.pause();
	}
	// Previous song
	function prevSong() {
		songIndex--;
		if (songIndex < 0) {
			songIndex = songs.length - 1;
		}
		loadSong(songs[songIndex]);
		playSong();
	}
	// Next song
	function nextSong() {
		const audio = document.getElementById('audio');
		audio.pause();
		setIsPlaying(false);
		// setTimeout(() => {
		log(isPlaying, 'should be false');
		songIndex++;
		if (songIndex > songs.length - 1) {
			songIndex = 0;
		}
		loadSong(songs[songIndex]);
		setIsPlaying(true);
		playMusic();
		// playSong();
		// }, 2000);
	}

	const [currentSongTime, setCurrentSongTime] = useState('');
	// get song duration
	function getSongDuration(e) {
		log(e);
		// log(e.srcElement.duration);
		// const durInSecs = Math.round(e.srcElement.duration);
		// let secs = (durInSecs % 60).toString();
		// // secs < 10 ? (secs = secs.padStart(2, '0')) : secs;
		// // log(secs);
		// let mins = Math.floor(durInSecs / 60).toString();
		// // mins < 10 ? (mins = mins.padStart(2, '0')) : mins;
		// // log(mins);
		// setCurrentSongTime(`${mins}:${secs}`);
		// songTime.innerHTML = `${mins}:${secs}`;
	}

	const [currentTime, setCurrentTime] = useState('');
	//get current time
	function getCurrentTime(e) {
		const durInSecs = Math.round(e.srcElement.currentTime);
		// log(currentTime);
		let secs = (durInSecs % 60).toString();
		// secs < 10 ? (secs = secs.padStart(2, '0')) : secs;
		let mins = Math.floor(durInSecs / 60).toString();
		// mins < 10 ? (mins = mins.padStart(2, '0')) : mins;

		setCurrentTime(`${mins}:${secs}`);
		// curTime.innerHTML = `${mins}:${secs}`;
	}
	// const [currentPercentPlayed, setCurrentPercentPlayed] = useState('')
	// // update progress bar
	// function updateProgressBar(e) {
	// 	const { currentTime, duration } = e.srcElement;
	// 	let percentPlayed = Math.round((currentTime / duration) * 100);
	// 	// log(percentPlayed);
	// 	progressBar.style.width = `${percentPlayed}%`;
	// 	// progressBar.style.width = `${percentPlayed}%`;
	// }

	const [currentArtistName, setCurrentArtistName] = useState('');
	// shows band in browser
	function showArtistName() {
		// const artistElement = document.querySelector('.artist');
		if (
			currentSongTitle.includes('Jason') ||
			currentSongTitle.includes('Urban') ||
			currentSongTitle.includes('House') ||
			currentSongTitle.includes('Toy') ||
			currentSongTitle.includes('Error') ||
			currentSongTitle.includes('03 Pain') ||
			currentSongTitle.includes('Pilgrims') ||
			currentSongTitle.includes('Daughter') ||
			currentSongTitle.includes('Moon') ||
			currentSongTitle.includes('Keep')
			// audio.attributes[0].value.includes('Jason') ||
			// audio.attributes[0].value.includes('Urban') ||
			// audio.attributes[0].value.includes('House') ||
			// audio.attributes[0].value.includes('Toy') ||
			// audio.attributes[0].value.includes('Error') ||
			// audio.attributes[0].value.includes('03 Pain') ||
			// audio.attributes[0].value.includes('Pilgrims') ||
			// audio.attributes[0].value.includes('Daughter') ||
			// audio.attributes[0].value.includes('Moon') ||
			// audio.attributes[0].value.includes('Keep')
		) {
			setCurrentArtistName('TERRORVISION');
		} else {
			setCurrentArtistName('Spoilt Bratz');
		}
	}

	return (
		<AppContext.Provider
			value={{
				menuStatus,
				setMenuStatus,
				mediaToDisplay,
				setMediaToDisplay,
				// currentSong,
				// setCurrentSong,
				songIndex,
				songs,
				loadSong,
				audioSrc,
				currentSongCover,
				currentSongTitle,
				playMusic,
				prevSong,
				nextSong,
				pauseSong,
				currentArtistName,
				isPlaying,
				setIsPlaying,
				getSongDuration,
				getCurrentTime,
				// updateProgressBar,
				currentSongTime,
				currentTime,

				dataLoaded,
				setDataLoaded,
				setCurrentSongTime,

				playlistToView,
				setPlaylistToView,

				viewPlaylist,
				setViewPlaylist,
				setShowOptions,
				showOptions,
				viewMode,
				setViewMode,

				defaultViewMode,
				setDefaultViewMode,
				defaultAnimation,
				setDefaultAnimation,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
