import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import styled from 'styled-components';
// import playerContext from '../../context/playerContext';
// import { usePlayerContext } from '../hooks/usePlayerContext';
// import { HiEllipsisVertical } from 'react-icons/hi';
// import { HiOutlineEllipsisVertical } from 'react-icons/hi';
// import { FiHeart } from 'react-icons/fi';
// import { FaEllipsisV } from 'react-icons/fa';
// import { log } from '../helper';
// import toast from 'react-hot-toast';
import { FaPlay } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
// import { log } from '../../helper';
// import { AnimatePresence, motion } from 'framer-motion';
import { usePlaylistsContext } from '../hooks/usePlaylistsContext';

function PlaylistsList({
	// playlists,
	// removeSongFromPlaylist,
	// handleOptions,
	handleViewPlaylist,
	handleShufflePlaylist,
	handlePlaylist,
}) {
	// const { currentSong, songslist, playListTitle } = usePlayerContext();
	// const { SetCurrent, currentSong, songslist, playListTitle } =
	// 	usePlayerContext();
	const { playlists } = usePlaylistsContext();
	const { dataLoaded } = useStateContext();
	const navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);
	// const handleFavourite = (e) => {
	// 	e.preventDefault();
	// 	log(e.target, 'e target');
	// 	log(this.song.title, 'song this title');
	// 	log(this.song._id, 'song id?');
	// };
	// log(playlist, 'playlist - playlist songs');
	// log(playlist && playlist, 'playlist - playlist songs');

	// create a toast
	// const notify = (songTitle) => {
	// 	toast.success(`${songTitle} removed from playlist.`, {
	// 		duration: 2000,
	// 		style: {
	// 			border: '2px solid #1da000',
	// 			textAlign: 'center',
	// 		},
	// 	});
	// };

	return (
		<StyledPlaylistsList className='playlist no_drag'>
			<div className='header'>
				<h4 className='pltext'>All Playlists</h4>
			</div>
			<ul className='playlists-list'>
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
								{playlist.songs.length >= 1 ? (
									<>
										<ImShuffle
											className='shuffle-playlist-btn'
											onClick={() => {
												handleShufflePlaylist(playlist._id);
											}}
										/>
										<FaPlay
											className='play-playlist-btn'
											onClick={() => {
												handlePlaylist(playlist._id);
											}}
										/>
									</>
								) : (
									<>
										<ImShuffle
											className='shuffle-playlist-btn not-active'
											// onClick={() => {
											// 	handleShufflePlaylist(playlist._id);
											// }}
										/>
										<FaPlay
											className='play-playlist-btn not-active'
											// onClick={() => {
											// 	handlePlaylist(playlist._id);
											// }}
										/>
									</>
								)}
								{/* <ImShuffle
									className='shuffle-playlist-btn'
									onClick={() => {
										handleShufflePlaylist(playlist._id);
									}}
								/>
								<FaPlay
									className='play-playlist-btn'
									onClick={() => {
										handlePlaylist(playlist._id);
									}}
								/> */}
							</div>
						</li>
					))}
			</ul>
		</StyledPlaylistsList>
	);
}
const StyledPlaylistsList = styled.div`
	overflow-y: hidden;
	z-index: 1;
	margin: 0 2rem;
	&.no_drag {
		-webkit-app-region: no-drag;
	}
	&.playlist {
		display: flex;
		flex-direction: column;
	}
	.pltext {
		display: inline-block;
		padding: 2px 10px;
		background-color: ${({ theme }) => theme.primaryColor};
		border-radius: 0.5rem 0.5rem 0 0;
		color: ${({ theme }) => theme.white};
		font-weight: lighter;
		text-transform: capitalize;
	}

	.playlists-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		padding: 0;
		overflow-y: auto;
		/* overflow-y: scroll; */

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
				cursor: pointer;
				.songname {
					padding: 0 0.5rem;
					font-size: 1.6rem;
					color: ${({ theme }) => theme.white};
					text-transform: capitalize;
				}
				.songauthors {
					padding: 0 0.5rem;
					font-weight: normal;
					color: ${({ theme }) => theme.primaryColor};
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
					cursor: pointer;
				}
				.play-playlist-btn {
					font-size: 1.6rem;
					&.not-active {
						color: ${({ theme }) => theme.borderLine};
						cursor: unset;
					}
				}
				.shuffle-playlist-btn {
					&.not-active {
						color: ${({ theme }) => theme.borderLine};
						cursor: unset;
					}
				}
			}
		}
	}
`;

export default PlaylistsList;
