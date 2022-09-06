import React from 'react';
import styled from 'styled-components';
import DefaultAnimation from '../components/mediaAnimations/DefaultAnimation';
import Cassette from '../components/mediaAnimations/Cassette';
import CdPlayer from '../components/mediaAnimations/CdPlayer';
import Turntable from '../components/mediaAnimations/Turntable';
import { useStateContext } from '../lib/context';

const AnimationsContainer = () => {
	const {
		mediaToDisplay,
		// audioSrc,
		// nextSong,
		// getSongDuration,
		// getCurrentTime,
		// updateProgressBar,
	} = useStateContext();
	return (
		<StyledAnimationsContainer className='all-media-container'>
			{mediaToDisplay === 'display-default' && <DefaultAnimation />}
			{mediaToDisplay === 'display-record' && <Turntable />}
			{mediaToDisplay === 'display-cd' && <CdPlayer />}
			{mediaToDisplay === 'display-cassette' && <Cassette />}
		</StyledAnimationsContainer>
	);
};
const StyledAnimationsContainer = styled.div`
	/* font-size: 50%; */
	/* border: 2px solid green; */
	/* flex: 1; */
	height: 24rem;
`;

export default AnimationsContainer;
