// import React, { useContext } from 'react';
import styled from 'styled-components';
// import playerContext from '../../context/playerContext';
import { usePlayerContext } from '../hooks/usePlayerContext';
// import { HiEllipsisVertical } from 'react-icons/hi';
// import { HiOutlineEllipsisVertical } from 'react-icons/hi';
// import { FiHeart } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import { useStateContext } from '../lib/context';
import toast from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
// import { log } from '../../helper';

function FavouritesList({ handleOptions }) {
	const { songslist } = usePlayerContext();
	const { showOptions, setShowOptions } = useStateContext();
	// const { currentSong, songslist } = usePlayerContext();

	// create a toast
	const notify = () => {
		toast.success(`removed from favourites.`, {
			duration: 2000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledFavouritesList className='favourites-list no_drag'>
			<div className='header'>
				<h4 className='title-text'>All tracks</h4>
			</div>
			<ul className='all-favourite-tracks-list'>
				{songslist.map((song, i) => (
					<li key={i}>
						<div className='tmbn_song'>
							<img
								src={song.artworkUrl}
								alt='song artwork'
								className='song-artwork'
							/>
						</div>
						<div className='songmeta_favourites-list'>
							<span className='songname'>{song.title}</span>
							<span className='songauthors'>{song.artistName}</span>
						</div>
						<div className='favourites-list_btns_group'>
							<button
								className='options_song favourites-list_btn'
								onClick={(e) => {
									// handleOptions(e);
									handleOptions(e, song.title, i);
								}}
							>
								<FaEllipsisV
									className='fas fa-ellipsis-v fa-lg'
									// onClick={(e) => {
									// 	handleOptions(song._id);
									// }}
								/>
							</button>
							<AnimatePresence mode='wait'>
								{showOptions === i && (
									<motion.div
										className='list-options-modal'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<p
											onClick={() => {
												notify();
												setTimeout(() => {
													setShowOptions(false);
												}, 2000);
											}}
										>
											remove
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</li>
				))}
			</ul>
		</StyledFavouritesList>
	);
}
const StyledFavouritesList = styled.div`
	overflow-y: hidden;
	z-index: 1;

	margin: 0 1rem 2rem 1rem;

	&.no_drag {
		-webkit-app-region: no-drag;
	}
	&.favourites-list {
		display: flex;
		flex-direction: column;
	}
	.title-text {
		display: inline-block;
		padding: 2px 10px;
		background-color: ${({ theme }) => theme.primaryColor};
		border-radius: 0.5rem 0.5rem 0 0;
		color: ${({ theme }) => theme.white};
		font-weight: lighter;
		text-transform: capitalize;
	}
	.all-favourite-tracks-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		padding: 0;
		overflow-y: scroll;
		overflow: -moz-scrollbars-none;
		-ms-overflow-style: none;
		&::-webkit-scrollbar {
			width: 0 !important;
		}
		li {
			font-weight: 450;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0 0.5rem 0 0;
			background: ${({ theme }) => theme.bgGrey};
			/* pointer-events: none; */
			/* &:hover {
				background-color: #dfdfdf;
			}
			&.selected {
				background: ${({ theme }) => theme.bgCircle};
			} */
			&.songContainer {
				user-select: none;
			}
			.tmbn_song {
				height: 4.5rem;
				width: 4.5rem;
				position: relative;
				padding: 0.5rem 0;
				pointer-events: none;
				.song-artwork {
					height: 3.5rem;
					width: 3.5rem;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
			.songmeta_favourites-list {
				flex: 1;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				pointer-events: none;
				.songname {
					padding: 0 0.5rem;
					font-size: 1.6rem;
					color: ${({ theme }) => theme.white};
				}
				.songauthors {
					padding: 0 0.5rem;
					font-weight: normal;
					color: ${({ theme }) => theme.primaryColor};

					font-size: 1.2rem;
					text-transform: uppercase;
					font-weight: bolder;
				}
			}
			.favourites-list_btns_group {
				display: flex;
				flex-direction: row;
				column-gap: 1rem;
				justify-content: space-between;
				position: relative;
				height: 100%;
				.favourites-list_btn {
					color: ${({ theme }) => theme.primaryColor};
					/* margin-right: 5px; */
					cursor: pointer;
					font-size: 1.8rem;
					z-index: 10000;
					.fas.fa-ellipsis-v.fa-lg {
						pointer-events: none;
					}
				}
				.list-options-modal {
					position: absolute;
					right: 100%;
					top: 50%;
					transform: translateY(-50%);
					height: calc(100% - 1rem);
					background-color: ${({ theme }) => theme.primaryColor};
					color: ${({ theme }) => theme.white};
					width: max-content;
					border-radius: 0.5rem;
					padding: 0.5rem;
					display: grid;
					place-content: center;
					p {
						text-transform: uppercase;
						font-weight: bold;
						padding: 0 1rem;
					}
				}
			}
		}
	}
`;

export default FavouritesList;
