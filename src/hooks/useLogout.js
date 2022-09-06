// import { useStateContext } from '../lib/context';
import { useAuthContext } from './useAuthContext';
// import { usePlayerContext } from './usePlayerContext';
import { useSongsContext } from './useSongsContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: songsDispatch } = useSongsContext();
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
		// playerDispatch({})
	};

	return { logout };
};
