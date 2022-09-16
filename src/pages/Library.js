import React, { useEffect } from 'react';
// import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { song_list } from '../context/songs';

// import { album_list } from '../context/albums';
// import Header from '../components/Header';
// import AlbumCard from '../components/AlbumCard';
import { useStateContext } from '../lib/context';
// import { log } from '../helper';
// import playerContext from '../context/playerContext';
import { usePlayerContext } from '../hooks/usePlayerContext';
import LibraryHeader from '../components/LibraryHeader';
import { useAlbumsContext } from '../hooks/useAlbumsContext';
import { useSongsContext } from '../hooks/useSongsContext';
import { log } from '../helper';
// import { FiHeart } from 'react-icons/fi';
// import { SiBandsintown } from 'react-icons/si';
// import { MdListAlt } from 'react-icons/md';
// import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import AlbumSliderCard from '../components/AlbumSliderCard';
import AlbumSlider from '../components/AlbumSlider';
import LibraryPlaylists from '../components/LibraryPlaylists';
import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
import FavouritesWidget from '../components/FavouritesWidget';
import RandomizeWidget from '../components/RandomiseWidget';
// import { useAuthContext } from '../hooks/useAuthContext';
// import PlayerState from '../context/PlayerState';
// import playerContext from '../context/playerContext';
// import playerReducer from '../context/playerReducer';
// import { log } from '../helper';

