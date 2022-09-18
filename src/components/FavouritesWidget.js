import React from 'react';
import styled from 'styled-components';
// import { FiHeart } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
// import { log } from '../helper';

const FavouritesWidget = ({
	playFavourites,
	shuffleFavourites,
	viewFavourites,
}) => {
	return (
		<StyledFavouritesWidget
			className='fav-widget-wrapper'
			// onClick={playFavourites}
		>
			{/* <div className='fav-widget-icon-wrapper'>
				<FiHeart className='far fa-heart fa-lg' />
			</div> */}
			<div className='fav-widget-bar'></div>
			<div className='fav-widget-content-wrapper'>
				<div className='fav-widget-text-wrapper'>
					<NavLink
						to='/favourites'
						className='favourites-link'
						onClick={viewFavourites}
					>
						<p>My Favourites</p>
					</NavLink>
				</div>
				<div className='fav-widget-icon-wrapper'>
					<ImShuffle
						className='shuffle-favourites-btn'
						onClick={shuffleFavourites}
					/>
				</div>
				<div className='fav-widget-icon-wrapper'>
					<FaPlay className='play-favourites-btn' onClick={playFavourites} />
				</div>
			</div>
			{/* <div className='fav-widget-control-btns'>
				<ImShuffle
					className='shuffle-favourites-btn'
					onClick={shuffleFavourites}
				/>
				<FaPlay className='play-favourites-btn' onClick={playFavourites} />
			</div> */}
		</StyledFavouritesWidget>
	);
};
const StyledFavouritesWidget = styled.div`
	/* display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center; */
	position: relative;

	/* padding: 1rem; */
	/* background-color: ${({ theme }) => theme.bgGrey}; */
	/* border: 0.2rem solid ${({ theme }) => theme.primaryColor}; */
	/* border-radius: 1rem; */
	/* cursor: pointer; */
	/* flex: 1; */
	/* width: fit-content; */
	/* border: 2px solid green; */
	margin-right: 3rem;
	z-index: 400;
	.fav-widget-content-wrapper {
		display: flex;
		justify-content: flex-end;
		flex-direction: row;
		align-items: center;
		/* border: 2px solid white; */
		column-gap: 1rem;
		z-index: 7000;
		padding-right: 2rem;
		.fav-widget-text-wrapper {
			z-index: 8000;
			a.favourites-link {
				text-decoration: none;
				/* color: ${({ theme }) => theme.white}; */
				/* font-style: italic; */
				/* padding: 2px 10px; */
				/* border: 2px solid ${({ theme }) => theme.primaryColor}; */
				/* border-radius: 0.5rem; */
				/* font-size: 1.4rem; */
				p {
					color: ${({ theme }) => theme.white};
					text-transform: capitalize;
					margin-right: 1rem;
				}
			}
		}
		.fav-widget-icon-wrapper {
			/* border: 2px solid yellow; */
			height: 5rem;
			width: 5rem;
			display: grid;
			place-content: center;
			/* background-color: ${({ theme }) => theme.borderLine}; */
			background-color: ${({ theme }) => theme.bgGrey};
			border-radius: 50%;
			border: 2px solid ${({ theme }) => theme.primaryColor};
			z-index: 8000;
			.shuffle-favourites-btn,
			.play-favourites-btn {
				color: ${({ theme }) => theme.white};
				font-size: 2rem;
				cursor: pointer;
			}
			.play-favourites-btn {
				font-size: 1.6rem;
				cursor: pointer;
			}
		}
	}
	.fav-widget-bar {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		height: 2.4rem;
		width: 100%;
		/* border-radius: 0 0.5rem 0.5rem 0; */
		border-radius: 0 1rem 1rem 0;
		background-color: ${({ theme }) => theme.bgGrey};
		/* background-color: ${({ theme }) => theme.bgCircle}; */
		z-index: 500;
	}
`;

export default FavouritesWidget;
