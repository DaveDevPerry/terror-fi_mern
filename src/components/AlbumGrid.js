import React from 'react';
import styled from 'styled-components';
// import AlbumSliderCard from './AlbumSliderCard';
import AlbumSliderCardDesktop from './desktop/AlbumSliderCardDesktop';

const AlbumGrid = ({ handleClick, albums }) => {
	return (
		<StyledAlbumGrid className='album-slider'>
			<p>Albums</p>
			<div className='album-slider-container'>
				{albums &&
					albums.map((album, index) => (
						<AlbumSliderCardDesktop
							key={index}
							handleClick={handleClick}
							album={album}
						/>
					))}
			</div>
		</StyledAlbumGrid>
	);
};
const StyledAlbumGrid = styled.div`
	/* border: 2px solid green; */
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	justify-content: space-between;
	margin: 0 2rem;
	/* margin: 0 1rem; */

	/* border-top: 0.2rem solid ${({ theme }) => theme.bgGrey};
	border-bottom: 0.2rem solid ${({ theme }) => theme.bgGrey}; */
	/* padding: 0.5rem 0 1rem 0; */
	p {
		color: ${({ theme }) => theme.white};
		text-transform: capitalize;
		padding-left: 2rem;
		pointer-events: none;
	}
	.album-slider-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		z-index: 5;
		/* overflow-x: scroll; */
		// remove appearance of scroll bar
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			width: 0 !important;
		}
	}
`;

export default AlbumGrid;
