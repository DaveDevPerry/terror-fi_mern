import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
// import { useGigsContext } from '../hooks/useGigsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
// import BandGigsList from '../components/BandGigsList';
// import { FaUsers } from 'react-icons/fa';
// import { log } from '../helper';
import { useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// import { GiCampingTent } from 'react-icons/gi';
// import { intlFormatDistance } from 'date-fns';
// import { usePlaylistsContext } from '../hooks/usePlaylistsContext';
import PlaylistsHeader from '../components/PlaylistsHeader';
import PlaylistSongs from '../components/PlaylistSongs';
import DeletePlaylistConfirmation from '../components/DeletePlaylistConfirmation';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { log } from '../helper';
// import { format } from 'date-fns';
// import BandSupportGigsList from '../components/BandSupportGigsList';
// import BandHeadlineGigsList from '../components/BandHeadlineGigsList';
// import TopBandWidget from '../components/TopBandWidget';

const Playlist = ({
	handleDeletePlaylistFormDisplay,
	deletePlaylistFormDisplay,
	setDeletePlaylistFormDisplay,
}) => {
	// const { user } = useAuthContext();
	// const { playlists } = usePlaylistsContext();
	// const { playlist, dispatch } = usePlaylistsContext();
	// const { gigCounterData, dispatch } = useGigsContext();
	// const { gig,gigCounterData, dispatch } = useGigsContext();
	const { dataLoaded, viewPlaylist } = useStateContext();
	// const { playlistToView, dataLoaded, setViewPlaylist, viewPlaylist } =
	// 	useStateContext();

	const navigate = useNavigate();
	useEffect(() => {
		log(dataLoaded, 'playlist page');
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	// useEffect(() => {
	// 	log(playlistToView, ' playlist id to view  in playlist');

	// 	const clonedPL = [...playlists];
	// 	const findPlaylist = clonedPL.filter((obj) => obj._id === playlistToView);
	// 	log(findPlaylist, 'find playlist');
	// 	setViewPlaylist(findPlaylist);
	// }, [playlistToView, user, setViewPlaylist]);
	// useEffect(() => {
	// 	log(playlistToView, ' playlist id to view  in playlist');

	// 	const fetchPlaylist = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/playlists/${playlistToView}`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);

	// 		const json = await response.json();

	// 		log(json, 'json - playlist');

	// 		if (response.ok) {

	// 			dispatch({
	// 				type: 'SET_PLAYLIST',
	// 				payload: json,
	// 			});
	// 			// dispatch({
	// 			// 	type: 'SET_PLAYLIST',
	// 			// 	payload: playlistData,
	// 			// });
	// 			// log(bandData, 'res ok band data');
	// 			// log(sortedByDate, 'res ok sorted band data');
	// 		}
	// 	};
	// 	if (user) {
	// 		fetchPlaylist();
	// 	}
	// }, [playlistToView, dispatch, user]);

	// log(bandAllGigsData, 'band all gigs data - band');

	const handleBackClick = () => {
		navigate('/playlists');
		// logout();
	};

	// const handleDelete = () => {
	// 	log(playlist._id, 'playlist id to delete');
	// };

	return (
		<StyledPlaylist
			className='playlist-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<Toaster />
			<PlaylistsHeader handleBackClick={handleBackClick} pageTitle='playlist' />

			{viewPlaylist[0] && viewPlaylist[0] && (
				<PlaylistSongs playlist={viewPlaylist[0]} />
			)}
			{/* {playlist && playlist && <PlaylistSongs playlist={playlist} />} */}

			{/* <div className='playlist-btns'>
				<button
					className='delete-playlist-btn'
					onClick={handleDeletePlaylistFormDisplay}
				>
					delete
				</button>
			</div> */}

			<ul className='playlist-options-list'>
				<li
					className='delete-playlist-wrapper'
					onClick={handleDeletePlaylistFormDisplay}
				>
					<RiDeleteBin6Line className='delete-playlist-btn' />
					<div className='playlist-info-wrapper'>
						<p>delete Playlist</p>
						<p></p>
					</div>
				</li>
			</ul>

			<DeletePlaylistConfirmation
				deletePlaylistFormDisplay={deletePlaylistFormDisplay}
				setDeletePlaylistFormDisplay={setDeletePlaylistFormDisplay}
				handleDeletePlaylistFormDisplay={handleDeletePlaylistFormDisplay}
			/>

			{/* {gigCounterData.gig && gigCounterData.gig[0].support_band !== '' && (
				<StyledGigSupportWidget>
					<p className='support-title'>support</p>
					<p className='support-band'>{gigCounterData.gig[0].support_band}</p>
				</StyledGigSupportWidget>
			)}
			{gigCounterData.gig && gigCounterData.gig[0].gig_details !== '' && (
				<StyledGigDetailsWidget>
					<p className='details-title'>details</p>
					<p className='details-band'>{gigCounterData.gig[0].gig_details}</p>
				</StyledGigDetailsWidget>
			)} */}
			{/* {gig && gig[0] && (
				<StyledGigHeaderWidget>
					<p className='header-time'>
						<strong>
							{intlFormatDistance(
								new Date(new Date(gig[0].gig_date).toDateString()),
								new Date(new Date(new Date().toDateString())),
								{
									numeric: 'auto',
								}
							)}
						</strong>
					</p>
					<p className='header-title'>
						<strong>{gig[0].headline_band}</strong>
					</p>
					{gig[0].isFestival && gig[0].isFestival === true && (
						<div className='gig-icons-wrapper'>
							<GiCampingTent className='gig-icon' />
						</div>
					)}
					<p className='header-location'>
						<span>
							<strong>{gig[0].venue}</strong>
						</span>
						<span>{gig[0].city}</span>
					</p>

					<p className='header-date'>
						{new Date(gig[0].gig_date).toLocaleDateString('en-us', {
							weekday: 'long',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}
					</p>
				</StyledGigHeaderWidget>
			)}
			{gig && gig[0].support_band !== '' && (
				<StyledGigSupportWidget>
					<p className='support-title'>support</p>
					<p className='support-band'>{gig[0].support_band}</p>
				</StyledGigSupportWidget>
			)}
			{gig && gig[0].gig_details !== '' && (
				<StyledGigDetailsWidget>
					<p className='details-title'>details</p>
					<p className='details-band'>{gig[0].gig_details}</p>
				</StyledGigDetailsWidget>
			)} */}
		</StyledPlaylist>
	);
};
const StyledPlaylist = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	flex: 1;
	max-width: 42rem;
	padding: 0 1rem;
	overflow: hidden;
	overflow-y: auto;
	transition: all 200ms linear;
	margin: 0 auto;
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.primaryColor};
	z-index: 500;
	::-webkit-scrollbar {
		/* height: 12px !important; */
		width: 5px;
		background: rgb(75, 74, 74);
		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}
	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
	.playlist-options-list {
		list-style: none;
		background-color: ${({ theme }) => theme.bgGrey};
		margin: 0 1rem;
		padding: 0.5rem;
		.delete-playlist-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			column-gap: 1rem;
			margin-top: 0rem;
			/* padding: 0.5rem; */
			.delete-playlist-btn {
				font-size: 3rem;
				color: ${({ theme }) => theme.primaryColor};
			}
			/* .playlist-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.white};
			} */
			.playlist-info-wrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				/* row-gap: 0.5rem; */
				p {
					color: ${({ theme }) => theme.white};
					font-size: 1.4rem;
					text-transform: capitalize;
					/* &:first-of-type {
					} */
					&:last-of-type {
						font-size: 1rem;
					}
				}
			}
		}
	}
	.band-gigs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
			span {
				text-transform: capitalize;
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
		}
	}
	.delete-playlist-btn {
		cursor: pointer;
	}
`;

export default Playlist;
