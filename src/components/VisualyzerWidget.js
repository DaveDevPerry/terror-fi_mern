import React from 'react';
import styled from 'styled-components';

const VisualyzerWidget = () => {
	return (
		<StyledVisualyzerWidget className='visualyser-container'>
			<div id='container'>
				<canvas id='canvas1'></canvas>
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
