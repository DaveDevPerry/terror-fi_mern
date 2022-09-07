import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSongsContext } from '../hooks/useSongsContext';
import { log } from '../helper';
import { useAlbumsContext } from '../hooks/useAlbumsContext';
// import { motion } from 'framer-motion';

const Loader = ({ theme }) => {
	const { user } = useAuthContext();
	const { songs, dispatch } = useSongsContext();
	const { albums, dispatch: albumDispatch } = useAlbumsContext();
	// const {  dispatch } = useSongsContext();
	const { setDataLoaded } = useStateContext();

	const navigate = useNavigate();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setDataLoaded(true);
	// 		navigate('/library');
	// 	}, 2000);
	// });

	useEffect(() => {
		const fetchSongs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			log(json, 'json');

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_SONGS',
					payload: json,
				});
			}
		};
		if (user) {
			fetchSongs();
		}
		setTimeout(() => {
			setDataLoaded(true);
			// setFadeOutLoader(true);
			// setCrowdOutLoader(true);
			// navigate('/home');

			setTimeout(() => {
				log(songs, 'songs');
				log(albums, 'albums');
				navigate('/library');
			}, 1000);
		}, 2000);
	}, [dispatch, user]);

	useEffect(() => {
		const fetchAlbums = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/albums`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			log(json, 'albums json');
			json.reverse();

			if (response.ok) {
				// setWorkouts(json);
				albumDispatch({
					type: 'SET_ALBUMS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchAlbums();
		}
	}, [albumDispatch, user]);

	// useEffect(() => {
	// 	const fetchFavourites = async () => {
	// 		log(user.favourites, 'favs');
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		log(json, 'songs json');
	// 		const cloned = [...json];
	// 		const filter = cloned.filter((obj) => user.favourites.includes(obj._id));
	// 		log(filter, 'filtered list');
	// 		// json.reverse();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_FAVOURITE_SONGS',
	// 				payload: filter,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if ((dispatch, user)) {
	// 		fetchFavourites();
	// 	}
	// }, [dispatch, user]);

	return (
		<StyledLoader
			className='tv-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='tv-wrapper'>
				<div id='tv-signal'></div>
				<img
					src={
						theme === 'light'
							? '/assets/tv-telly_white.webp'
							: '/assets/tv-telly_screen.webp'
					}
					alt='telly'
					id='terror-tv'
				/>
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
