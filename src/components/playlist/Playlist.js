import React, { useContext } from 'react';
import styled from 'styled-components';
import playerContext from '../../context/playerContext';

function Playlist() {
	const { SetCurrent, currentSong, songslist } = useContext(playerContext);

	return (
		<StyledPlaylist className='playlist no_drag'>
			{/* <div className="header">
        <h4 className="pltext">Songs by artist</h4>
      </div> */}
			<ul className='loi'>
				{songslist.map((song, i) => (
					<li
						className={'songContainer ' + (currentSong === i ? 'selected' : '')}
						key={i}
						onClick={() => {
							SetCurrent(i);
						}}
					>
						<div className='tmbn_song'>
							<img
								src={song.artworkUrl}
								alt='song artwork'
								className='song-artwork'
							/>
							<i className='fas fa-play test-play-btn'></i>
						</div>
						<div className='songmeta_playlist'>
							<span className='songname'>{song.title}</span>
							<span className='songauthors'>{song.artistName}</span>
						</div>
						<div className='playlist_btns_group'>
							<button className='fav_song playlist_btn'>
								<i className='far fa-heart fa-lg'></i>
							</button>
							<button className='options_song playlist_btn'>
								<i className='fas fa-ellipsis-v fa-lg'></i>
							</button>
						</div>
					</li>
				))}
			</ul>
			{/* <ul className='loi'>
				{songslist.map((song, i) => (
					<li
						className={'songContainer ' + (currentSong === i ? 'selected' : '')}
						key={i}
						onClick={() => {
							SetCurrent(i);
						}}
					>
						<div className='tmbn_song'>
							<i className='fas fa-play'></i>
						</div>
						<div className='songmeta_playlist'>
							<span className='songname'>{song.title}</span>
							<span className='songauthors'>{song.artistName}</span>
						</div>
						<div className='playlist_btns_group'>
							<button className='fav_song playlist_btn'>
								<i className='far fa-heart fa-lg'></i>
							</button>
							<button className='options_song playlist_btn'>
								<i className='fas fa-ellipsis-v fa-lg'></i>
							</button>
						</div>
					</li>
				))}
			</ul> */}
		</StyledPlaylist>
	);
}
const StyledPlaylist = styled.div`
	flex: 1;
	overflow-y: scroll;
	z-index: 1;
	&.no_drag {
		-webkit-app-region: no-drag;
	}
	&.playlist {
		background: ${({ theme }) => theme.bgLightGrey};
		/* background: #e3e3e3; */
		flex: 1 1;
		display: flex;
		flex-direction: column;
		/* margin-bottom: 2rem; */
	}
	.pltext {
		padding: 5px;
	}
	.loi {
		list-style: none;
		display: flex;
		flex-direction: column;
		flex: 1 1;
		padding: 0;
		li {
			margin: 2px;
			font-weight: 450;
			display: flex;
			flex-direction: row;
			align-items: center;
			&:hover {
				background-color: #dfdfdf;
			}
			&.selected {
				background: white;
			}
			&.songContainer {
				cursor: pointer;
				user-select: none;
			}
			.tmbn_song {
				height: 4.5rem;
				width: 4.5rem;
				position: relative;
				.song-artwork {
					height: 4.5rem;
					width: 4.5rem;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					.test-play-btn {
						height: 4.5rem;
						width: 4.5rem;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: 5;
					}
				}
			}
			.songmeta_playlist {
				flex: 1;
				display: flex;
				flex-direction: column;
				flex-wrap: wrap;
				.songname {
					padding: 0 1rem;
					font-weight: 600;
					font-size: 1.6rem;
				}
				.songauthors {
					padding: 0 1rem;
					font-weight: normal;
					color: ${({ theme }) => theme.tapeGrey};
					/* color: #555; */
					font-size: 1.2rem;
				}
			}
		}
	}
	.fav_song {
		color: ${({ theme }) => theme.primaryColor};
		margin-right: 5px;
	}
`;

export default Playlist;
