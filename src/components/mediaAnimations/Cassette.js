import { motion } from 'framer-motion';
// import React, { useContext } from 'react';
import styled from 'styled-components';
// import playerContext from '../../context/playerContext';
import { usePlayerContext } from '../../hooks/usePlayerContext';
// import { useStateContext } from '../../lib/context';

const Cassette = () => {
	// const { currentSongTitle } = useStateContext();
	const { currentSong, playing, songslist } = usePlayerContext();
	return (
		<StyledCassette
			className='media-container media-cassette display-cassette'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div id='cassette'>
				<div className='tc-top'>
					<div className='tc-header'>C90</div>
					<div className='tc-label'>
						<div className='tape-title'>{songslist[currentSong].title}</div>
						{/* <div className='tape-title'>{currentSongTitle}</div> */}
					</div>
				</div>

				<div className='tc-reels'>
					<div className='reel' id='left-reel'>
						<div className={playing === true ? 'tape play-animation' : 'tape'}>
							{/* <div className='tape'> */}
							<div className='spindle' id='left-spindle'></div>
						</div>
					</div>
					<div className='reel' id='right-reel'>
						<div className={playing === true ? 'tape play-animation' : 'tape'}>
							<div className='spindle' id='right-spindle'></div>
						</div>
					</div>
				</div>

				<div className='tc-bottom'>
					<div className='tc-footer'>A</div>
					<div className='tc-base'></div>
				</div>
			</div>
		</StyledCassette>
	);
};
const StyledCassette = styled(motion.div)`
	// background-color: yellow;
	height: 100%;
	display: grid;
	place-content: center;
	#cassette {
		// width: 100vw;
		width: 34rem;
		height: 22rem;
		border-radius: 1rem;
		// position: relative;
		box-shadow: -4px -4px 4px rgba(171, 171, 171, 0.25),
			4px 4px 4px rgba(0, 0, 0, 0.55);
		/* @include flex(center, center, column); */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		// padding: 0 1rem;
		// position: relative;
		// #tape-label {
		// 	position: absolute;
		// 	z-index: 5000;
		// 	top: 2rem;
		// 	left: 2rem;
		// 	opacity: 0.3;
		// }
		z-index: 5;
		.tc-top {
			height: 5.4rem;
			// background-color: lemonchiffon;
			background-color: ${({ theme }) => theme.bgGrey};
			border-radius: 1rem 1rem 0 0;
			width: 100%;
			padding: 0.5rem 2rem;
			z-index: 5;
			.tc-header {
				// background-color: lightskyblue;
				color: ${({ theme }) => theme.tapeGrey};
				text-align: right;
				font-size: 1.2rem;
				margin-bottom: 0.2rem;
				font-weight: 800;
				z-index: 5;
			}
			.tc-label {
				background-color: ${({ theme }) => theme.bgLightGrey};
				width: 100%;
				border-radius: 0.5rem;
				z-index: 5;

				.tape-title {
					font-family: 'Rock Salt', cursive;
					text-align: center;
					color: ${({ theme }) => theme.primaryColor};
					font-size: 1.4rem;
					font-style: italic;
					line-height: 2.2rem;
					z-index: 5;
				}
			}
		}
		.tc-reels {
			height: 13.2rem;
			width: 100%;
			// background-color: lightcoral;
			overflow: hidden;
			position: relative;
			// border-radius: 0.4rem;
			border-left: 2rem solid ${({ theme }) => theme.bgGrey};
			border-right: 2rem solid ${({ theme }) => theme.bgGrey};
			.reel {
				.tape {
					height: 100%;
					width: 100%;
					background-color: rgb(29, 19, 1);
					border-radius: 50%;
					display: grid;
					place-content: center;
					animation: playTape 5s linear infinite;
					animation-play-state: paused;
					&.play-animation {
						animation-play-state: running;
					}
					.spindle {
						height: 6rem;
						width: 6rem;
						border-radius: 50%;
						background-color: $white;
						// text-align: center;
					}
					#left-spindle {
						background-image: url('./assets/reel.webp');
						background-position: center;
						background-repeat: no-repeat;
						background-origin: center;
						background-size: 6rem;
					}
					#right-spindle {
						background-image: url('./assets/reel-r.webp');
						background-position: center;
						background-repeat: no-repeat;
						background-origin: center;
						background-size: 6rem;
					}
				}
				// &:nth-child(1) {
				// 	animation-delay: 2s;
				// }
			}
			#left-reel {
				position: absolute;
				height: 16rem;
				width: 16rem;
				top: 50%;
				left: -1.5rem;
				transform: translate(0, -50%);
				// background-color: lightskyblue;
			}
			#right-reel {
				position: absolute;
				height: 16rem;
				width: 16rem;
				top: 50%;
				right: -1.5rem;
				transform: translate(0, -50%);
				// background-color: rgb(172, 190, 9);
				// animation: playTape 5s linear infinite;
			}
		}
		.tc-bottom {
			height: 5.4rem;
			// background-color: lightgreen;
			background-color: ${({ theme }) => theme.bgGrey};
			position: relative;
			width: 100%;
			border-radius: 0 0 1rem 1rem;
			// padding: 0.5rem 1rem;
			.tc-footer {
				// background-color: blue;
				position: absolute;
				top: 50%;
				// width: 100%;
				right: 1rem;
				font-size: 1.8rem;
				font-weight: 800;
				text-transform: uppercase;
				transform: translate(0, -50%);
				text-align: center;
				padding: 0.1rem 0.4rem;
				color: ${({ theme }) => theme.tapeGrey};
				border: 1.5px solid ${({ theme }) => theme.tapeGrey};
			}
			.tc-base {
				position: absolute;
				// background-color: blue;
				width: 80%;
				height: 4.4rem;
				left: 50%;
				bottom: -0.5rem;
				transform: translate(-50%, 0);
				border-bottom: 4.4rem solid ${({ theme }) => theme.tapeGrey};
				border-left: 1.5rem solid transparent;
				border-right: 1.5rem solid transparent;
				border-radius: 0.5rem;
				&::before {
					content: '';
					position: absolute;
					top: 2rem;
					left: 4rem;
					height: 1.4rem;
					width: 1.4rem;
					border-radius: 50%;
					background-color: rgb(34, 33, 33);
				}
				&::after {
					content: '';
					position: absolute;
					top: 2rem;
					right: 4rem;
					height: 1.4rem;
					width: 1.4rem;
					border-radius: 50%;
					background-color: rgb(34, 33, 33);
				}
			}
		}
	}

	@keyframes playTape {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Cassette;
