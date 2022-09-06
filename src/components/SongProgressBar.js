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
	input[type='range'] {
		-webkit-appearance: none;
		margin: 1rem 0;
		width: 100%;
	}

	input[type='range']:focus {
		outline: none;
	}

	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 0.8rem;
		cursor: pointer;
		animation: 0.2s;
		box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
		${'' /* background: ${({ theme }) => theme.primaryColor}; */}
		background-color: ${({ theme }) => theme.bgGrey};
		border-radius: 0.5rem;
		border: 0px solid ${({ theme }) => theme.black};
	}

	input[type='range']::-webkit-slider-thumb {
		box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
		border: 0px solid ${({ theme }) => theme.black};
		/* height: 1.3rem;
		width: 0.4rem; */
		height: 1.3rem;
		width: 1.3rem;
		border-radius: 5rem;
		${'' /* background: #2a6586; */}
		background: ${({ theme }) => theme.primaryColor};
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -0.4rem;
	}

	input[type='range']:focus::-webkit-slider-runnable-track {
		${'' /* background: ${({ theme }) => theme.primaryColor}; */}
		background-color: ${({ theme }) => theme.bgGrey};
	}

	input[type='range']::-moz-range-track {
		width: 100%;
		height: 0.5rem;
		cursor: pointer;
		animation: 0.2s;
		box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
		${'' /* background: ${({ theme }) => theme.primaryColor}; */}
		background-color: ${({ theme }) => theme.bgGrey};
		${'' /* background: ${({ theme }) => theme.primaryColor}; */}
		border-radius: 0.5rem;
		border: 0px solid ${({ theme }) => theme.black};
	}

	input[type='range']::-moz-range-thumb {
		box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
		border: 0px solid ${({ theme }) => theme.black};
		/* height: 1.3rem;
		width: 0.4rem; */
		height: 1.3rem;
		width: 1.3rem;
		border-radius: 5rem;
		${'' /* background: #2a6586; */}
		background: ${({ theme }) => theme.primaryColor};
		cursor: pointer;
	}

	input[type='range']::-ms-track {
		width: 100%;
		height: 0.5rem;
		cursor: pointer;
		animation: 0.2s;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	input[type='range']::-ms-fill-lower {
		background: ${({ theme }) => theme.primaryColor};
		border: 0px solid ${({ theme }) => theme.black};
		border-radius: 1rem;
		box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
	}

	input[type='range']::-ms-fill-upper {
		background: ${({ theme }) => theme.primaryColor};
		border: 0px solid ${({ theme }) => theme.black};
		border-radius: 1rem;
		box-shadow: 0px 0px 0px ${({ theme }) => theme.black};
	}

	input[type='range']::-ms-thumb {
		box-shadow: 0px 0px 1px ${({ theme }) => theme.black};
		border: 0px solid ${({ theme }) => theme.black};
		/* height: 1.3rem;
		width: 0.4rem; */
		height: 1.3rem;
		width: 1.3rem;
		border-radius: 5rem;
		${'' /* background: #2a6586; */}
		background: ${({ theme }) => theme.primaryColor};
		cursor: pointer;
	}

	input[type='range']:focus::-ms-fill-lower {
		${'' /* background: ${({ theme }) => theme.primaryColor}; */}
		background-color: ${({ theme }) => theme.bgGrey};
	}

	input[type='range']:focus::-ms-fill-upper {
		${'' /* background: ${({ theme }) => theme.primaryColor}; */}
		background-color: ${({ theme }) => theme.bgGrey};
	}
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
