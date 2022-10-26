import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';

import PlaylistsHeader from '../components/PlaylistsHeader';

// import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
import FavouritesList from '../components/FavouritesList';
import { log } from '../helper';
// import { MdOutlineAddBox } from 'react-icons/md';
// import { FaPlay } from 'react-icons/fa';
// import { ImShuffle } from 'react-icons/im';
// import { log } from '../helper';
// import AddPlaylistForm from '../components/AddPlaylistForm';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../hooks/useAuthContext';
import FavouritesViewWidget from '../components/FavouritesViewWidget';
import FavouritesListDesktop from '../components/desktop/FavouritesListDesktop';
import { useViewport } from '../hooks/useViewport';
import FavouritesViewWidgetDesktop from '../components/FavouritesViewWidgetDesktop';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { usePlayerContext } from '../hooks/usePlayerContext';

const Favourites = ({
	handleViewPlaylist,
	handlePlaylistFormDisplay,
	playlistFormDisplay,
	setPlaylistFormDisplay,
	handlePlaylist,
	playFavourites,
	shuffleFavourites,
	setPlaylistDisplay,
	handleShuffleFavourites,
}) => {
	const { dataLoaded, setShowOptions, showOptions } = useStateContext();
	const { user } = useAuthContext();

	const { width } = useViewport();
	const breakpoint = 620;
	// const { songs } = useSongsContext();
	// const { dispatch } = usePlayerContext();

	// const { playlists } = usePlaylistsContext();

	const navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const handleBackClick = () => {
		navigate('/library');
		// logout();
	};

	const removeFavourite = async (songId) => {
		// from front end
		log(songId, 'song id to remove');
		let songIndex = user.favourites.indexOf(songId);
		user.favourites.splice(songIndex, 1);
		const clonedFavs = [...user.favourites];
		log(clonedFavs, 'cloned favs');
		// const clonedSongsInFav = [...songs];
		// const filteredFavs = clonedSongsInFav.filter((obj) =>
		// 	clonedFavs.includes(obj._id)
		// );
		// log(filteredFavs, 'filtered favs');
		// const playListData = {
		// 	albumTracks: filteredFavs,
		// 	playListName: 'favourites',
		// };
		// log(user, 'user id');
		// from back end
		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/user/${user.userId}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: clonedFavs,
			}
		);
		const json = await response.json();
		log(json, 'user json');
		// json.reverse();
		if (response.ok) {
			log('ok');
			// playlistDispatch({
			// 	type: 'SET_PLAYLISTS',
			// 	payload: json,
			// });
		}
		// from front end
		// log(songId, 'song id to remove');
		// let songIndex = user.favourites.indexOf(songId);
		// user.favourites.splice(songIndex, 1);
		// const clonedFavs = [...user.favourites];
		// log(clonedFavs, 'cloned favs');
		// const clonedSongsInFav = [...songs];
		// const filteredFavs = clonedSongsInFav.filter((obj) =>
		// 	clonedFavs.includes(obj._id)
		// );
		// log(filteredFavs, 'filtered favs');
		// const playListData = {
		// 	albumTracks: filteredFavs,
		// 	playListName: 'favourites',
		// };

		// dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	};

	const handleOptions = (e, songTitle, i) => {
		e.preventDefault();
		log('handle options');
		log(e.target, 'handle options song target');
		log(songTitle, 'handle options song title');
		log(i, 'handle options song i');
		// setShowOptions(!showOptions);
		showOptions === false ? setShowOptions(i) : setShowOptions(false);
	};

	const handlePlayFavourites = () => {
		setPlaylistDisplay(false);
		navigate('/player');
	};

	return (
		<StyledFavourites
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<Toaster />
			<PlaylistsHeader
				handleBackClick={handleBackClick}
				pageTitle='favourites'
			/>
			{width < breakpoint ? (
				<FavouritesViewWidget
					playFavourites={handlePlayFavourites}
					shuffleFavourites={shuffleFavourites}
					handleShuffleFavourites={handleShuffleFavourites}
				/>
			) : (
				<FavouritesViewWidgetDesktop
					playFavourites={handlePlayFavourites}
					shuffleFavourites={shuffleFavourites}
					handleShuffleFavourites={handleShuffleFavourites}
				/>
			)}
			{width < breakpoint ? (
				<FavouritesList
					handleOptions={handleOptions}
					removeFavourite={removeFavourite}
				/>
			) : (
				<FavouritesListDesktop
					handleOptions={handleOptions}
					removeFavourite={removeFavourite}
				/>
			)}
		</StyledFavourites>
	);
};
const StyledFavourites = styled(motion.section)`
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	/* align-items: center; */
	flex-direction: column;
	display: flex;
	/* align-items: center; */
	z-index: 5;
	row-gap: 2rem;
	margin: 0 auto;
	max-width: 80rem;
`;

export default Favourites;
