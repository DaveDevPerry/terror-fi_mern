import { useEffect, useState } from 'react';
import { log } from '../helper';
// import { useNavigate } from 'react-router-dom';

export const useDarkMode = () => {
	// let navigate = useNavigate();
	const [theme, setTheme] = useState('dark');
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem('terror-fi-theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === 'light' ? setMode('dark') : setMode('light');
		log('here');
		// navigate('/');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('terror-fi-theme');
		localTheme ? setTheme(localTheme) : setMode('dark');
		setMountedComponent(true);
	}, []);
	return [theme, themeToggler, mountedComponent];
};
