import {
	Routes,
	Route,
	useLocation,
	Navigate,
	useNavigate,
} from 'react-router-dom';
import AudioPlayer from './pages/AudioPlayer';
// import { StateContext } from '../lib/context';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Landing from './pages/Landing';
import Library from './pages/Library';
import Loader from './pages/Loader';
import Settings from './pages/Settings';
import { useState } from 'react';
import { log } from './helper';
import { useSongsContext } from './hooks/useSongsContext';
import { usePlaylistsContext } from './hooks/usePlaylistsContext';
import { usePlayerContext } from './hooks/usePlayerContext';
// import PlayerState from './context/PlayerState';
// import Playing from './pages/Playing';

const AnimatedRoutes = ({ user, themeToggler, theme }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const { songs } = useSongsContext();
	// const { playlists } = usePlaylistsContext();
	const { playlists, dispatch: playlistDispatch } = usePlaylistsContext();
	const { dispatch } = usePlayerContext();

	const { currentSong, songslist } = usePlayerContext();

	const [playlistDisplay, setPlaylistDisplay] = useState(false);

	const handlePlaylist = (playlistId) => {
		log(playlistId, 'id');
		const clonedPlaylists = [...playlists];
		log(clonedPlaylists, 'clonedPlaylists');
		const activePlaylist = clonedPlaylists.filter(
			(playlist) => playlist._id === playlistId
		);
		log(activePlaylist, 'active playlist');
		const clonedSongs = [...songs];
		log(clonedSongs, 'cloned songs');
		// const userPlaylists = [...user.playlists];
		// log(userPlaylists, 'cloned user playlists');
		// // get all playlists
		// // const
		const playlistSongs = clonedSongs.filter((obj) =>
			activePlaylist[0].songs.includes(obj._id)
		);
		log(playlistSongs, 'playlistSongs');
		const playListData = {
			albumTracks: playlistSongs,
			playListName: activePlaylist[0].name,
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		setPlaylistDisplay(false);
		navigate('/player');
	};

	const addSongToPlaylist = async (playlistId) => {
		log(playlistId, 'id');

		// log(e.target, 'e target');
		log(currentSong, 'song this title');
		// log(this.song._id, 'song id?');
		const songId = songslist[currentSong]._id;
		log(songId, 'song id in mongo');

		// const playlistData = [playlistId, songId]
		// user details
		log(user, 'user in animated routes add song to playlist');

		// check if already a fav

		// add songId to users favourites
		// userDispatch({ type: 'UPDATE_USER', payload: songId });
		// authDispatch({ type: 'UPDATE_USER_FAVOURITE', payload: songId });

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/playlists/${playlistId}`,
			{
				// const response = await fetch('/api/weights', {
				method: 'PATCH',
				body: songId,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();
		log(json, 'json updating user in form post submit');
		if (!response.ok) {
			// setError(json.error);
			log('error in patch');
		}
		if (response.ok) {
			// setError(null);
			log('user updated?', json);
			// playlistDispatch({ type: 'UPDATE_USER_PLAYLIST_WITH_SONG', payload: songId });
			playlistDispatch({ type: 'UPDATE_PLAYLIST', payload: songId });
		}
		log('new band added', json);
		// const clonedPlaylists = [...playlists];
		// log(clonedPlaylists, 'clonedPlaylists');
		// const activePlaylist = clonedPlaylists.filter(
		// 	(playlist) => playlist._id === playlistId
		// );
		// log(activePlaylist, 'active playlist');
		// const clonedSongs = [...songs];
		// const playlistSongs = clonedSongs.filter((obj) =>
		// 	obj._id.includes(activePlaylist[0].songs)
		// );
		// log(playlistSongs, 'playlistSongs');
		// const playListData = {
		// 	albumTracks: playlistSongs,
		// 	playListName: activePlaylist[0].name,
		// };

		// dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		setPlaylistDisplay(false);
		navigate('/player');
	};

	return (
		<>
			<AnimatePresence mode='wait'>
				{/* <StateContext> */}
				{/* <PlayerState> */}
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Loader theme={theme} />} />
					<Route
						path='/login'
						element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
					/>
					<Route
						path='/signup'
						element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
					/>
					{/* <Route
						path='/landing'
						element={
							user ? (
								<Landing themeToggler={themeToggler} theme={theme} />
							) : (
								<Navigate to='/login' />
							)
						}
					/> */}
					{/* <Route path='/landing' element={<Landing />} /> */}
					<Route
						path='/library'
						element={
							user ? (
								<Library
									themeToggler={themeToggler}
									theme={theme}
									handlePlaylist={handlePlaylist}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/settings'
						element={
							user ? (
								<Settings themeToggler={themeToggler} theme={theme} />
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
								<AudioPlayer
									themeToggler={themeToggler}
									theme={theme}
									setPlaylistDisplay={setPlaylistDisplay}
									playlistDisplay={playlistDisplay}
									handlePlaylist={handlePlaylist}
									addSongToPlaylist={addSongToPlaylist}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					{/* <Route path='/player' element={<AudioPlayer />} /> */}
					{/* <Route exact path='/playing' element={<Playing />} /> */}
				</Routes>
				{/* </PlayerState> */}
			</AnimatePresence>
			{/* // </StateContext> */}
		</>
	);
};

export default AnimatedRoutes;
