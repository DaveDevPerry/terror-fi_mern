import React from 'react';
import styled from 'styled-components';
import SongProgressBar from '../SongProgressBar';
// import { useStateContext } from '../lib/context';

const SongProgressWidgetDesktop = ({
	fmtMSS,
	handleProgress,
	dur,
	currentTime,
}) => {
	// const { currentSongTime, currentTime } = useStateContext();
	return (
		<StyledSongProgressWidgetDesktop className='progress-container'>
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
		</StyledSongProgressWidgetDesktop>
	);
};
const StyledSongProgressWidgetDesktop = styled.div`
	/* width: 100%; */
	/* border-top: 0.4rem solid ${({ theme }) => theme.borderLine};
	border-bottom: 0.4rem solid ${({ theme }) => theme.borderLine};
	border-top: 0.2rem solid ${({ theme }) => theme.borderCircle};
	border-bottom: 0.2rem solid ${({ theme }) => theme.borderCircle};
	border-top: 0.2rem solid ${({ theme }) => theme.borderCircle}; */
	border: 0.2rem solid ${({ theme }) => theme.borderCircle};
	padding: 0.5rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 600;
	border-radius: 10px;
	margin: 0 2rem;
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

export default SongProgressWidgetDesktop;
