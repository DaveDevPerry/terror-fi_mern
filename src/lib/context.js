import React, { createContext, useContext, useState } from 'react';
import { log } from '../helper';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [menuStatus, setMenuStatus] = useState(false);
	const [playlistToView, setPlaylistToView] = useState(null);
	const [viewPlaylist, setViewPlaylist] = useState(null);
	const [showOptions, setShowOptions] = useState(false);
	const [mediaToDisplay, setMediaToDisplay] = useState(null);
	const [defaultAnimation, setDefaultAnimation] = useState(null);
	const [viewMode, setViewMode] = useState(null);
	const [defaultViewMode, setDefaultViewMode] = useState(null);
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

	const [currentSongTitle, setCurrentSongTitle] = useState('');
	const [currentSongCover, setCurrentSongCover] = useState('');
	const [audioSrc, setAudioSrc] = useState('./music/01 (Not So) Hot.mp3');
	// Update song details
	function loadSong(song) {
		const songTitle = song.replace(/\d+/g, '');
		setCurrentSongTitle(songTitle);
		const audioSource = `./music/${song}.mp3`;
		setAudioSrc(audioSource);
		const songCover = `./assets/${song}.webp`;
		setCurrentSongCover(songCover);
		showArtistName(audio);
	}

	const [isPlaying, setIsPlaying] = useState(false);

	function playMusic() {
		if (isPlaying) {
			pauseSong();
		} else {
			playSong();
		}
	}

	// Play song
	function playSong() {
		setIsPlaying(true);
		const audio = document.getElementById('audio');
		log(audio);
		audio.play();
	}

	// Pause song
	function pauseSong() {
		setIsPlaying(false);
		const audio = document.getElementById('audio');
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
		log(isPlaying, 'should be false');
		songIndex++;
		if (songIndex > songs.length - 1) {
			songIndex = 0;
		}
		loadSong(songs[songIndex]);
		setIsPlaying(true);
		playMusic();
	}

	const [currentSongTime, setCurrentSongTime] = useState('');
	// get song duration
	function getSongDuration(e) {
		log(e);
	}

	const [currentTime, setCurrentTime] = useState('');
	//get current time
	function getCurrentTime(e) {
		const durInSecs = Math.round(e.srcElement.currentTime);
		let secs = (durInSecs % 60).toString();
		let mins = Math.floor(durInSecs / 60).toString();
		setCurrentTime(`${mins}:${secs}`);
	}

	const [currentArtistName, setCurrentArtistName] = useState('');
	// shows band in browser
	function showArtistName() {
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
