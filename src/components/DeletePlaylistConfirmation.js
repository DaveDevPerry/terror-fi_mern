import React from 'react';
import styled from 'styled-components';
// import { CgCloseR } from 'react-icons/cg';
import { log } from '../helper';
import { useAuthContext } from '../hooks/useAuthContext';
import toast from 'react-hot-toast';
import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';

const DeletePlaylistConfirmation = ({
	handleDeletePlaylistFormDisplay,
	// handleCreatePlaylist,
	// playlistFormDisplay,
	// setPlaylistFormDisplay,
	// playlistToView,
	deletePlaylistFormDisplay,
	setDeletePlaylistFormDisplay,
}) => {
	const navigate = useNavigate();
	const { user } = useAuthContext();
	const { dispatch } = usePlaylistsContext();

	const { playlistToView } = useStateContext();

	// const [playlistName, setPlaylistName] = useState('');

	// const [error, setError] = useState(null);
	// const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			// setError('You must be logged in');
			log('You must be logged in');
			return;
		}

		// const playlist = {
		// 	name: playlistName,
		// 	songs: [],
		// };
		// log(playlist, 'playlist post submit');

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/playlists/${playlistToView}`,
			// `${process.env.REACT_APP_BACKEND_URL}/api/playlists/${playlistToView}`,
			{
				// const response = await fetch('/api/weights', {
				method: 'DELETE',
				// body: JSON.stringify(playlist),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		log(json, 'json in playlist form post submit');

		if (!response.ok) {
			log(json.error, 'json error');
			// setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			// setNewWeight('');
			// setVenue('');
			// setCity('');
			// setPlaylistName('');
			// setSupport_band('');
			// setGig_date('');
			// setGig_details('');
			// setIsFestival(false);
			// setGig_details('');
			// setReps('');
			// setError(null);
			// setEmptyFields([]);
			log('playlist deleted?', json);
			dispatch({ type: 'DELETE_PLAYLIST', payload: json });
		}
		// setIsFormActive(!isFormActive);
		notify();
		setDeletePlaylistFormDisplay(false);

		setTimeout(() => {
			navigate('/playlists');
		}, 2000);
	};

	// create a toast
	const notify = () => {
		toast.success(`playlist successfully deleted.`, {
			duration: 2000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};
	return (
		<AnimatePresence mode='wait'>
			{deletePlaylistFormDisplay === true && (
				<StyledDeletePlaylistConfirmation
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<p className='playlist-header'>
						Delete playlist?
						{/* <CgCloseR
							className='close-icon'
							onClick={handleDeletePlaylistFormDisplay}
						/> */}
					</p>
					<p className='playlist-warning'>this can not be undone</p>
					<form onSubmit={handleSubmit}>
						<div id='form-btns'>
							<p
								className='form-action-cancel-btn'
								onClick={handleDeletePlaylistFormDisplay}
							>
								cancel
							</p>
							<button className='form-action-btn'>delete</button>
						</div>
					</form>
				</StyledDeletePlaylistConfirmation>
			)}
		</AnimatePresence>
	);
};
const StyledDeletePlaylistConfirmation = styled(motion.div)`
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
	border-radius: 0.5rem;
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
	.playlist-warning {
		text-align: center;
		font-size: 1.4rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.txtDarkGrey};
		font-style: italic;
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
			justify-content: space-evenly;
			align-items: center;
			column-gap: 2rem;
			.form-action-cancel-btn {
				background-color: ${({ theme }) => theme.primaryColor};
				color: ${({ theme }) => theme.white};
				text-transform: uppercase;
				/* font-style: italic; */
				font-size: 1.8rem;
				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
				width: 9rem;
				/* &:first-of-type {
					color: ${({ theme }) => theme.primaryColor};
				} */
			}
			button {
				background-color: ${({ theme }) => theme.green};
				color: ${({ theme }) => theme.white};
				text-transform: uppercase;
				/* font-style: italic; */
				font-size: 1.8rem;
				outline: none;
				border: none;

				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
				width: 9rem;
			}
		}
	}
`;

export default DeletePlaylistConfirmation;
