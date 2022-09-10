import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const PlaylistsContext = createContext();

export const playlistsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_PLAYLISTS':
			return {
				playlists: action.payload,
			};

		case 'SET_PLAYLIST':
			log(action.payload, 'action payload album');

			return {
				playlist: action.payload,
			};

		case 'CREATE_PLAYLIST':
			log(state, 'current playlist state');
			log(action.payload, 'new playist');
			log([action.payload, ...state.playlists], 'new playist array');
			return {
				playlists: [action.payload, ...state.playlists],
			};
		case 'UPDATE_PLAYLIST':
			log(action.payload, 'playlist context');
			log(state, 'state, update playlist');
			return {
				// users: state.users.filter((user) => user._id === action.payload._id),
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
