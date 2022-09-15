import React from 'react';
import styled from 'styled-components';
import AlbumSliderCard from './AlbumSliderCard';

const AlbumSlider = ({ handleClick, albums }) => {
	return (
		<StyledAlbumSlider className='album-slider'>
			<p>Albums</p>
			<ul className='album-slider-list'>
				{albums &&
					albums.map((album, index) => (
						<AlbumSliderCard
							key={index}
							handleClick={handleClick}
							album={album}
						/>
					))}
			</ul>
		</StyledAlbumSlider>
	);
};
const StyledAlbumSlider = styled.div`
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
	p {
		color: ${({ theme }) => theme.white};
		text-transform: capitalize;
		padding-left: 2rem;
	}
	.album-slider-list {
		display: flex;
		flex-direction: row;

		column-gap: 1rem;
		z-index: 5;
		overflow-x: scroll;
		// remove appearance of scroll bar
	}
`;

export default AlbumSlider;
