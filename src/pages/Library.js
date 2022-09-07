import React, { useEffect } from 'react';
// import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { song_list } from '../context/songs';

// import { album_list } from '../context/albums';
// import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import { useStateContext } from '../lib/context';
// import { log } from '../helper';
// import playerContext from '../context/playerContext';
import { usePlayerContext } from '../hooks/usePlayerContext';
import LibraryHeader from '../components/LibraryHeader';
import { useAlbumsContext } from '../hooks/useAlbumsContext';
import { useSongsContext } from '../hooks/useSongsContext';
import { log } from '../helper';
import { FiHeart } from 'react-icons/fi';
import { SiBandsintown } from 'react-icons/si';
// import PlayerState from '../context/PlayerState';
// import playerContext from '../context/playerContext';
// import playerReducer from '../context/playerReducer';
// import { log } from '../helper';

const Library = ({ theme }) => {
	const { logout } = useLogout();
	// const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();
	const { albums } = useAlbumsContext();
	const { songs } = useSongsContext();
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
		const clonedFavs = [...songs.favourite_songs];
		log(clonedFavs, 'cloned favs');
		const playListData = {
			albumTracks: clonedFavs,
			playListName: 'favourites',
		};

		dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		navigate('/player');
	};

	const playAllRandom = () => {
		log('play random');
		// const clonedFavs = [...songs.favourite_songs];
		// log(clonedFavs, 'cloned favs');
		// const playListData = {
		// 	albumTracks: clonedFavs,
		// 	playListName: 'favourites',
		// };

		// dispatch({ type: 'SET_SONGS_ARRAY', data: playListData });
		// navigate('/player');
	};

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

			<ul className='album-list'>
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
							{/* <FiHeart className='far fa-heart fa-lg' /> */}
						</div>
						<div className='album-info-container'>
							<p>Randomize</p>
							<p>various artists</p>
						</div>
					</div>
				</li>
				{/* 
				<li id='fav-list' onClick={playFavourites}>
					<div className='album-card-artwork-wrapper'>
						<FiHeart
							className='far fa-heart fa-lg'
						/>
					</div>
					<div className='album-info-container'>
						<p>My Favourites</p>
						<p>various artists</p>
					</div>
				</li> */}

				{albums &&
					albums.map((album, index) => (
						<AlbumCard key={index} handleClick={handleClick} album={album} />
					))}
			</ul>
			{/* <ul className='album-list'>
				{album_list.map((album, index) => (
					<AlbumCard
						key={index}
						handleClick={handleClick}
						album={album}
					/>
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

	.album-list {
		margin: 0 1rem;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		row-gap: 1rem;
		z-index: 5;
		/* text-decoration: none; */
		/* li.album-card {
			display: flex;
			justify-content: space-between;
			column-gap: 2rem;
			padding: 1rem;
			background-color: ${({ theme }) => theme.bgCircle};
			border: 0.2rem solid ${({ theme }) => theme.primaryColor};
			border-radius: 0.5rem;
			img.album-cover-artwork {
				width: 15%;
				aspect-ratio: 1501 / 2376;
			}
			.album-info-container {
				flex: 1;
				display: flex;
				flex-direction: column;
				p {
					font-weight: bold;
					color: ${({ theme }) => theme.white};
					&:last-of-type {
						font-size: 1.2rem;
						text-transform: uppercase;
						font-weight: normal;
					}
				}
				ul {
					margin-top: 0.5rem;
					list-style: none;
					li {
						font-size: 1.2rem;
						color: ${({ theme }) => theme.txtGrey};
					}
				}
			} */
		/* .album-card-btns {
				border: 1px solid green;
			} */
		/* } */
		li#fav-list {
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
	/* #sign-out-btn {
		color: ${({ theme }) => theme.white};
		background-color: ${({ theme }) => theme.primaryColor};
	} */
`;

export default Library;
