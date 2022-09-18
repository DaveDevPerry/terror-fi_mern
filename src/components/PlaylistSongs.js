import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import styled from 'styled-components';
// import playerContext from '../../context/playerContext';
// import { usePlayerContext } from '../hooks/usePlayerContext';
// import { HiEllipsisVertical } from 'react-icons/hi';
// import { HiOutlineEllipsisVertical } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import { log } from '../helper';
import toast from 'react-hot-toast';
// import { log } from '../../helper';
import { AnimatePresence, motion } from 'framer-motion';

function PlaylistSongs({ playlist, removeSongFromPlaylist, handleOptions }) {
	// const { currentSong, songslist, playListTitle } = usePlayerContext();
	// const { SetCurrent, currentSong, songslist, playListTitle } =
	// 	usePlayerContext();
	const { dataLoaded, showOptions, setShowOptions } = useStateContext();
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
	log(playlist, 'playlist - playlist songs');
	log(playlist && playlist, 'playlist - playlist songs');

	// create a toast
	const notify = (songTitle) => {
		toast.success(`${songTitle} removed from playlist.`, {
			duration: 2000,
			style: {
				border: '2px solid #1da000',
				textAlign: 'center',
			},
		});
	};

	return (
		<StyledPlaylistSongs className='playlist no_drag'>
			<div className='header'>
				<h4 className='pltext'>{playlist.name}</h4>
			</div>
			<ul className='loi'>
				{playlist.songs &&
					playlist.songs.map((song, i) => (
						<li
							className='songContainer'
							// className={'songContainer ' + (currentSong === i ? 'selected' : '')}
							key={i}
							// onClick={() => {
							// 	SetCurrent(i);
							// }}
						>
							<div className='tmbn_song'>
								<img
									src={song.artworkUrl}
									alt='song artwork'
									className='song-artwork'
								/>
								{/* <i className='fas fa-play test-play-btn'></i> */}
							</div>
							<div className='songmeta_playlist'>
								<span className='songname'>{song.title}</span>
								<span className='songauthors'>{song.artistName}</span>
							</div>
							<div className='playlist_btns_group'>
								<button className='fav_song playlist_btn'>
									<FiHeart className='far fa-heart fa-lg' />
								</button>
								<button
									className='options_song playlist_btn'
									onClick={(e) => {
										// handleOptions(e);
										handleOptions(e, song.title, i);
									}}
								>
									<FaEllipsisV
										className='fas fa-ellipsis-v fa-lg'
										// onClick={(e) => {
										// 	handleOptions(song._id);
										// }}
									/>
								</button>
								<AnimatePresence mode='wait'>
									{showOptions === i && (
										<motion.div
											className='list-options-modal'
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											<p
												onClick={() => {
													log(song.title, 'for notify');
													removeSongFromPlaylist(song._id, playlist._id);
													notify(song.title);
													setTimeout(() => {
														setShowOptions(false);
													}, 2000);
												}}
											>
												remove
											</p>
										</motion.div>
									)}
								</AnimatePresence>
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
		</StyledPlaylistSongs>
	);
}
const StyledPlaylistSongs = styled.div`
	/* flex: 1; */
	/* overflow-y: scroll; */
	overflow-y: hidden;
	z-index: 1;
	/* border: 2px solid green; */
	/* padding: 0 1rem; */
	margin: 0 2rem;

	&.no_drag {
		-webkit-app-region: no-drag;
	}
	&.playlist {
		/* background: ${({ theme }) => theme.bgGrey}; */
		/* background: ${({ theme }) => theme.bgLightGrey}; */
		/* background: #e3e3e3; */
		/* flex: 1 1; */
		display: flex;
		flex-direction: column;
		/* height: 20rem; */
		/* margin-bottom: 2rem; */
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
	.loi {
		list-style: none;
		display: flex;
		flex-direction: column;
		/* flex: 1 1; */
		padding: 0;
		overflow-y: scroll;
		/* height: 20rem; */
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			width: 0 !important;
		}
		li {
			/* margin: 2px; */
			font-weight: 450;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0 1rem 0 0;
			background: ${({ theme }) => theme.bgGrey};

			/* &:hover {
				background-color: #dfdfdf;
			} */
			&.selected {
				background: ${({ theme }) => theme.bgCircle};
			}
			&.songContainer {
				/* cursor: pointer; */
				user-select: none;
			}
			.tmbn_song {
				height: 4.5rem;
				width: 4.5rem;
				position: relative;
				padding: 0.5rem 0;
				pointer-events: none;
				.song-artwork {
					height: 3.5rem;
					width: 3.5rem;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					/* .test-play-btn {
						height: 4.5rem;
						width: 4.5rem;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: 5;
					} */
				}
			}
			.songmeta_playlist {
				flex: 1;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				pointer-events: none;
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
			/* .fav_song.playlist_btn {
				color: ${({ theme }) => theme.primaryColor};
				margin-right: 5px;
				cursor: pointer;
			} */
			.playlist_btns_group {
				display: flex;
				flex-direction: row;
				column-gap: 1rem;
				justify-content: space-between;
				position: relative;
				height: 100%;
				.playlist_btn {
					color: ${({ theme }) => theme.primaryColor};
					/* margin-right: 5px; */
					cursor: pointer;
					font-size: 1.8rem;
					z-index: 10000;
					.fas.fa-ellipsis-v.fa-lg {
						pointer-events: none;
					}
					&.fav_song {
						color: ${({ theme }) => theme.primaryColor};
						margin-right: 5px;
						cursor: pointer;
					}
				}
				.list-options-modal {
					position: absolute;
					right: 50%;
					top: 50%;
					transform: translateY(-50%);
					height: calc(100% - 1rem);
					background-color: ${({ theme }) => theme.primaryColor};
					color: ${({ theme }) => theme.white};
					width: max-content;
					border-radius: 0.5rem;
					padding: 0.5rem;
					display: grid;
					place-content: center;
					z-index: 60000;
					p {
						text-transform: uppercase;
						font-weight: bold;
						padding: 0 1rem;
					}
				}
			}
		}
	}
	/* .fav_song.playlist_btn {
		color: ${({ theme }) => theme.primaryColor};
		margin-right: 5px;
		cursor: pointer;
	} */
`;

export default PlaylistSongs;
