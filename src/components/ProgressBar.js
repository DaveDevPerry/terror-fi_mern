import React from 'react';

const ProgressBar = ({
	dur,
	currentTime,
	handleProgress,
	songslist,
	currentSong,
	fmtMSS,
}) => {
	return (
		<div className='progressb'>
			<div className='songMeta'>
				<span className='songtitle'>{songslist[currentSong].title}</span>
				<span className='songartistName'>
					{songslist[currentSong].artistName}
				</span>
			</div>
			<input
				onChange={handleProgress}
				value={dur ? (currentTime * 100) / dur : 0}
				type='range'
				name='progressBar'
				id='prgbar'
			/>
			<span className='currentT'>{fmtMSS(currentTime)}</span>/
			<span className='totalT'>{fmtMSS(dur)}</span>
		</div>
	);
};

export default ProgressBar;
