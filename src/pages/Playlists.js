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
// import { useAlbumsContext } from '../hooks/useAlbumsContext';
// import { useSongsContext } from '../hooks/useSongsContext';
// import { log } from '../helper';
// import { FiHeart } from 'react-icons/fi';
// import { SiBandsintown } from 'react-icons/si';
// import { MdListAlt } from 'react-icons/md';
import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
import { MdOutlineAddBox } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
import { log } from '../helper';
import AddPlaylistForm from '../components/AddPlaylistForm';
import { Toaster } from 'react-hot-toast';
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
}) => {
	// const { logout } = useLogout();
	// const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();
	// const { albums } = useAlbumsContext();
	// const { songs } = useSongsContext();
	const { playlists } = usePlaylistsContext();
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
			{/* 
			<ul className='album-list'>
				{playlists &&
					playlists.map((playlist, index) => (
						<li key={index} id='playlist-list'>
							<div
								className='li-wrapper'
								onClick={() => {
									handleViewPlaylist(playlist._id);
								}}
							>
				
								<div className='album-info-container'>
									<p>{playlist.name}</p>
									<p>
										{playlist.songs.length === 1
											? `${playlist.songs.length} song`
											: `${playlist.songs.length} songs`}
									</p>
								</div>
							</div>
							<div className='playlist-control-btns'>
								<ImShuffle
									className='shuffle-playlist-btn'
									onClick={() => {
										log('clicked');
									}}
								/>
								<FaPlay
									className='play-playlist-btn'
									onClick={() => {
										log('clicked');
									}}
								/>
							</div>
						</li>
					))}
			</ul> */}
			<ul className='playlist-options-list'>
				<li
					className='create-playlist-wrapper'
					onClick={handlePlaylistFormDisplay}
				>
					<MdOutlineAddBox className='add-playlist-btn' />
					<div className='playlist-info-wrapper'>
						<p>Create Playlist</p>
						<p></p>
					</div>
				</li>
			</ul>
			<ul className='album-list'>
				{playlists &&
					playlists.map((playlist, index) => (
						<li
							// className={'songContainer ' + (currentSong === i ? 'selected' : '')}
							key={index}
							// onClick={() => {
							// 	SetCurrent(i);
							// }}
						>
							<div
								className='songmeta_playlist'
								onClick={() => {
									handleViewPlaylist(playlist._id);
								}}
							>
								<span className='songname'>{playlist.name}</span>
								<span className='songauthors'>
									{playlist.songs.length === 1
										? `${playlist.songs.length} song`
										: `${playlist.songs.length} songs`}
								</span>
							</div>
							<div className='playlist-control-btns'>
								<ImShuffle
									className='shuffle-playlist-btn'
									onClick={() => {
										log('clicked');
									}}
								/>
								<FaPlay
									className='play-playlist-btn'
									onClick={() => {
										handlePlaylist(playlist._id);
									}}
								/>
								{/* <FaEllipsisV
									className='options-playlist-btn'
									onClick={() => {
										log('clicked');
									}}
								/> */}
							</div>
							{/* <div className='playlist_btns_group'>
							<button
								className='fav_song playlist_btn'
							>
								<FiHeart
									className='far fa-heart fa-lg'
								/>
							</button>
							<button className='options_song playlist_btn'>
	
								<FaEllipsisV className='fas fa-ellipsis-v fa-lg' />
							</button>
						</div> */}
						</li>
					))}
			</ul>
			<AddPlaylistForm
				handlePlaylistFormDisplay={handlePlaylistFormDisplay}
				playlistFormDisplay={playlistFormDisplay}
				setPlaylistFormDisplay={setPlaylistFormDisplay}
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
	max-width: 42rem;

	/* .album-list {
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
	.playlist-options-list {
		list-style: none;
		background-color: ${({ theme }) => theme.bgGrey};
		margin: 0 2rem;
		padding: 0.5rem;
		.create-playlist-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			column-gap: 1rem;
			margin-top: 0rem;
			.add-playlist-btn {
				font-size: 3rem;
				color: ${({ theme }) => theme.green};
			}
			/* .playlist-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.white};
			} */
			.playlist-info-wrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				/* row-gap: 0.5rem; */
				p {
					color: ${({ theme }) => theme.white};
					font-size: 1.4rem;
					text-transform: capitalize;
					/* &:first-of-type {
					} */
					&:last-of-type {
						font-size: 1rem;
					}
				}
			}
		}
	}
	.album-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		/* flex: 1 1; */
		padding: 0;
		overflow-y: scroll;
		margin: 0 2rem;
		row-gap: 0.2rem;

		li {
			font-weight: 450;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0.5rem 1rem 0.5rem 0.5rem;
			background: ${({ theme }) => theme.bgGrey};
			.songmeta_playlist {
				flex: 1;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				/* pointer-events: none; */
				.songname {
					padding: 0 0.5rem;
					/* font-weight: 600; */
					font-size: 1.6rem;
					color: ${({ theme }) => theme.white};
				}
				.songauthors {
					padding: 0 0.5rem;
					font-weight: normal;
					color: ${({ theme }) => theme.primaryColor};

					/* color: #555; */
					font-size: 1.2rem;
					text-transform: uppercase;
					font-weight: bolder;
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
					font-size: 2rem;
				}
				.play-playlist-btn {
					/* color: ${({ theme }) => theme.white}; */
					font-size: 1.6rem;
				}
			}
		}
	}

	/* #sign-out-btn {
		color: ${({ theme }) => theme.white};
		background-color: ${({ theme }) => theme.primaryColor};
	} */
`;

export default Playlists;
