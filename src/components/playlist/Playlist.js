// import React, { useContext } from 'react';
import styled from 'styled-components';
// import playerContext from '../../context/playerContext';
import { usePlayerContext } from '../../hooks/usePlayerContext';
// import { HiEllipsisVertical } from 'react-icons/hi';
// import { HiOutlineEllipsisVertical } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
// import { log } from '../../helper';

function Playlist() {
	const { currentSong, songslist, playListTitle } = usePlayerContext();
	// const { SetCurrent, currentSong, songslist, playListTitle } =
	// 	usePlayerContext();

	// const handleFavourite = (e) => {
	// 	e.preventDefault();
	// 	log(e.target, 'e target');
	// 	log(this.song.title, 'song this title');
	// 	log(this.song._id, 'song id?');
	// };

	return (
		<AnimatePresence mode='wait'>
			<StyledPlaylist
				className='playlist no_drag'
				initial={{ width: 0 }}
				animate={{ width: 'auto' }}
				// animate={{ width: '100%' }}
				exit={{ x: window.innerWidth }}
			>
				<div className='header'>
					<h4 className='pltext'>{playListTitle}</h4>
				</div>
				<ul className='loi'>
					{songslist.map((song, i) => (
						<li
							className={
								'songContainer ' + (currentSong === i ? 'selected' : '')
							}
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
								<button
									className='fav_song playlist_btn'
									// onClick={(e) => handleFavourite}
								>
									<FiHeart
										className='far fa-heart fa-lg'
										// onClick={(e) => handleFavourite}
									/>
								</button>
								<button className='options_song playlist_btn'>
									{/* <HiOutlineEllipsisVertical className='fas' /> */}
									{/* <HiEllipsisVertical className='fas fa-ellipsis-v fa-lg' /> */}
									<FaEllipsisV className='fas fa-ellipsis-v fa-lg' />
									{/* <i className='fas fa-ellipsis-v fa-lg'></i> */}
								</button>
							</div>
						</li>
					))}
				</ul>
			</StyledPlaylist>
		</AnimatePresence>
	);
}
const StyledPlaylist = styled(motion.div)`
	/* flex: 1; */
	/* overflow-y: scroll; */
	overflow-y: hidden;
	z-index: 1;
	/* border: 2px solid green; */
	/* padding: 0 1rem; */
	margin: 0 2rem;
	flex: 1;
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
		li {
			/* margin: 2px; */
			font-weight: 450;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0 1rem 0 0;
			background: ${({ theme }) => theme.bgGrey};

			&:hover {
				background-color: #dfdfdf;
			}
			&.selected {
				/* background: white; */
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
			.fav_song.playlist_btn {
				color: ${({ theme }) => theme.primaryColor};
				margin-right: 5px;
				cursor: pointer;
			}
		}
	}
	/* .fav_song.playlist_btn {
		color: ${({ theme }) => theme.primaryColor};
		margin-right: 5px;
		cursor: pointer;
	} */
`;

export default Playlist;
