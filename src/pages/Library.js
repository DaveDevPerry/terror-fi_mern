import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { album_list } from '../context/albums';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';
import { useStateContext } from '../lib/context';
import { log } from '../helper';
import playerContext from '../context/playerContext';
// import PlayerState from '../context/PlayerState';
// import playerContext from '../context/playerContext';
// import playerReducer from '../context/playerReducer';
// import { log } from '../helper';

const Library = ({ theme }) => {
	const { logout } = useLogout();
	// const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();
	// const { songslist } = playerContext();
	// const { songslist } = playerReducer()
	const {
		// currentSong,
		// songs,
		// nextSong,
		// prevSong,
		// repeat,
		// random,
		// playing,
		// toggleRandom,
		// toggleRepeat,
		// togglePlaying,
		// handleEnd,
		setAlbumSongs,
		songslist,
	} = useContext(playerContext);

	const navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const handleBackClick = () => {
		// navigate('/landing');
	};

	const handleClick = (trackId) => {
		// temp navigate - will navigate and play selected album clicked by user
		// set songs array 	SET_SONGS_ARRAY - songsSet
		// log(e.target, 'album chosen');
		// log(albumId 'album chosen');
		log(trackId, 'albumn id library');
		log(songslist, 'songslist library');
		const clonedList = [...songslist];
		clonedList.filter((obj) => obj.albumId === trackId);
		log(clonedList, 'clonedList library');
		setAlbumSongs(clonedList);
		// set
		navigate('/player');
	};

	const handleSignOut = () => {
		log('signing out');
		logout();
	};

	log(songslist, 'songslist library');
	return (
		<StyledLibrary
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<Header handleBackClick={handleBackClick} />
			<ul className='album-list'>
				{album_list.map((album, index) => (
					<AlbumCard
						key={index}
						handleClick={handleClick}
						album={album}
						// onClick={(e) => setAlbumSongs}
					/>
				))}
			</ul>

			<button id='sign-out-btn' onClick={handleSignOut}>
				Log out
			</button>
		</StyledLibrary>
	);
};
const StyledLibrary = styled(motion.section)`
	flex: 1;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	display: flex;
	align-items: center;
	z-index: 5;
	.album-list {
		margin: 0 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1rem;
		z-index: 5;
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
	}
	#sign-out-btn {
		color: ${({ theme }) => theme.white};
	}
`;

export default Library;
