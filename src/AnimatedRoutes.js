import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import AudioPlayer from './pages/AudioPlayer';
// import { StateContext } from '../lib/context';
// import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Library from './pages/Library';
import Loader from './pages/Loader';
// import Playing from './pages/Playing';

const AnimatedRoutes = ({ user, themeToggler, theme }) => {
	const location = useLocation();

	return (
		<>
			{/* // <AnimatePresence exitBeforeEnter> */}
			{/* <StateContext> */}
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Loader />} />
				<Route
					path='/login'
					element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/signup'
					element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/landing'
					element={
						user ? (
							<Landing themeToggler={themeToggler} theme={theme} />
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				{/* <Route path='/landing' element={<Landing />} /> */}
				<Route
					path='/library'
					element={
						user ? (
							<Library themeToggler={themeToggler} theme={theme} />
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				{/* <Route path='/library' element={<Library />} /> */}
				{/* <Route exact path='/' element={<Landing />} /> */}
				<Route
					path='/player'
					element={
						user ? (
							<AudioPlayer themeToggler={themeToggler} theme={theme} />
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				{/* <Route path='/player' element={<AudioPlayer />} /> */}
				{/* <Route exact path='/playing' element={<Playing />} /> */}
			</Routes>
			{/* // </AnimatePresence> */}
			{/* // </StateContext> */}
		</>
	);
};

export default AnimatedRoutes;
