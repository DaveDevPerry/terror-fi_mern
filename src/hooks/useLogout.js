// import { useStateContext } from '../lib/context';
import { useAuthContext } from './useAuthContext';
// import { useBandsContext } from './useBandsContext';
// import { useCitiesContext } from './useCitiesContext';
// import { useGroupsContext } from './useGroupsContext';
// import { useTargetsContext } from './useTargetsContext';
import { useSongsContext } from './useSongsContext';
// import { useVenuesContext } from './useVenuesContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: songsDispatch } = useSongsContext();
	// const { dispatch: bandsDispatch } = useBandsContext();
	// const { dispatch: citiesDispatch } = useCitiesContext();
	// const { dispatch: venuesDispatch } = useVenuesContext();
	// const { dispatch: targetsDispatch } = useTargetsContext();
	// // const { dispatch: groupsDispatch } = useGroupsContext();
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
	};

	return { logout };
};
