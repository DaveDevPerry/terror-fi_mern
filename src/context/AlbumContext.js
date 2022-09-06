import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const AlbumsContext = createContext();

export const albumsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ALBUMS':
			return {
				albums: action.payload,
			};

		case 'SET_ALBUM':
			log(action.payload, 'action payload album');

			return {
				album: action.payload,
			};

		case 'CREATE_ALBUM':
			return {
				// albums: {
				// 	...state.albums,
				// 	gigs: [action.payload, ...state.gigCounterData.gigs],
				// },
			};

		default:
			return state;
	}
};
// children represents everything the AlbumsContextProvider wraps
export const AlbumsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(albumsReducer, {
		albums: null,
		album: null,
	});

	return (
		<AlbumsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AlbumsContext.Provider>
	);
};
