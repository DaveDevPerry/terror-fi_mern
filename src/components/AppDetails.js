import React, { useEffect } from 'react';
import styled from 'styled-components';

const AppDetails = ({ theme }) => {
	useEffect(() => {}, [theme]);
	return (
		<StyledAppDetails>
			<div
				className={theme && theme === 'light' ? 'label-img' : 'label-img dark'}
			></div>
			<div className='dev-link-container'>
				<p>developed by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
				<a
					href='https://www.daveperry.tech'
					className='developer-link'
					rel='noopener noreferrer'
					target='_blank'
				>
					<Brand id='brand'>
						dave<span>perry</span>
						<span>.</span>tech
					</Brand>
				</a>
			</div>
			<div className='studio-img'></div>
			<StyledLogoAnimation>
				<svg id='dp-logo-svg' viewBox='0 0 520 520' fill='#c40303'>
					<path
						id='dp-logo-svg-path'
						d='M209.376 104V399.328C156.208 416 51.7771 423.145 59.3951 318.351C61.7758 271.511 87.0107 186.882 168.905 223.084C250.799 259.285 317.298 288.977 340.311 299.298C383.162 313.588 467.437 315.493 461.724 208.794C464.104 165.13 435.536 86.8519 302.221 123.053V416'
						stroke='#c40303'
						strokeWidth='80'
					/>
				</svg>
			</StyledLogoAnimation>
		</StyledAppDetails>
	);
};
const StyledAppDetails = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2rem;
	justify-content: space-between;
	padding: 2rem 1rem;
	padding-bottom: 3rem;
	/* background: ${({ theme }) => theme.white}; */
	/* background: ${({ theme }) => theme.bgCircle}; */
	background-color: ${({ theme }) => theme.bgGrey};
	border: 0.2rem solid ${({ theme }) => theme.primaryColor};
	border-radius: 1rem; /* border-radius: 4px; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	transition: all 200ms linear;
	.dev-link-container {
		display: flex;
		flex-direction: column;
	}
	p {
		align-self: center;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtGrey};
	}
	a.developer-link {
		text-decoration: none;
		align-self: center;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtDarkGrey};
	}
	.label-img {
		background-image: url('KTMA_logo.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		transition: all 200ms linear;
	}
	.label-img.dark {
		background-image: url('KTMA_logo1.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		transition: all 200ms linear;
	}
	.studio-img {
		background-image: url('Rox_logo.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		transition: all 200ms linear;
	}
`;

const Brand = styled.div`
	font-family: 'Oswald', serif;
	font-size: 2.8rem;
	font-weight: lighter;
	text-align: center;
	line-height: 1;
	color: ${({ theme }) => theme.txtGrey};
	span {
		font-weight: bolder;
		/* color: ${({ theme }) => theme.txtGrey}; */
	}
	span:last-child {
		color: ${({ theme }) => theme.red};
		font-size: 5rem;
		line-height: 0;
		font-weight: bolder;
	}
`;
const StyledLogoAnimation = styled.div`
	display: none;
	#dp-logo-svg-path {
		stroke-dasharray: 1569;
		stroke-dashoffset: 1569;
	}
`;

export default AppDetails;
