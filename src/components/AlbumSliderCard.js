import React from 'react';
// import React, { useContext } from 'react';
import styled from 'styled-components';
// import playerContext from '../context/playerContext';
import { log } from '../helper';

const AlbumSliderCard = ({ handleClick, album }) => {
	// const {
	// 	// currentSong,
	// 	// songs,
	// 	// nextSong,
	// 	// prevSong,
	// 	// repeat,
	// 	// random,
	// 	// playing,
	// 	// toggleRandom,
	// 	// toggleRepeat,
	// 	// togglePlaying,
	// 	// handleEnd,
	// 	// setAlbumSongs,
	// 	// songslist,
	// } = useContext(playerContext);
	return (
		<StyledAlbumSliderCard
			className='album-card'
			onClick={() => {
				handleClick(album.id, album.title);
				log(album.id, 'album id');
				// log(songslist, 'songslist card');
				// setAlbumSongs(album.id);
			}}
		>
			<div className='album-card-artwork-wrapper'>
				<img
					src={album.coverUrl}
					alt='cover artwork'
					className='album-cover-artwork'
				/>
			</div>
			<div className='album-info-container'>
				<p>{album.title}</p>
				<p>{album.artistName}</p>
				<ul>
					{album.fileUrls.map((track, index) => {
						return <li key={index}>{track.slice(7, track.length - 4)}</li>;
					})}
				</ul>
			</div>
		</StyledAlbumSliderCard>
	);
};
const StyledAlbumSliderCard = styled.li`
	display: flex;
	justify-content: space-between;
	column-gap: 1rem;
	padding: 1rem;
	background-color: ${({ theme }) => theme.bgGrey};
	border: 0.2rem solid ${({ theme }) => theme.primaryColor};
	border-radius: 1rem;
	min-width: fit-content;
	height: fit-content;
	cursor: pointer;
	&:first-of-type {
		margin-left: 1rem;
	}
	&:last-of-type {
		margin-right: 1rem;
	}
	.album-card-artwork-wrapper {
		height: 10rem;
		pointer-events: none;
		img.album-cover-artwork {
			height: 100%;
			aspect-ratio: 1501 / 2376;
		}
	}
	.album-info-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		pointer-events: none;

		p {
			color: ${({ theme }) => theme.white};
			&:last-of-type {
				font-size: 1.2rem;
				text-transform: uppercase;
				font-weight: bold;
				color: ${({ theme }) => theme.primaryColor};
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
	}
`;

export default AlbumSliderCard;
