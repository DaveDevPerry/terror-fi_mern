import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineAddBox, MdListAlt } from 'react-icons/md';
import { CgCloseR } from 'react-icons/cg';
import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
// import { useNavigate } from 'react-router-dom';

const PlaylistOptions = ({
	setPlaylistDisplay,
	playlistDisplay,
	handlePlaylistDisplay,
}) => {
	const { playlists } = usePlaylistsContext();
	// const navigate = useNavigate();

	// const handleClose = () => {
	// 	// navigate('/library');
	// 	setPlaylistDisplay(!playlistDisplay);
	// };
	return (
		<AnimatePresence mode='wait'>
			{playlistDisplay === true && (
				<StyledPlaylistOptions
					className='playlist-model'
					initial={{ height: 0 }}
					animate={{ height: 'max-content' }}
					exit={{ height: 0 }}
					// exit={{ y: '-200px' }}
				>
					<p className='playlist-header'>
						Add to playlist
						<CgCloseR className='close-icon' onClick={handlePlaylistDisplay} />
					</p>
					<ul className='playlist-options-list'>
						<li className='create-playlist-wrapper'>
							<MdOutlineAddBox className='add-playlist-btn' />
							<div className='playlist-info-wrapper'>
								<p>Create Playlist</p>
								<p></p>
							</div>
						</li>
						{/* <li className='create-playlist-wrapper'>
							<MdListAlt className='playlist-icon' />
							<div className='playlist-info-wrapper'>
								<p>playlist name</p>
								<p>6 songs</p>
							</div>
						</li>
						<li className='create-playlist-wrapper'>
							<MdListAlt className='playlist-icon' />
							<div className='playlist-info-wrapper'>
								<p>playlist 1 name</p>
								<p>67 songs</p>
							</div>
						</li> */}
						{playlists &&
							playlists.map((playlist, index) => (
								<li key={index} className='create-playlist-wrapper'>
									<MdListAlt className='playlist-icon' />
									<div className='playlist-info-wrapper'>
										<p>{playlist.name}</p>
										<p>{playlist.songs.length} songs</p>
									</div>
								</li>
							))}
					</ul>
				</StyledPlaylistOptions>
			)}
		</AnimatePresence>
	);
};

const StyledPlaylistOptions = styled(motion.div)`
	background-color: ${({ theme }) => theme.bgGrey};
	width: 100%;
	padding: 1rem;
	position: absolute;
	bottom: 0;
	left: 0;
	height: max-content;
	border-top: 0.4rem solid ${({ theme }) => theme.primaryColor};
	/* height: 22rem; */
	.playlist-header {
		position: relative;
		color: ${({ theme }) => theme.white};
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.white};
			cursor: pointer;
		}
	}
	.playlist-options-list {
		list-style: none;
		.create-playlist-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			column-gap: 1rem;
			margin-top: 1rem;
			.add-playlist-btn {
				font-size: 3rem;
				color: ${({ theme }) => theme.green};
			}
			.playlist-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.white};
			}
			.playlist-info-wrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				/* row-gap: 0.5rem; */
				p {
					color: ${({ theme }) => theme.white};
					font-size: 1.4rem;
					/* &:first-of-type {
					} */
					&:last-of-type {
						font-size: 1rem;
					}
				}
			}
		}
	}
`;

export default PlaylistOptions;
