import React from 'react';
import styled from 'styled-components';
import { log } from '../helper';
// import LibraryPlaylistsCard from './LibraryPlaylistsCard';
import { FaPlay } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const LibraryPlaylists = ({
	handleViewPlaylist,
	playlists,
	handlePlaylist,
}) => {
	return (
		<StyledLibraryPlaylists className='album-slider'>
			<div className='header'>
				<p>Playlists</p>
				<NavLink to='/playlists' className='playlists-link'>
					view all
				</NavLink>
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
		</StyledLibraryPlaylists>
	);
};
const StyledLibraryPlaylists = styled.div`
	/* border: 2px solid green; */
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	justify-content: space-between;
	/* margin: 0 1rem; */
	/* border-top: 0.4rem solid ${({ theme }) => theme.borderLine};
	border-bottom: 0.4rem solid ${({ theme }) => theme.borderLine}; */
	border-top: 0.2rem solid ${({ theme }) => theme.bgGrey};
	border-bottom: 0.2rem solid ${({ theme }) => theme.bgGrey};
	padding: 0.5rem 0 1rem 0;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 2rem;
		color: ${({ theme }) => theme.white};
		p {
			text-transform: capitalize;
		}

		a.playlists-link {
			text-decoration: none;
			color: ${({ theme }) => theme.white};
			font-style: italic;
		}
	}

	.playlists-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		/* flex: 1 1; */
		padding: 0;
		overflow-y: scroll;
		margin: 0 1rem;
		/* row-gap: 0.2rem; */

		li {
			font-weight: 450;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0.5rem 1rem 0.5rem 0.5rem;
			background: ${({ theme }) => theme.bgGrey};
			border-bottom: 1px solid ${({ theme }) => theme.borderLine};
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
`;

export default LibraryPlaylists;
