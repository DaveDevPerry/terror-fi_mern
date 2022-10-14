// import { useStateContext } from '../lib/context';
import { useAlbumsContext } from './useAlbumsContext';
import { useAuthContext } from './useAuthContext';
// import { useFavouritesContext } from './useFavouritesContext';
import { usePlaylistsContext } from './usePlaylistsContext';
// import { usePlayerContext } from './usePlayerContext';
import { useSongsContext } from './useSongsContext';
import { useUsersContext } from './useUserContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: songsDispatch } = useSongsContext();
	const { dispatch: playlistsDispatch } = usePlaylistsContext();
	const { dispatch: userDispatch } = useUsersContext();
	// const { dispatch: favouritesDispatch } = useFavouritesContext();
	const { dispatch: albumDispatch } = useAlbumsContext();
	// const {dispatch: playerDispatch} = usePlayerContext()

	// const {
	// 	setTotalGigsPerBand,
	// 	setTotalSupportGigsPerBand,
	// 	setCombinedGigsPerBand,
	// 	setTotalGigsPerCity,
	// 	setTotalGigsPerVenue,
	// 	setGigToView,
	// 	setBandToView,
	// 	setTotalCityGigs,
	// 	setTotalGigsEachYear,
	// 	setTotalFestivalCount,
	// 	setTotalBandCount,
	// 	setGigDateToView,
	// } = useStateContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user-terror-fi');

		// dispatch a logout action - no payload needed
		dispatch({ type: 'LOGOUT' });
		// clears global workout state so we don't see flash of last user workouts
		songsDispatch(
			{ type: 'SET_SONGS', payload: null },
			{ type: 'SET_SONG', payload: null }
		);
		playlistsDispatch(
			{ type: 'SET_PLAYLISTS', payload: null },
			{ type: 'SET_PLAYLIST', payload: null }
		);
		userDispatch({ type: 'SET_USER', payload: null });
		// favouritesDispatch({ type: 'SET_FAVOURITES', payload: null });
		albumDispatch({ type: 'SET_ALBUMS', payload: null });
		// playerDispatch({})
	};

	return { logout };
};
