import React from 'react';
import styled from 'styled-components';
import SongProgressBar from './SongProgressBar';
// import { useStateContext } from '../lib/context';

const SongProgressWidget = ({ fmtMSS, handleProgress, dur, currentTime }) => {
	// const { currentSongTime, currentTime } = useStateContext();
	return (
		<StyledSongProgressWidget className='progress-container'>
			<SongProgressBar
				dur={dur}
				// setDur={setDur}
				currentTime={currentTime}
				// setCurrentTime={setCurrentTime}
				fmtMSS={fmtMSS}
				handleProgress={handleProgress}
			/>
			{/* <div className='progress-time' id='current-time'>
				00:00{currentTime}
			</div>
			<div className='progress-wrapper' id='progress-wrapper'>
				<div className='progress' id='progress'></div>
			</div>
			<div className='progress-time' id='song-time'>
				03:11{currentSongTime}
			</div> */}
		</StyledSongProgressWidget>
	);
};
const StyledSongProgressWidget = styled.div`
	/* height: 4rem; */
	/* margin: 1rem 0; */
	width: 100%;
	// background-color: yellowgreen;
	border-top: 0.4rem solid ${({ theme }) => theme.borderLine};
	border-bottom: 0.4rem solid ${({ theme }) => theme.borderLine};
	border-top: 0.2rem solid ${({ theme }) => theme.borderCircle};
	border-bottom: 0.2rem solid ${({ theme }) => theme.borderCircle};
	padding: 0.5rem 2rem;
	/* @include flex(space-between, center, row); */
	display: flex;
	align-items: center;
	justify-content: space-between;
	// box-shadow: -4px -4px 4px rgba(171, 171, 171, 0.25),
	// 	4px 4px 4px rgba(0, 0, 0, 0.55);
	z-index: 600;
	.progress-wrapper {
		background-color: ${({ theme }) => theme.bgGrey};
		border-radius: 0.5rem;
		cursor: pointer;
		margin: 1rem 2rem;
		height: 1rem;
		width: 100%;
		.progress {
			/* background-color: ${({ theme }) => theme.primaryColor}; */
			background: ${({ theme }) => theme.bgGrey};
			border-radius: 0.5rem;
			height: 100%;
			width: 0%;
			transition: width 0.1s linear;
		}
	}
`;

export default SongProgressWidget;
