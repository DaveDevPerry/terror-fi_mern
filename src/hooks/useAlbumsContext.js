import { AlbumsContext } from '../context/AlbumContext';
import { useContext } from 'react';

export const useAlbumsContext = () => {
	const context = useContext(AlbumsContext);

	if (!context) {
		throw Error(
			'useAlbumsContext must be used inside a albums Context Provider'
		);
	}

	return context;
};
