import React, { useEffect } from 'react';
// import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { song_list } from '../context/songs';

// import { album_list } from '../context/albums';
// import Header from '../components/Header';
// import AlbumCard from '../components/AlbumCard';
import { useStateContext } from '../lib/context';
// import { log } from '../helper';
// import playerContext from '../context/playerContext';
// import { usePlayerContext } from '../hooks/usePlayerContext';
import PlaylistsHeader from '../components/PlaylistsHeader';
import PlaylistCreateWidget from '../components/PlaylistCreateWidget';
import PlaylistsList from '../components/PlaylistsList';
// import { useAlbumsContext } from '../hooks/useAlbumsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { log } from '../helper';
// import { FiHeart } from 'react-icons/fi';
// import { SiBandsintown } from 'react-icons/si';
// import { MdListAlt } from 'react-icons/md';
// import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
// import { MdOutlineAddBox } from 'react-icons/md';
// import { FaPlay } from 'react-icons/fa';
// import { ImShuffle } from 'react-icons/im';
// import { log } from '../helper';
import AddPlaylistForm from '../components/AddPlaylistForm';
import { Toaster } from 'react-hot-toast';
import PlaylistCreateWidgetDesktop from '../components/desktop/PlaylistCreateWidgetDesktop';
import { useViewport } from '../hooks/useViewport';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import PlayerState from '../context/PlayerState';
// import playerContext from '../context/playerContext';
// import playerReducer from '../context/playerReducer';
// import { log } from '../helper';

const Playlists = ({
	handleViewPlaylist,
	handlePlaylistFormDisplay,
	playlistFormDisplay,
	setPlaylistFormDisplay,
	handlePlaylist,
	handleShufflePlaylist,
}) => {
	// const { logout } = useLogout();
	// const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();

	const { width } = useViewport();
	const breakpoint = 620;
	// const { albums } = useAlbumsContext();
	// const { songs } = useSongsContext();
	// const { playlists } = usePlaylistsContext();
	// const { songslist } = playerContext();
	// const { songslist } = playerReducer()
	// const {

	// 	setAlbumSongs,
	// 	songslist,
	// } = useContext(playerContext);

	// const { dispatch } = usePlayerContext();
	// const {songslist, dispatch} = usePlayerContext()

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

	// const handleClick = (trackId, albumTitle) => {
	// 	// const playListData = {
	// 	// 	playListId: trackId,
	// 	// 	playListName: albumTitle,
	// 	// };

	// 	// set songs array with all songs on album
	// 	const clonedSongs = [...songs];
	// 	const filteredSongs = clonedSongs.filter((obj) => obj.albumId === trackId);

	// 	log(filteredSongs, 'filtered Songs');

	// 	const playListData = {
	// 		albumTracks: filteredSongs.reverse(),
	// 		playListName: albumTitle,
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	navigate('/player');
	// };

	// const playFavourites = () => {
	// 	const clonedFavs = [...user.favourites];
	// 	log(clonedFavs, 'cloned favs');
	// 	const clonedSongsInFav = [...songs];
	// 	const filteredFavs = clonedSongsInFav.filter((obj) =>
	// 		clonedFavs.includes(obj._id)
	// 	);
	// 	log(filteredFavs, 'filtered favs');
	// 	const playListData = {
	// 		albumTracks: filteredFavs,
	// 		playListName: 'favourites',
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	navigate('/player');
	// };
	// const playFavourites = () => {
	// 	const clonedFavs = [...songs.favourite_songs];
	// 	log(clonedFavs, 'cloned favs');
	// 	const playListData = {
	// 		albumTracks: clonedFavs,
	// 		playListName: 'favourites',
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	navigate('/player');
	// };

	return (
		<StyledPlaylists
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<Toaster />
			<PlaylistsHeader
				handleBackClick={handleBackClick}
				pageTitle='playlists'
			/>
			{width < breakpoint ? (
				<PlaylistCreateWidget
					handlePlaylistFormDisplay={handlePlaylistFormDisplay}
				/>
			) : (
				<PlaylistCreateWidgetDesktop
					handlePlaylistFormDisplay={handlePlaylistFormDisplay}
				/>
			)}

			<PlaylistsList
				handleViewPlaylist={handleViewPlaylist}
				handlePlaylist={handlePlaylist}
				handleShufflePlaylist={handleShufflePlaylist}
			/>

			<AddPlaylistForm
				handlePlaylistFormDisplay={handlePlaylistFormDisplay}
				playlistFormDisplay={playlistFormDisplay}
				setPlaylistFormDisplay={setPlaylistFormDisplay}
				// handleCreatePlaylist={handleCreatePlaylist}
				// handleCreatePlaylist={handleCreatePlaylist}
			/>
		</StyledPlaylists>
	);
};
const StyledPlaylists = styled(motion.section)`
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

	/* .playlists-list {
		margin: 0 1rem;
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		z-index: 5;

		li#fav-list,
		li#playlist-list {
			display: flex;
			justify-content: space-between;
			column-gap: 1rem;
			.li-wrapper {
				display: flex;
				justify-content: flex-start;
				column-gap: 1rem;
				padding: 1rem;
				background-color: ${({ theme }) => theme.bgGrey};
				border: 0.2rem solid ${({ theme }) => theme.primaryColor};
				border-radius: 1rem;
				cursor: pointer;
				flex: 1;
				.album-card-artwork-wrapper {
					pointer-events: none;
					display: grid;
					place-content: center;
					.fa-lg {
						font-size: 3rem;
						color: ${({ theme }) => theme.primaryColor};
					}
					.arrow-icon.hand {
						font-size: 2.5rem;
						color: ${({ theme }) => theme.gold};
					}
				}
				.album-info-container {
					flex: 1;
					display: flex;
					flex-direction: column;
					pointer-events: none;

					p {
						color: ${({ theme }) => theme.white};
						text-transform: capitalize;
						&:last-of-type {
							font-size: 1.2rem;
							text-transform: uppercase;
							font-weight: bold;
							color: ${({ theme }) => theme.primaryColor};
						}
					}
				}
				.playlist-control-btns {
					display: flex;
					align-items: center;
					column-gap: 2rem;
					.shuffle-playlist-btn,
					.play-playlist-btn,
					.options-playlist-btn {
						color: ${({ theme }) => theme.white};
						font-size: 2.4rem;
					}
					.play-playlist-btn {
						font-size: 2rem;
					}
				}
			}
		}
	} */
	/*  */

	/* #sign-out-btn {
		color: ${({ theme }) => theme.white};
		background-color: ${({ theme }) => theme.primaryColor};
	} */
`;

export default Playlists;
