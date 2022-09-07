import { createContext, useEffect, useReducer } from 'react';
import { log } from '../helper';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			log(action.payload, 'payload');
			return {
				active_user: action.payload,
			};
		case 'UPDATE_USER':
			log(action.payload, 'user context');
			log(state, 'state, update user');
			return {
				users: state.users.filter((user) => user._id === action.payload._id),
			};
		default:
			return state;
	}
};
// children represents everything the UsersContextProvider wraps
export const UsersContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(usersReducer, {
		users: null,
		active_user: null,
	});

	useEffect(() => {
		// check is user in ls
		const user = JSON.parse(localStorage.getItem('user-terror-fi'));
		log(user, 'user user context');
		if (user) {
			dispatch({ type: 'SET_USER', payload: user });
			log(user, 'user user context');
		}
	}, []);

	return (
		<UsersContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UsersContext.Provider>
	);
};
