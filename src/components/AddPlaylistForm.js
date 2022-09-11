import React, { useState } from 'react';
import styled from 'styled-components';
import { CgCloseR } from 'react-icons/cg';
import { log } from '../helper';
import { useAuthContext } from '../hooks/useAuthContext';
import toast from 'react-hot-toast';
import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
import { AnimatePresence, motion } from 'framer-motion';

const AddPlaylistForm = ({
	handlePlaylistFormDisplay,
	handleCreatePlaylist,
	playlistFormDisplay,
	setPlaylistFormDisplay,
}) => {
	const { user } = useAuthContext();
	const { dispatch } = usePlaylistsContext();

	const [playlistName, setPlaylistName] = useState('');

	// const [error, setError] = useState(null);
	// const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			// setError('You must be logged in');
			log('You must be logged in');
			return;
		}

		const playlist = {
			name: playlistName,
			songs: [],
		};
		log(playlist, 'playlist post submit');

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/playlists`,
			{
				// const response = await fetch('/api/weights', {
				method: 'POST',
				body: JSON.stringify(playlist),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		log(json, 'json in playlist form post submit');

		if (!response.ok) {
			log(json.error);
			// setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			// setNewWeight('');
			// setVenue('');
			// setCity('');
			setPlaylistName('');
			// setSupport_band('');
			// setGig_date('');
			// setGig_details('');
			// setIsFestival(false);
			// setGig_details('');
			// setReps('');
			// setError(null);
			// setEmptyFields([]);
			log('new playlist added', json);
			dispatch({ type: 'CREATE_PLAYLIST', payload: json });
		}
		// setIsFormActive(!isFormActive);
		notify();
		setPlaylistFormDisplay(false);
		// navigate('/home');
	};

	// create a toast
	const notify = () => {
		toast.success(`${playlistName} playlist successfully created.`, {
			duration: 2000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};
	return (
		<AnimatePresence mode='wait'>
			{playlistFormDisplay === true && (
				<StyledAddPlaylistForm
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<p className='playlist-header'>
						Add to playlist
						<CgCloseR
							className='close-icon'
							onClick={handlePlaylistFormDisplay}
						/>
					</p>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							onChange={(event) => {
								// setSearch(event.target.value);
								setPlaylistName(event.target.value);
							}}
							autoComplete='off'
							id='playlist-name'
							required
							autoFocus
						/>
						<div id='form-btns'>
							<p
								className='form-action-cancel-btn'
								onClick={handlePlaylistFormDisplay}
							>
								cancel
							</p>
							<button className='form-action-btn'>create</button>
						</div>
					</form>
				</StyledAddPlaylistForm>
			)}
		</AnimatePresence>
	);
};
const StyledAddPlaylistForm = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 2rem;
	background-color: ${({ theme }) => theme.bgGrey};
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	/* max-width: 42rem; */
	max-width: 38rem;
	width: calc(100% - 4rem);
	/* flex: 1; */
	z-index: 7000;
	.playlist-header {
		text-align: center;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.white};
			cursor: pointer;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		#playlist-name {
			background-color: transparent;
			padding: 0.5rem;
			font-family: 'Roboto';
			font-size: 1.6rem;
			color: ${({ theme }) => theme.white};
			border: none;
			outline: none;
			border-bottom: 2px solid ${({ theme }) => theme.green};
			/* &:focus {
				border: none;
				border-bottom: 2px solid ${({ theme }) => theme.green};
			} */
		}
		#form-btns {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			column-gap: 2rem;
			.form-action-cancel-btn {
				color: ${({ theme }) => theme.primaryColor};
				/* color: ${({ theme }) => theme.green}; */
				text-transform: uppercase;
				font-style: italic;
				font-size: 1.4rem;
				/* &:first-of-type {
					color: ${({ theme }) => theme.primaryColor};
				} */
			}
			button {
				color: ${({ theme }) => theme.green};
				text-transform: uppercase;
				font-style: italic;
				font-size: 1.4rem;
			}
		}
	}
`;

export default AddPlaylistForm;
