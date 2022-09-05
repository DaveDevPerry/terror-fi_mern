import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<SongsContextProvider>
				{/* <BrowserRouter> */}
				<App />
				{/* </BrowserRouter> */}
			</SongsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
