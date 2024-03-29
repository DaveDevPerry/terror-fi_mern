import { BrowserRouter } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { StateContext } from './lib/context';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import AnimatedRoutes from './AnimatedRoutes';
// import PlayerState from './context/PlayerState';

function App() {
	const { user } = useAuthContext();
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<StateContext>
				{/* <PlayerState> */}
				<div className='App'>
					<div className='background'></div>
					<BrowserRouter>
						<AnimatedRoutes
							user={user}
							themeToggler={themeToggler}
							theme={theme}
						/>
					</BrowserRouter>
				</div>
				{/* </PlayerState> */}
			</StateContext>
		</ThemeProvider>
	);
}

export default App;
