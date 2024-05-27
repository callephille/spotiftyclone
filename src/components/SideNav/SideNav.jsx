import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';

const SideNav = ({ spotifyApi, token }) => {
	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;
			const data = await spotifyApi.getUserPlaylists();
			console.log(data.body);
		}
		getPlaylists();
	}, [spotifyApi, token]);

	return (
		<Box
			sx={{
				display: 'flex',
				backgroundColor: 'background.default',
				width: 230,
				height: '100%',
				flexDirection: 'column'
			}}
		>
			<Box p={3}>
				<img src="/Spotify_Logo.png" alt="spotify logo" width={'75%'} />
			</Box>
			<Box px={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box
				sx={{
					overflowY: 'auto',
					flex: 1
				}}
			>
				pop
			</Box>
		</Box>
	);
};

export default SideNav;
