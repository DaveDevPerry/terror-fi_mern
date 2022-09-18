import { PlayerContext } from '../context/PlayerContext';
import { useContext } from 'react';

export const usePlayerContext = () => {
	const context = useContext(PlayerContext);

	if (!context) {
		throw Error(
			'usePlayerContext must be used inside a player Context Provider'
		);
	}

	return context;
};
