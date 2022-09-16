import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { CgToggleSquareOff, CgToggleSquare } from 'react-icons/cg';

const Toggle = ({ toggleTheme, theme }) => {
	return (
		<StyledToggle
			id='toggle-switch'
			onClick={toggleTheme}
			className='toggle-icon'
		>
			<p>Dark mode:</p>
			{theme === 'light' ? (
				<CgToggleSquare className='mode-toggle-icons' />
			) : (
				<CgToggleSquareOff className='mode-toggle-icons active' />
			)}
		</StyledToggle>
	);
};
const StyledToggle = styled.div`
	/* border: 1px solid; */
	/* padding: 0rem 0.5rem; */
	display: flex;
	justify-content: flex-start;
	align-items: center;
	column-gap: 1rem;
	color: ${({ theme }) => theme.txtGrey};
	p {
		width: 8.5rem;
		text-align: right;
	}
	.mode-toggle-icons {
		cursor: pointer;
		font-size: 3rem;
		color: ${({ theme }) => theme.modeIcon};
		&.active {
			color: ${({ theme }) => theme.white};
		}
	}
`;
Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};
export default Toggle;
