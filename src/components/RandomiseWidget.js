import React from 'react';
import styled from 'styled-components';
// import { FiHeart } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
// import { ImShuffle } from 'react-icons/im';
// import { log } from '../helper';

const RandomizeWidget = ({ playAllRandom }) => {
	return (
		<StyledRandomizeWidget
			className='randomize-widget-wrapper'
			// onClick={playAllRandom}
		>
			{/* <div className='randomize-widget-icon-wrapper'>
				<FiHeart className='far fa-heart fa-lg' />
			</div> */}
			<div className='randomize-widget-bar'></div>
			<div className='randomize-widget-content-wrapper'>
				{/* <div className='randomize-widget-icon-wrapper'>
					<ImShuffle
						className='shuffle-favourites-btn'
						onClick={shuffleFavourites}
					/>
				</div> */}
				<div className='randomize-widget-icon-wrapper'>
					<FaPlay className='play-randomize-btn' onClick={playAllRandom} />
				</div>
				<div className='randomize-widget-text-wrapper'>
					<p>Shake, shake it up baby!</p>
					{/* <p>Randomize</p> */}
				</div>
			</div>
			{/* <div className='randomize-widget-control-btns'>
				<ImShuffle
					className='shuffle-favourites-btn'
					onClick={shuffleFavourites}
				/>
				<FaPlay className='play-randomize-btn' onClick={playAllRandom} />
			</div> */}
		</StyledRandomizeWidget>
	);
};
const StyledRandomizeWidget = styled.div`
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
	margin-left: 3rem;
	z-index: 400;
	.randomize-widget-content-wrapper {
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		align-items: center;
		/* border: 2px solid white; */
		column-gap: 1rem;
		z-index: 7000;
		padding-left: 2rem;
		.randomize-widget-text-wrapper {
			z-index: 8000;
			p {
				color: ${({ theme }) => theme.white};
				text-transform: capitalize;
				margin-left: 1rem;
			}
		}
		.randomize-widget-icon-wrapper {
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
			/* .shuffle-favourites-btn, */
			.play-randomize-btn {
				color: ${({ theme }) => theme.white};
				font-size: 1.6rem;
				cursor: pointer;
			}
			/* .play-randomize-btn {
				font-size: 1.6rem;
				cursor: pointer;
			} */
		}
	}
	.randomize-widget-bar {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
		height: 2.4rem;
		width: 100%;
		/* border-radius: 0 0.5rem 0.5rem 0; */
		border-radius: 1rem 0 0 1rem;
		background-color: ${({ theme }) => theme.bgGrey};
		/* background-color: ${({ theme }) => theme.bgCircle}; */
		z-index: 500;
	}
`;

export default RandomizeWidget;
