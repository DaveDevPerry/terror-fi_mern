// Credits to Nick Jones's original vanilla source: https://codepen.io/nfj525/pen/rVBaab
// import React from 'https://cdn.skypack.dev/react@17.0.1';
// import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { useEffect, useRef } from 'react';
// import React from "https://cdn.skypack.dev/react@17.0.1";
// import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
// import { useEffect, useRef } from "https://cdn.skypack.dev/react";
import styled from 'styled-components';
import { usePlayerContext } from '../hooks/usePlayerContext';
// import { log } from '../helper';

const AudioVisualizer = () => {
	const {
		currentSong,

		// 		repeat,
		// 		random,
		// playing,
		// dispatch,
		songslist,
	} = usePlayerContext();

	const songUrl = songslist[currentSong].fileUrl;
	const canvasRef = useRef(null);
	// buttonRef = useRef(null);

	const audioVisualizerLogic = () => {
		const context = new (window.AudioContext || window.webkitAudioContext)(),
			source = context.createBufferSource();

		//fetch remote audio source
		fetch(songUrl)
			// fetch('https://jplayer.org/audio/mp3/RioMez-01-Sleep_together.mp3')
			.then((response) => response.arrayBuffer())
			.then((response) => {
				context.decodeAudioData(response, (buffer) => {
					source.buffer = buffer;
					source.connect(context.destination);
					// auto play
					// if (playing === true) {
					source.start(0);
					// }
				});
			});

		// const audio = new Audio(source);
		const canvas = canvasRef.current;
		// muteButton = buttonRef.current;

		//mute or play on click
		// const mutePlay = () => {
		// 	context.state === 'running' ? context.suspend() : context.resume();
		// };
		// muteButton.onclick = () => mutePlay();

		//config canvas
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		const ctx = canvas.getContext('2d');

		//config audio analyzer
		const analyser = context.createAnalyser();
		source.connect(analyser);
		analyser.connect(context.destination);
		// analyser.fftSize = 128;
		analyser.fftSize = 256;
		// log(barHeight, 'bar height');
		const bufferLength = analyser.frequencyBinCount,
			dataArray = new Uint8Array(bufferLength),
			WIDTH = canvas.width,
			// HEIGHT = 800,
			HEIGHT = canvas.height,
			barWidth = (WIDTH / bufferLength) * 5;
		// barWidth = (WIDTH / bufferLength) * 2.5;
		// log(HEIGHT, 'bar height');
		let barHeight = null,
			x = null;

		//core logic for the visualizer
		const timeouts = [];
		const renderFrame = () => {
			ctx.fillStyle = 'rgba(0,0,0,0)';
			requestAnimationFrame(renderFrame);
			x = 0;
			analyser.getByteFrequencyData(dataArray);
			ctx.fillRect(0, 0, WIDTH, HEIGHT);

			for (let i = 0; i < bufferLength; i++) {
				//color based upon frequency
				barHeight = dataArray[i];
				// log(barHeight, 'bar height');
				let r = barHeight + 22 * (i / bufferLength),
					// let r = barHeight + 22 * (i / bufferLength),
					g = 333 * (i / bufferLength),
					b = 47;
				ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
				// ctx.fillRect(x, 640 - barHeight, barWidth, barHeight);
				ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
				x += barWidth + 1;

				//Allows visualizer to overlay on a background/video by clearing the rects after painting.
				let timer = setTimeout(() => {
					ctx.clearRect(0, 0, WIDTH, HEIGHT);
				}, 50);
				timeouts.push(timer);
			}
			// log(barHeight, 'bar height');
		};
		//Clears the accumulating timeouts.
		setTimeout(() => {
			for (let i = 0; i < timeouts.length; i++) {
				return clearTimeout(timeouts[i]);
			}
		}, 51);
		renderFrame();
	};

	//connect audio visualizer to DOM and execute logic
	useEffect(() => {
		audioVisualizerLogic();
	}, []);

	return (
		<StyledAudioVisualizer>
			{/* <header className='App-header'>
				<h1>React Audio Visualizer</h1>
			</header> */}
			{/* <span className='hint'>(Click page to start/stop)</span> */}
			{/* <main className='main-box'> */}
			{/* <button className='contextButton' ref={buttonRef}> */}
			<canvas ref={canvasRef} className='canvas'></canvas>
			{/* </button> */}
			{/* </main> */}
		</StyledAudioVisualizer>
	);
};

const StyledAudioVisualizer = styled.div`
	/* .App-header {
		position: relative;
		top: 100px;
		width: 500px;
		margin: 0 auto;
		text-align: center;
		background-color: #282c34;
		min-height: 64px;
		display: flex;
		flex-direction: column;
		color: white;
	}

	.App-header h1 {
		margin: auto;
		font-size: 32px;
	} */
	/* height: 12rem; */
	/* position: relative; */
	width: 100%;
	height: 12rem;
	/* border: 2px solid red; */
	flex: 1;
	/* .hint {
		display: block;
		width: 100%;
		text-align: center;
	} */

	/* .contextButton {
		background: transparent;
		border: none;
		padding: 0;
		height: 100%;
		width: 100%;
	} */

	/* .main-box {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
		height: calc(100vh - 64px);
		width: 100vw;
		overflow: hidden hidden;
	} */

	.canvas {
		height: 110%;
		width: 100.4%;
	}
`;

export default AudioVisualizer;
