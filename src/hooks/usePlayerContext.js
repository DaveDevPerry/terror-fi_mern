import { PlayerContextTest } from '../context/PlayerContextTest';
import { useContext } from 'react';

export const usePlayerContext = () => {
	const context = useContext(PlayerContextTest);

	if (!context) {
		throw Error(
			'usePlayerContext must be used inside a player Context Provider'
		);
	}

	return context;
};
