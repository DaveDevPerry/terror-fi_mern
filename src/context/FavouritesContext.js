import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const FavouritesContext = createContext();

export const favouritesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVOURITES':
			// action.payload === null
			// 			? action.payload
			// 			:
			log(action.payload, 'set fav payload');
			// log(action.payload[0].songs, 'set fav payload');
			return {
				favourites: action.payload[0].songs,
			};
		case 'ADD_FAVOURITE':
			log(state, 'fav state - add fav');
			log(action.payload, ' payload add fav');
			return {
				// ...state,action.payload
			};
		// case 'SET_favourite':
		// 	log(action.payload, 'action payload favourite');

		// 	return {
		// 		favourites: state,
		// 		favourite: action.payload,
		// 	};

		case 'CREATE_FAVOURITES':
			log(state, 'current favourite state');
			log(action.payload, 'new favourite');
			log([action.payload, ...state.favourites], 'new favourites array');
			return {
				favourites: [action.payload, ...state.favourites],
			};
		case 'UPDATE_FAVOURITES':
			log(action.payload, 'favourite context');
			log(state, 'state, update favourite');
			return {
				// users: state.users.filter((user) => user._id === action.payload._id),
			};
		case 'DELETE_FAVOURITES':
			log(action.payload, 'delete favourite context');
			log(state, 'state, delete favourite');
			log(
				state.favourites.filter(
					(favourite) => favourite._id !== action.payload._id
				),
				'test'
			);
			return {
				// users: state.users.filter((user) => user._id === action.payload._id),
				favourites: state.favourites.filter(
					(favourite) => favourite._id !== action.payload._id
				),
			};

		default:
			return state;
	}
};
// children represents everything the FavouritesContextProvider wraps
export const FavouritesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(favouritesReducer, {
		favourites: null,
		// favourite: null,
	});

	return (
		<FavouritesContext.Provider value={{ ...state, dispatch }}>
			{children}
		</FavouritesContext.Provider>
	);
};
