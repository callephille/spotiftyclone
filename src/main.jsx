import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SpotifyWebApi from 'spotify-web-api-node';
import { redirectURL } from './config/config';
import { ThemeProvider } from '@mui/system';
import { themeOptions } from './theme/meterial-theme';
import { BrowserRouter } from 'react-router-dom';

// const SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
const spotifyApi = new SpotifyWebApi({
	clientId: import.meta.env.VITE_CLIENT_ID,
	clientSecret: import.meta.env.VITE_CLIENT_SECRET,
	redirectUri: redirectURL
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={themeOptions}>
    <App spotifyApi={spotifyApi}/>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

