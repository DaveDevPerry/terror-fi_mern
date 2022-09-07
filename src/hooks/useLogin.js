import { useState } from 'react';
import { log } from '../helper';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);
		// localhost is set as proxy in package.json
		// const response = await fetch('http://localhost:4000/api/user/login')
		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/user/login`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			}
		);
		// this will return the data as json or the error
		const json = await response.json();

		log(json, 'use login hook json');

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			// save the user to local storage
			localStorage.setItem('user-terror-fi', JSON.stringify(json));
			// update auth context with email
			dispatch({ type: 'LOGIN', payload: json });
			// update loading state to false as finished
			setIsLoading(false);
		}
	};
	return { login, isLoading, error };
};
