import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import { useStateContext } from '../lib/context';

const VisualyzerWidget = () => {
	const { isPlaying } = useStateContext();

	const container = useRef('#container');
	const canvas = useRef('#canvas1');

	// const container = document.querySelector('#container');
	// const canvas = document.querySelector('#canvas1');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// const file = document.querySelector('#file-upload');
	const ctx = canvas.getContext('2d');
	let audioSource;
	let analyser;

	// my function that starts vis from playSong func
	function startVisualiser(audio) {
		console.log('in vis func');
		console.log(audio);
		const audioContext = new AudioContext();
		audioSource = audioContext.createMediaElementSource(audio);
		analyser = audioContext.createAnalyser();
		audioSource.connect(analyser);
		analyser.connect(audioContext.destination);
		analyser.fftSize = 32;
		const bufferLength = analyser.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);
		// bar visualiser
		const barWidth = canvas.width / 2 / bufferLength;
		// const barWidth = canvas.width / 2 / bufferLength;
		let barHeight;
		let x;

		function animate() {
			x = 0;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			analyser.getByteFrequencyData(dataArray);
			drawEq(bufferLength, x, barWidth, barHeight, dataArray);
			requestAnimationFrame(animate);
		}
		animate();
	}
	function drawEq(bufferLength, x, barWidth, barHeight, dataArray) {
		// draw visualiser on canvas
		for (let i = 0; i < bufferLength; i++) {
			barHeight = dataArray[i] * 2.5;
			const red = (i * barHeight) / 20;
			const green = i * 2;
			const blue = 0;
			// ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
			ctx.fillStyle = `rgb(${red},${green},${blue})`;
			ctx.fillRect(
				canvas.width / 2 - x,
				canvas.height - barHeight,
				barWidth,
				barHeight
			);
			x += barWidth;
		}
		for (let i = 0; i < bufferLength; i++) {
			barHeight = dataArray[i] * 2;
			const red = (i * barHeight) / 20;
			const green = i * 2;
			const blue = 0;
			ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
			ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
			x += barWidth;
		}
	}

	useEffect(() => {
		log('starting viz - isplaying true - viz widget');
		startVisualiser();
	}, [isPlaying]);

	return (
		<StyledVisualyzerWidget className='visualyser-container'>
			<div id='container' ref={container}>
				<canvas id='canvas1' ref={canvas}></canvas>
			</div>
		</StyledVisualyzerWidget>
	);
};
const StyledVisualyzerWidget = styled.div`
	height: 12rem;
	position: relative;
	width: 100%;
	height: 12rem;
	// height: 20rem;
	// background-color: white;
	// border-top: 4px solid black;
	border: 2px solid red;
	#container {
		position: absolute;
		top: 0;
		left: 0;
		// background-color: $black;
		// background-color: transparent;
		width: 100%;
		height: 100%;
		#canvas1 {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 12rem;
		}
		#audio1 {
			width: 50%;
			margin: 5rem auto;
			display: block;
		}
		#file-upload {
			position: absolute;
			top: 0;
			color: white;
			z-index: 10;
		}
	}
`;

export default VisualyzerWidget;
