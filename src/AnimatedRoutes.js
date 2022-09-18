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
// import { useSongsContext } from './hooks/useSongsContext';
import { usePlaylistsContext } from './hooks/usePlaylistsContext';
import { usePlayerContext } from './hooks/usePlayerContext';
import Playlists from './pages/Playlists';
import Playlist from './pages/Playlist';
import { useStateContext } from './lib/context';
import Favourites from './pages/Favourites';
import { useFavouritesContext } from './hooks/useFavouritesContext';
// import PlayerState from './context/PlayerState';
// import Playing from './pages/Playing';

const AnimatedRoutes = ({ user, themeToggler, theme }) => {
	const location = useLocation();
	const navigate = useNavigate();
	// const { songs } = useSongsContext();
	// const { playlists } = usePlaylistsContext();
	const { playlists, dispatch: playlistDispatch } = usePlaylistsContext();
	// const { dispatch } = usePlayerContext();
	const { currentSong, playListTitle, songslist, dispatch } =
		usePlayerContext();
	const { setPlaylistToView, setViewPlaylist } = useStateContext();
	const { favourites } = useFavouritesContext();

	// const { setPlaylistToView, setViewPlaylist, defaultViewMode, setDefaultViewMode,
	// 	defaultAnimation, setDefaultAnimation } = useStateContext();

	const [playlistDisplay, setPlaylistDisplay] = useState(false);
	const [playlistFormDisplay, setPlaylistFormDisplay] = useState(false);
	const [deletePlaylistFormDisplay, setDeletePlaylistFormDisplay] =
		useState(false);

	const handlePlaylistFormDisplay = () => {
		setPlaylistFormDisplay(!playlistFormDisplay);
		// setPlaylistFormDisplay(false);
	};
	const handleDeletePlaylistFormDisplay = () => {
		setDeletePlaylistFormDisplay(!deletePlaylistFormDisplay);
		// setPlaylistFormDisplay(false);
	};
	const handleViewPlaylist = (playlistId) => {
		setPlaylistToView(playlistId);
		// log(playlistToView, ' playlist id to view  in playlist');
		const clonedPL = [...playlists];
		const findPlaylist = clonedPL.filter((obj) => obj._id === playlistId);
		log(findPlaylist, 'find playlist');
		setViewPlaylist(findPlaylist);

		const playListData = {
			albumTracks: findPlaylist[0].songs,
			playListName: findPlaylist[0].name,
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		setPlaylistDisplay(false);
		// dispatch({ type: 'SET_PLAYLIST', payload: playListData });
		// setPlaylistDisplay(false);
		navigate(`/playlists/${playlistId}`);
		// navigate('/playlist');
	};
	// const handleViewPlaylist = (playlistId) => {
	// 	setPlaylistToView(playlistId);
	// 	// log(playlistToView, ' playlist id to view  in playlist');
	// 	const clonedPL = [...playlists];
	// 	const findPlaylist = clonedPL.filter((obj) => obj._id === playlistId);
	// 	log(findPlaylist, 'find playlist');
	// 	setViewPlaylist(findPlaylist);

	// 	// dispatch({ type: 'SET_PLAYLIST', payload: playListData });
	// 	// setPlaylistDisplay(false);
	// 	navigate(`/playlists/${playlistId}`);
	// 	// navigate('/playlist');
	// };
	const handlePlaylist = (playlistId) => {
		log(playlistId, 'id');
		const clonedPlaylists = [...playlists];
		log(clonedPlaylists, 'clonedPlaylists');
		const activePlaylist = clonedPlaylists.filter(
			(playlist) => playlist._id === playlistId
		);
		log(activePlaylist, 'active playlist');
		const playListData = {
			albumTracks: activePlaylist[0].songs,
			playListName: activePlaylist[0].name,
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		setPlaylistDisplay(false);
		navigate('/player');
	};
	const handlePlayPlaylist = () => {
		// log(playlistId, 'id');
		// const clonedPlaylists = [...playlists];
		// log(clonedPlaylists, 'clonedPlaylists');
		// const activePlaylist = clonedPlaylists.filter(
		// 	(playlist) => playlist._id === playlistId
		// );
		// log(activePlaylist, 'active playlist');
		// const playListData = {
		// 	albumTracks: activePlaylist[0].songs,
		// 	playListName: activePlaylist[0].name,
		// };

		// dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		setPlaylistDisplay(false);
		navigate('/player');
	};
	const handleShufflePlaylist = (playlistId) => {
		log(playlistId, 'id');
		const clonedPlaylists = [...playlists];
		log(clonedPlaylists, 'clonedPlaylists');
		const activePlaylist = clonedPlaylists.filter(
			(playlist) => playlist._id === playlistId
		);
		log(activePlaylist, 'active playlist');
		const playListData = {
			albumTracks: activePlaylist[0].songs.sort(() => Math.random() - 0.5),
			playListName: activePlaylist[0].name,
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		setPlaylistDisplay(false);
		navigate('/player');
	};
	const handleShufflePlayPlaylist = () => {
		// log(playlistId, 'id');
		const clonedPlaylists = [...songslist];
		log(clonedPlaylists, 'clonedPlaylists');
		// const activePlaylist = clonedPlaylists.filter(
		// 	(playlist) => playlist._id === playlistId
		// );
		// log(activePlaylist, 'active playlist');
		const playListData = {
			albumTracks: clonedPlaylists.sort(() => Math.random() - 0.5),
			playListName: playListTitle,
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		setPlaylistDisplay(false);
		navigate('/player');
	};

	const handleShuffleFavourites = () => {
		const clonedFavs = [...favourites];
		log(clonedFavs, 'cloned favs');
		const playListData = {
			albumTracks: clonedFavs.sort(function () {
				return Math.random() - 0.5;
			}),
			playListName: 'favourites',
		};
		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		navigate('/player');
		// log(playlistId, 'id');
		// const clonedPlaylists = [...playlists];
		// log(clonedPlaylists, 'clonedPlaylists');
		// const activePlaylist = clonedPlaylists.filter(
		// 	(playlist) => playlist._id === playlistId
		// );
		// log(activePlaylist, 'active playlist');
		// const playListData = {
		// 	albumTracks: activePlaylist[0].songs.sort(() => Math.random() - 0.5),
		// 	playListName: activePlaylist[0].name,
		// };

		// dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		// setPlaylistDisplay(false);
		// navigate('/player');
	};
	// const handlePlaylist = (playlistId) => {
	// 	log(playlistId, 'id');
	// 	const clonedPlaylists = [...playlists];
	// 	log(clonedPlaylists, 'clonedPlaylists');
	// 	const activePlaylist = clonedPlaylists.filter(
	// 		(playlist) => playlist._id === playlistId
	// 	);
	// 	log(activePlaylist, 'active playlist');
	// 	const clonedSongs = [...songs];
	// 	log(clonedSongs, 'cloned songs');
	// 	// const userPlaylists = [...user.playlists];
	// 	// log(userPlaylists, 'cloned user playlists');
	// 	// // get all playlists
	// 	// // const
	// 	const playlistSongs = clonedSongs.filter((obj) =>
	// 		activePlaylist[0].songs.includes(obj._id)
	// 	);
	// 	log(playlistSongs, 'playlistSongs');
	// 	const playListData = {
	// 		albumTracks: playlistSongs,
	// 		playListName: activePlaylist[0].name,
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	setPlaylistDisplay(false);
	// 	navigate('/player');
	// };

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
		// const testSongId = '6313f4ed02cefa8f1dc9535b';
		// add songId to users favourites
		// userDispatch({ type: 'UPDATE_USER', payload: songId });
		// authDispatch({ type: 'UPDATE_USER_FAVOURITE', payload: songId });

		const response = await fetch(
			// `${process.env.REACT_APP_BACKEND_URL}/api/playlists/631a5feb0d4492d2be61cd2a`,
			`${process.env.REACT_APP_BACKEND_URL}/api/playlists/${playlistId}`,
			{
				// const response = await fetch('/api/weights', {
				method: 'PATCH',
				// body: testSongId,
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

	// const playFavourites = () => {
	// 	const clonedFavs = [...favourites];
	// 	log(clonedFavs, 'cloned favs');
	// 	const playListData = {
	// 		albumTracks: clonedFavs,
	// 		playListName: 'favourites',
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	navigate('/player');
	// };

	return (
		<AnimatePresence mode='wait'>
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
				<Route
					path='/library'
					element={
						user ? (
							<Library
								themeToggler={themeToggler}
								theme={theme}
								handlePlaylist={handlePlaylist}
								handleViewPlaylist={handleViewPlaylist}
								handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/playlists'
					element={
						user ? (
							<Playlists
								themeToggler={themeToggler}
								theme={theme}
								handleViewPlaylist={handleViewPlaylist}
								handlePlaylistFormDisplay={handlePlaylistFormDisplay}
								playlistFormDisplay={playlistFormDisplay}
								setPlaylistFormDisplay={setPlaylistFormDisplay}
								handlePlaylist={handlePlaylist}
								handleShufflePlaylist={handleShufflePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/playlists/:id'
					element={
						user ? (
							<Playlist
								themeToggler={themeToggler}
								theme={theme}
								handleDeletePlaylistFormDisplay={
									handleDeletePlaylistFormDisplay
								}
								deletePlaylistFormDisplay={deletePlaylistFormDisplay}
								setDeletePlaylistFormDisplay={setDeletePlaylistFormDisplay}
								// handlePlaylist={handlePlaylist}
								handlePlayPlaylist={handlePlayPlaylist}
								handleShufflePlayPlaylist={handleShufflePlayPlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/favourites'
					element={
						user ? (
							<Favourites
								themeToggler={themeToggler}
								theme={theme}
								setPlaylistDisplay={setPlaylistDisplay}
								handleShuffleFavourites={handleShuffleFavourites}
								// handleViewPlaylist={handleViewPlaylist}
								// handlePlaylistFormDisplay={handlePlaylistFormDisplay}
								// playlistFormDisplay={playlistFormDisplay}
								// setPlaylistFormDisplay={setPlaylistFormDisplay}
								// handlePlaylist={handlePlaylist}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				{/* <Route
						path='/playlist'
						element={
							user ? (
								<Playlist
									themeToggler={themeToggler}
									theme={theme}
									// handlePlaylist={handlePlaylist}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/> */}
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
								handlePlaylistFormDisplay={handlePlaylistFormDisplay}
								playlistFormDisplay={playlistFormDisplay}
								setPlaylistFormDisplay={setPlaylistFormDisplay}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
