import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const PlaylistsContext = createContext();

export const playlistsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.payload,
			};

		case 'SET_PLAYLIST':
			log(action.payload, 'action payload playlist');

			return {
				...state,
				playlist: action.payload,
			};
		// return {
		// 	playlists: state,
		// 	playlist: action.payload,
		// };

		case 'CREATE_PLAYLIST':
			log(state, 'current playlist state');
			log(action.payload, 'new playlist');
			log([action.payload, ...state.playlists], 'new playlist array');
			return {
				...state,
				playlists: [action.payload, ...state.playlists],
			};
		case 'UPDATE_PLAYLIST':
			log(action.payload, 'playlist context');
			log(state, 'state, update playlist');
			const statePl = state;
			log(statePl, 'state pl');
			const clonedPL = [...state];
			const playlistToUpdate = clonedPL.filter((playlist) => {
				return playlist._id === action.payload.plID;
			});
			log(playlistToUpdate, 'playlist to update');
			playlistToUpdate[0].songs.push(action.payload.sID);
			log(playlistToUpdate, 'playlist to update with extra song');

			return {
				// playlists: [...state]
			};
		// return {
		// 	users: state.users.filter((user) => user._id === action.payload._id),
		// };
		case 'DELETE_PLAYLIST':
			log(action.payload, 'delete playlist context');
			log(state, 'state, delete playlist');
			log(
				state.playlists.filter(
					(playlist) => playlist._id !== action.payload._id
				),
				'test'
			);
			return {
				// users: state.users.filter((user) => user._id === action.payload._id),
				playlists: state.playlists.filter(
					(playlist) => playlist._id !== action.payload._id
				),
			};

		default:
			return state;
	}
};
// children represents everything the PlaylistsContextProvider wraps
export const PlaylistsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(playlistsReducer, {
		playlists: null,
		playlist: null,
	});

	return (
		<PlaylistsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</PlaylistsContext.Provider>
	);
};
