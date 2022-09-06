import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ${
		'' /* :root{
    --letter-count: 9;
  } */
	}
  @font-face {
	font-family: 'BadSignal';
	src: url('/fonts/BadSignal.otf');
	font-display: swap;
  
}
${
	'' /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap'); */
}
  html {
    font-size: 62.5%;
    -webkit-touch-callout: none;
	  -webkit-user-select: none;
	  -khtml-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
    font-family: 'Roboto', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.black};
	font-size: 1.6rem;
	font-weight: 400;
  }
  .App {
    width: 100vw;
	height: 100vh;
	width: clamp(32rem, 100vw, 100vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;


	background-color: rgb(83, 83, 83);
	margin: auto;
	overflow: hidden;
  position: relative;
  }
  ${
		'' /* .container {
    width: 100vw;
	height: 100vh;
	width: clamp(32rem, 100vw, 100vw);
	background-color: rgb(83, 83, 83);
	margin: auto;
	overflow: hidden;
	position: relative;
  } */
	}
  .App .background{
    position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
    background-image: url("/assets/tv_bg-sm-min.webp");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom center;
		opacity: 0.2;
		mix-blend-mode: luminosity;
  }
  header a {
  color: ${({ theme }) => theme.txtDarkGrey};
  text-decoration: none;
}
${
	'' /* label, input {
  display: block;
  color: ${({ theme }) => theme.txtGrey};
}
input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.borderGrey};
  border-radius: 4px;
  box-sizing: border-box;
}
input:focus {
  outline: none;
  border: none;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  box-sizing: border-box;
}
form button {
  background: ${({ theme }) => theme.primaryColor};
  border: 0;
  color: #fff;
  padding: 1rem;
  font-family: "Poppins";
  border-radius: 4px;
  cursor: pointer;
} */
}
div.error {
  padding: 1rem;
  background: ${({ theme }) => theme.bgError};
  border: 1px solid ${({ theme }) => theme.error};
  color: ${({ theme }) => theme.error};
  border-radius: 4px;
}
input.error {
  border: 1px solid ${({ theme }) => theme.error};
}
  .mono-font{
  font-family: 'Roboto Mono', monospace;
}
label .field-required{
  color: ${({ theme }) => theme.error};
  font-size: 1.8rem;
}

	  ${
			'' /* #sign-out-btn{
  color: ${({ theme }) => theme.white};
}  */
		}






// old

  button {
  background: none;
  border: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
  .container {
    width: 100vw;
	height: 100vh;
	width: clamp(32rem, 100vw, 100vw);
	background-color: rgb(83, 83, 83);
	margin: auto;
	overflow: hidden;
	position: relative;
  }
  .container .background{
    position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
    background-image: url("/assets/tv_bg-sm-min.webp");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: bottom center;
		opacity: 0.2;
		mix-blend-mode: luminosity;
  }

.container .section {
		position: absolute;
		height: 100%;
		width: 100%;
		width: clamp(32rem, 100%, 800px);
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		h1 {
			color: ${({ theme }) => theme.primaryColor};
		}
	}


  h1 {
	font-size: 4rem;
	font-family: 'BadSignal';
	letter-spacing: 0.3rem;
}
h2 {
	color: ${({ theme }) => theme.white};
	text-transform: capitalize;
	font-size: 2rem;
	font-weight: 400;
}
h3 {
	text-transform: uppercase;
	color:  ${({ theme }) => theme.primaryColor};
	font-size: 1.4rem;
	font-weight: 800;
}
h5 {
	color:  ${({ theme }) => theme.txtGrey};
	font-size: 1.6rem;
}
 
.circle-wrapper {
	cursor: pointer;
	background: ${({ theme }) => theme.bgCircle};
	border-radius: 50%;
	box-shadow: -0.4rem -0.4rem 0.4rem rgba(171, 171, 171, 0.25),
		0.4rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
}
.fas {
	color: ${({ theme }) => theme.txtGrey};
}

.progress-time {
	font-size: 1.2rem;
	color:${({ theme }) => theme.txtGrey};
}

.fas{
  color: ${({ theme }) => theme.white};
}


`;
