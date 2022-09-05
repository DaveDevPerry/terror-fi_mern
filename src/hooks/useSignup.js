import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, username) => {
		setIsLoading(true);
		setError(null);
		// localhost is set as proxy in package.json
		// const response = await fetch('http://localhost:4000/api/user/signup')

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`,
			{
				// const response = await fetch('/api/user/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password, username }),
			}
		);
		// this will return the data as json or the error
		const json = await response.json();

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

	return { signup, isLoading, error };
};
