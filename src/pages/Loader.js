import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
// import { motion } from 'framer-motion';

const Loader = () => {
	const { setDataLoaded } = useStateContext();

	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			setDataLoaded(true);
			navigate('/library');
		}, 2000);
	});
	return (
		<StyledLoader
			className='tv-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='tv-wrapper'>
				<div id='tv-signal'></div>
				<img src='/assets/tv-telly_screen.webp' alt='telly' id='terror-tv' />
			</div>
		</StyledLoader>
	);
};
const StyledLoader = styled(motion.section)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.black};
	/* @include flex(center, center, column); */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 500;
	.glitch {
		font-size: 4rem;
		font-weight: 700;
		text-transform: uppercase;
		color: ${({ theme }) => theme.white};
		letter-spacing: 0.5rem;
		font-family: 'BadSignal';
		text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
			-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
			0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		animation: glitch1 2500ms infinite;
		#glitch-hyphen {
			font-family: 'Roboto';
		}
	}
	.tv-wrapper {
		// border: 1px solid green;
		position: relative;
		width: 200px;
		height: 239px;
		img#tv-signal {
			position: absolute;
			top: 120px;
			left: 28px;
			width: 11rem;
			height: 50px;
		}
		img#terror-tv {
			position: absolute;
			top: 0;
			left: 0;
			width: 200px;
			z-index: 100000;
		}
	}

	@keyframes glitch {
		0% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		14% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		15% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		49% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		50% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		99% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		100% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
	}
	@keyframes glitch1 {
		0% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}

		15% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em 0.05em 0 rgba(0, 0, 255, 0.75);
		}

		50% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
				0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}

		100% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
	}

	.tv-wrapper {
		// border: 1px solid green;
		position: relative;
		width: 200px;
		height: 239px;
		#tv-signal {
			position: absolute;
			top: 120px;
			left: 28px;
			width: 11rem;
			height: 50px;
			background: url('/assets/tv-signal.webp');
			background-repeat: repeat;
			background-position: 0 0;
			background-size: auto 100%;
			/*adjust s value for speed*/
			animation: tvSignal 500s linear infinite;
		}
		img#terror-tv {
			position: absolute;
			top: 0;
			left: 0;
			width: 200px;
			z-index: 100000;
		}
	}

	@keyframes tvSignal {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -10000px 0;
		}
	}
`;

export default Loader;
