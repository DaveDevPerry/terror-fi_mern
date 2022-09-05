import React from 'react';
import styled from 'styled-components';
import { log } from '../helper';

const AlbumCard = ({ handleClick, album }) => {
	return (
		<StyledAlbumCard
			className='album-card'
			onClick={() => {
				handleClick(album.id);
				log(album.id, 'album id');
			}}
		>
			<img
				src={album.coverUrl}
				alt='cover artwork'
				className='album-cover-artwork'
			/>
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
	}
`;

export default AlbumCard;