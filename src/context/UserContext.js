import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {
	switch (action.type) {
		// case 'SET_TARGETS':
		// 	return {
		// 		targets: action.payload,
		// 	};
		// case 'CREATE_TARGET':
		// 	return {
		// 		// ...state.workouts is previous state, action.payload is new workout to add
		// 		targets: [action.payload, ...state.targets],
		// 	};
		case 'UPDATE_USER':
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
	});

	return (
		<UsersContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UsersContext.Provider>
	);
};
