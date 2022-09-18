import { FavouritesContext } from '../context/FavouritesContext';
import { useContext } from 'react';

export const useFavouritesContext = () => {
	const context = useContext(FavouritesContext);

	if (!context) {
		throw Error(
			'useFavouritesContext must be used inside a favourites Context Provider'
		);
	}

	return context;
};
