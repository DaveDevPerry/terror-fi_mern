import { createContext, useReducer, useEffect } from 'react';
import { log } from '../helper';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { user: action.payload };
		case 'LOGOUT':
			return { user: null };
		case 'UPDATE_USER_FAVOURITE':
			log(state, 'auth state');
			log({ ...state }, 'auth state');
			log(state.user, 'auth state user');
			// log(...state.user, 'auth state user');
			log({ ...state.user }, 'auth state user spread');
			log([...state.user.favourites], 'auth state user favourites spread');
			log(action.payload, 'data');
			const updatedFavourites = [...state.user.favourites, action.payload];
			// log(updatedFavourites, 'updatedFavourites');

			// const newState = { state,  favourites: updatedFavourites };
			// const newState = { state, ...state.user, favourites: updatedFavourites };
			// const newState = { ...state.user, favourites: updatedFavourites };
			// log(newState, 'new state');
			// const correct = {
			// 	user: newState,
			// };
			// log(correct, 'correct');
			return {
				user: { ...state.user, favourites: updatedFavourites },
			};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	useEffect(() => {
		// check is user in ls
		const user = JSON.parse(localStorage.getItem('user-terror-fi'));

		if (user) {
			dispatch({ type: 'LOGIN', payload: user });
		}
	}, []);

	// log('AuthContext state: ', state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
