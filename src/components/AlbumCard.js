import React from 'react';
// import React, { useContext } from 'react';
import styled from 'styled-components';
// import playerContext from '../context/playerContext';
import { log } from '../helper';

const AlbumCard = ({ handleClick, album }) => {
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
		<StyledAlbumCard
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
		</StyledAlbumCard>
	);
};
const StyledAlbumCard = styled.li`
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	column-gap: 2rem;
	padding: 1rem;
	background-color: ${({ theme }) => theme.bgGrey};
	/* background-color: ${({ theme }) => theme.bgCircle}; */
	border: 0.2rem solid ${({ theme }) => theme.primaryColor};
	/* border-radius: 0.5rem; */
	border-radius: 1rem;
	.album-card-artwork-wrapper {
		/* border: 1px solid yellow; */
		height: 10rem;
		/* width: */
		img.album-cover-artwork {
			/* width: 20%; */
			height: 100%;
			/* width: 15%; */
			aspect-ratio: 1501 / 2376;
		}
	}
	.album-info-container {
		flex: 1;
		display: flex;
		flex-direction: column;
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

export default AlbumCard;
