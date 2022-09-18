import { PlayerContextTest } from '../context/PlayerContextTest';
import { useContext } from 'react';

export const usePlayerContext = () => {
	const context = useContext(PlayerContextTest);

	if (!context) {
		throw Error(
			'usePlayerContextTest must be used inside a player Context Provider'
		);
	}

	return context;
};
