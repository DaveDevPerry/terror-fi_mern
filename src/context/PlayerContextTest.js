import { createContext, useReducer } from 'react';
import { song_list } from './songs';
import { log } from '../helper';

export const PlayerContextTest = createContext();

export const playerReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS_ARRAY':
			log(action.data, 'action data in player reducer !!!!!!');
			log({ ...state }, 'state in player reducer !!!!!!!');
			const clonedA = { ...state };
			const filteredA = clonedA.songslist.filter(
				(obj) => obj.albumId === action.data
			);
			return {
				...state,
				songslist: filteredA,
			};
		// const clonedA = [...action.data];
		// const filteredA = clonedA.filter((obj) => obj.albumId === 2);
		// return {
		// 	...state,
		// 	songslist: filteredA,
		// };
		// case 'SET_SONGS_ARRAY':
		// 	return {
		// 		...state,
		// 		songs: action.data,
		// 	};
		case 'SET_ALL_SONGS_ARRAY':
			log(action.data, 'reset?');
			// log(action.data, 'action data in player reducer !!!!!!');
			// log({ ...state }, 'state in player reducer !!!!!!!');
			// const clonedB = { ...state };
			// const filteredA = clonedB.songslist.filter(
			// 	(obj) => obj.albumId === action.data
			// );
			return {
				...state,
				songslist: song_list,
			};
		case 'SET_ALBUM_SONGS_ARRAY':
			log(action.data, 'action data in player reducer !!!!!!');
			log({ ...state }, 'state in player reducer !!!!!!!');
			const cloned = [...action.data];
			const filtered = cloned.filter((obj) => obj.albumId === 2);

			return {
				...state,
				songslist: filtered,
			};
		case 'SET_CURRENT_SONG':
			return {
				...state,
				currentSong: action.data,
				playing: true,
			};
		case 'TOGGLE_RANDOM':
			return {
				...state,
				random: action.data,
			};
		case 'TOGGLE_REPEAT':
			return {
				...state,
				repeat: action.data,
			};
		case 'TOGGLE_PLAYING':
			return {
				...state,
				playing: action.data,
			};
		default:
			return state;
	}
};
// children represents everything the PlayerContextTestProvider wraps
export const PlayerContextTestProvider = ({ children }) => {
	const initialState = {
		currentSong: 0,
		// currentCover: 0,
		// songslist: null,
		songslist: song_list,
		repeat: false,
		random: false,
		playing: false,
		audio: null,
	};
	const [state, dispatch] = useReducer(playerReducer, initialState);

	// Set album songs
	// const setAlbumSongs = (albumTracks) => {
	// 	log(albumTracks, 'albumTracks');
	// 	// log(state.songslist, 'songslist in player state');
	// 	dispatch({ type: 'SET_ALBUM_SONGS_ARRAY', data: albumTracks });
	// };

	// // Set songs array
	// const songsSet = (songArr) =>
	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: songArr });
	// // Set playing state
	// const togglePlaying = () =>
	// 	dispatch({ type: 'TOGGLE_PLAYING', data: state.playing ? false : true });
	// // Set current song
	// const SetCurrent = (id) => dispatch({ type: 'SET_CURRENT_SONG', data: id });
	// // Set current cover
	// // const SetCurrentCover = (id) => dispatch({ type: SET_CURRENT_COVER, data: id});

	// // Prev song
	// const prevSong = () => {
	// 	if (state.currentSong === 0) {
	// 		SetCurrent(state.songslist.length - 1);
	// 	} else {
	// 		SetCurrent(state.currentSong - 1);
	// 	}
	// };
	// // Next song
	// const nextSong = () => {
	// 	if (state.currentSong === state.songslist.length - 1) {
	// 		SetCurrent(0);
	// 	} else {
	// 		SetCurrent(state.currentSong + 1);
	// 	}
	// };

	// // Repeat and Random
	// const toggleRepeat = (id) =>
	// 	dispatch({ type: 'TOGGLE_REPEAT', data: state.repeat ? false : true });
	// const toggleRandom = (id) =>
	// 	dispatch({ type: 'TOGGLE_RANDOM', data: state.random ? false : true });

	// // End of Song
	// const handleEnd = () => {
	// 	// Check for random and repeat options
	// 	if (state.random) {
	// 		return dispatch({
	// 			type: 'SET_CURRENT_SONG',
	// 			data: ~~(Math.random() * state.songslist.length),
	// 		});
	// 	} else {
	// 		if (state.repeat) {
	// 			nextSong();
	// 		} else if (state.currentSong === state.songslist.length - 1) {
	// 			return;
	// 		} else {
	// 			nextSong();
	// 		}
	// 	}
	// };
	// const [state, dispatch] = useReducer(playerReducer, {
	// 	currentSong: 0,
	// 	songslist: song_list,
	// 	repeat: false,
	// 	random: false,
	// 	playing: false,
	// 	audio: null,
	// });

	return (
		<PlayerContextTest.Provider value={{ ...state, dispatch }}>
			{children}
		</PlayerContextTest.Provider>
	);
};