const Library = ({ handlePlaylist, handleViewPlaylist }) => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();
	const { albums } = useAlbumsContext();
	const { songs } = useSongsContext();
	const { playlists } = usePlaylistsContext();
	// const { playlists } = usePlaylistsContext();
	// const { songslist } = playerContext();
	// const { songslist } = playerReducer()
	// const {

	// 	setAlbumSongs,
	// 	songslist,
	// } = useContext(playerContext);

	const { dispatch } = usePlayerContext();
	// const {songslist, dispatch} = usePlayerContext()

	const navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const handleBackClick = () => {
		// navigate('/landing');
		logout();
	};

	const handleClick = (trackId, albumTitle) => {
		// const playListData = {
		// 	playListId: trackId,
		// 	playListName: albumTitle,
		// };

		// set songs array with all songs on album
		const clonedSongs = [...songs];
		const filteredSongs = clonedSongs.filter((obj) => obj.albumId === trackId);

		log(filteredSongs, 'filtered Songs');

		const playListData = {
			albumTracks: filteredSongs.reverse(),
			playListName: albumTitle,
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		navigate('/player');
	};

	const playFavourites = () => {
		const clonedFavs = [...user.favourites];
		log(clonedFavs, 'cloned favs');
		const clonedSongsInFav = [...songs];
		const filteredFavs = clonedSongsInFav.filter((obj) =>
			clonedFavs.includes(obj._id)
		);
		log(filteredFavs, 'filtered favs');
		const playListData = {
			albumTracks: filteredFavs,
			playListName: 'favourites',
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		navigate('/player');
	};
	const shuffleFavourites = () => {
		const clonedFavs = [...user.favourites];
		log(clonedFavs, 'cloned favs');
		const clonedSongsInFav = [...songs];
		const filteredFavs = clonedSongsInFav.filter((obj) =>
			clonedFavs.includes(obj._id)
		);
		log(filteredFavs, 'filtered favs');
		const playListData = {
			albumTracks: filteredFavs.sort(function () {
				return Math.random() - 0.5;
			}),
			playListName: 'favourites',
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		navigate('/player');
	};
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

	const playAllRandom = () => {
		log('play random');
		const clonedSongs = [...songs];
		log(clonedSongs, 'cloned songs random');
		const playListData = {
			albumTracks: clonedSongs.sort(function () {
				return Math.random() - 0.5;
			}),
			playListName: 'random',
		};
		log(playListData, 'playlist data - random');
		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		navigate('/player');
		// const clonedFavs = [...songs.favourite_songs];
		// log(clonedFavs, 'cloned favs');
		// const playListData = {
		// 	albumTracks: clonedFavs,
		// 	playListName: 'favourites',
		// };

		// dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
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
	// 	// log(clonedSongs, 'cloned favs');
	// 	// const userPlaylists = [...user.playlists];
	// 	// log(userPlaylists, 'cloned user playlists');
	// 	// // get all playlists
	// 	// // const
	// 	const playlistSongs = clonedSongs.filter((obj) =>
	// 		obj._id.includes(activePlaylist[0].songs)
	// 	);
	// 	log(playlistSongs, 'playlistSongs');
	// 	const playListData = {
	// 		albumTracks: playlistSongs,
	// 		playListName: activePlaylist[0].name,
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	navigate('/player');
	// };

	// working using songs_list
	// const handleClick = (trackId, albumTitle) => {
	// 	const playListData = {
	// 		playListId: trackId,
	// 		playListName: albumTitle,
	// 	};

	// 	dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
	// 	navigate('/player');
	// };

	return (
		<StyledLibrary
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<LibraryHeader handleBackClick={handleBackClick} />

			<FavouritesWidget
				playFavourites={playFavourites}
				shuffleFavourites={shuffleFavourites}
			/>

			{/* <AlbumSlider albums={albums} handleClick={handleClick} /> */}
			<LibraryPlaylists
				handleViewPlaylist={handleViewPlaylist}
				playlists={playlists}
				handlePlaylist={handlePlaylist}
			/>

			{/* <FavouritesWidget
				playFavourites={playFavourites}
				shuffleFavourites={shuffleFavourites}
			/> */}

			<AlbumSlider albums={albums} handleClick={handleClick} />

			<RandomizeWidget playAllRandom={playAllRandom} />

			{/* <ul className='select-list'>
				<li id='fav-list'>
					<div className='li-wrapper' onClick={playFavourites}>
						<div className='album-card-artwork-wrapper'>
							<FiHeart className='far fa-heart fa-lg' />
						</div>
						<div className='album-info-container'>
							<p>My Favourites</p>
							<p>various artists</p>
						</div>
					</div>
					<div className='li-wrapper' onClick={playAllRandom}>
						<div className='album-card-artwork-wrapper'>
							<SiBandsintown className='arrow-icon hand gold' />
						</div>
						<div className='album-info-container'>
							<p>Randomize</p>
							<p>various artists</p>
						</div>
					</div>
				</li>

			
			</ul> */}

			{/* <AlbumSlider albums={albums} handleClick={handleClick} /> */}

			{/* <LibraryPlaylists
				handleViewPlaylist={handleViewPlaylist}
				playlists={playlists}
				handlePlaylist={handlePlaylist}
			/> */}
			{/* <AlbumSlider albums={albums} handleClick={handleClick} /> */}

			{/* <ul className='album-list'>
				{albums &&
					albums.map((album, index) => (
						<AlbumCard key={index} handleClick={handleClick} album={album} />
					))}
			</ul> */}
		</StyledLibrary>
	);
};
const StyledLibrary = styled(motion.section)`
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
	overflow-y: hidden;
	margin-bottom: 2rem;

	.select-list {
		margin: 0 1rem;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		row-gap: 1rem;
		z-index: 5;
		/* overflow-y: scroll; */
		li#fav-list,
		li#playlist-list {
			display: flex;
			justify-content: space-between;
			/* align-items: center; */
			column-gap: 1rem;
			.li-wrapper {
				display: flex;
				justify-content: flex-start;
				/* align-items: center; */
				column-gap: 1rem;
				padding: 1rem;
				background-color: ${({ theme }) => theme.bgGrey};
				/* background-color: ${({ theme }) => theme.bgCircle}; */
				border: 0.2rem solid ${({ theme }) => theme.primaryColor};
				/* border-radius: 0.5rem; */
				border-radius: 1rem;
				cursor: pointer;
				flex: 1;
				.album-card-artwork-wrapper {
					/* border: 1px solid yellow; */
					/* height: 10rem; */
					pointer-events: none;
					display: grid;
					place-content: center;
					/* width: 6.4rem; */
					/* width: */
					.fa-lg {
						/* width: 20%; */
						font-size: 3rem;
						color: ${({ theme }) => theme.primaryColor};
						/* width: 15%; */
						/* aspect-ratio: 1501 / 2376; */
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
						/* font-weight: bold; */
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
				.playlist-info-container {
					flex: 1;
					display: flex;
					flex-direction: row;
					pointer-events: none;

					p {
						/* font-weight: bold; */
						color: ${({ theme }) => theme.white};
						text-transform: capitalize;
						/* &:last-of-type {
							font-size: 1.2rem;
							text-transform: uppercase;
							font-weight: bold;
							color: ${({ theme }) => theme.primaryColor};
						} */
					}
				}
			}
		}
		li#play-list {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 1rem;
			.li-wrapper {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				column-gap: 1rem;
				padding: 1rem;
				background-color: ${({ theme }) => theme.bgGrey};
				/* background-color: ${({ theme }) => theme.bgCircle}; */
				border: 0.2rem solid ${({ theme }) => theme.primaryColor};
				/* border-radius: 0.5rem; */
				border-radius: 1rem;
				cursor: pointer;
				flex: 1;
				.album-card-artwork-wrapper {
					/* border: 1px solid yellow; */
					/* height: 10rem; */
					pointer-events: none;
					display: grid;
					place-content: center;
					/* width: 6.4rem; */
					/* width: */
					.fa-lg {
						/* width: 20%; */
						font-size: 3rem;
						color: ${({ theme }) => theme.primaryColor};
						/* width: 15%; */
						/* aspect-ratio: 1501 / 2376; */
					}
				}

				.playlist-info-container {
					flex: 1;
					display: flex;
					flex-direction: row;
					pointer-events: none;

					p {
						/* font-weight: bold; */
						color: ${({ theme }) => theme.white};
						text-transform: capitalize;
						/* &:last-of-type {
							font-size: 1.2rem;
							text-transform: uppercase;
							font-weight: bold;
							color: ${({ theme }) => theme.primaryColor};
						} */
					}
				}
			}
		}
	}
	.album-list {
		margin: 0 1rem;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		row-gap: 1rem;
		z-index: 5;
		overflow-y: scroll;
		li#fav-list,
		li#playlist-list {
			display: flex;
			justify-content: space-between;
			/* align-items: center; */
			column-gap: 1rem;
			.li-wrapper {
				display: flex;
				justify-content: flex-start;
				/* align-items: center; */
				column-gap: 1rem;
				padding: 1rem;
				background-color: ${({ theme }) => theme.bgGrey};
				/* background-color: ${({ theme }) => theme.bgCircle}; */
				border: 0.2rem solid ${({ theme }) => theme.primaryColor};
				/* border-radius: 0.5rem; */
				border-radius: 1rem;
				cursor: pointer;
				flex: 1;
				.album-card-artwork-wrapper {
					/* border: 1px solid yellow; */
					/* height: 10rem; */
					pointer-events: none;
					display: grid;
					place-content: center;
					/* width: 6.4rem; */
					/* width: */
					.fa-lg {
						/* width: 20%; */
						font-size: 3rem;
						color: ${({ theme }) => theme.primaryColor};
						/* width: 15%; */
						/* aspect-ratio: 1501 / 2376; */
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
						/* font-weight: bold; */
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
			}
		}
	}
	.album-slider {
		/* margin: 0 1rem;
		display: flex;
		flex-direction: row;
		column-gap: 1rem;
		z-index: 5;
		overflow-x: scroll; */
		/* li#fav-list,
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
			}
		} */
	}
	/* #sign-out-btn {
		color: ${({ theme }) => theme.white};
		background-color: ${({ theme }) => theme.primaryColor};
	} */
`;

export default Library;
