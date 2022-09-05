import React from 'react';
import styled from 'styled-components';

const SongProgressBar = ({ fmtMSS, handleProgress, dur, currentTime }) => {
	// const fmtMSS = (s) => {
	// 	return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
	// };
	// const handleProgress = (e) => {
	// 	let compute = (e.target.value * dur) / 100;
	// 	setCurrentTime(compute);
	// 	audio.current.currentTime = compute;
	// };

	return (
		<StyledSongProgressBar className='progressb'>
			<span className='currentT mono-font'>{fmtMSS(currentTime)}</span>
			<input
				onChange={handleProgress}
				value={dur ? (currentTime * 100) / dur : 0}
				type='range'
				name='progressBar'
				id='prgbar'
			/>

			<span className='totalT mono-font'>{fmtMSS(dur)}</span>
		</StyledSongProgressBar>
	);
};
const StyledSongProgressBar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	#prgbar {
		/* background-color: ${({ theme }) => theme.bgGrey}; */
		background: transparent;
		/* background: green; */
		width: 100%;
	}
	.currentT,
	.totalT {
		/* font-family: 'Roboto'; */
		color: ${({ theme }) => theme.txtGrey};
		width: 35px;
		margin: 0 1rem;
	}
`;

export default SongProgressBar;
