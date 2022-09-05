import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const SongsContext = createContext();

export const songsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			return {
				songs: action.payload,
			};

		case 'SET_SONG':
			log(action.payload, 'action payload song');

			return {
				song: action.payload,
			};

		case 'CREATE_SONG':
			return {
				// songs: {
				// 	...state.songs,
				// 	gigs: [action.payload, ...state.gigCounterData.gigs],
				// },
			};

		default:
			return state;
	}
};
// children represents everything the SongsContextProvider wraps
export const SongsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(songsReducer, {
		songs: null,
		song: null,
	});

	return (
		<SongsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</SongsContext.Provider>
	);
};
