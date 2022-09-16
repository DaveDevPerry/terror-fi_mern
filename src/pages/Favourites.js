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

const Favourites = ({
	handleViewPlaylist,
	handlePlaylistFormDisplay,
	playlistFormDisplay,
	setPlaylistFormDisplay,
	handlePlaylist,
}) => {
	const { dataLoaded, setShowOptions, showOptions } = useStateContext();

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

	const handleOptions = (e, songTitle, i) => {
		e.preventDefault();
		log('handle options');
		log(e.target, 'handle options song target');
		log(songTitle, 'handle options song title');
		log(i, 'handle options song i');
		// setShowOptions(!showOptions);
		showOptions === false ? setShowOptions(i) : setShowOptions(false);
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

			<FavouritesList handleOptions={handleOptions} />
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
	max-width: 42rem;
`;

export default Favourites;
