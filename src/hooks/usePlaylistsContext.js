import { PlaylistsContext } from '../context/PlaylistContext';
import { useContext } from 'react';

export const usePlaylistsContext = () => {
	const context = useContext(PlaylistsContext);

	if (!context) {
		throw Error(
			'usePlaylistsContext must be used inside a playlists Context Provider'
		);
	}

	return context;
};
