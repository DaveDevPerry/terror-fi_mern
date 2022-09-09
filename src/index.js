import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';
import { PlayerContextTestProvider } from './context/PlayerContextTest';
import { AlbumsContextProvider } from './context/AlbumContext';
import { UsersContextProvider } from './context/UserContext';
import { PlaylistsContextProvider } from './context/PlaylistContext';
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<UsersContextProvider>
				<PlaylistsContextProvider>
					<AlbumsContextProvider>
						<SongsContextProvider>
							<PlayerContextTestProvider>
								{/* <BrowserRouter> */}
								<App />
								{/* </BrowserRouter> */}
							</PlayerContextTestProvider>
						</SongsContextProvider>
					</AlbumsContextProvider>
				</PlaylistsContextProvider>
			</UsersContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
