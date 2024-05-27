import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from '../NavItem/NavItem';
import HomeIcon from '@mui/icons-material/Home'
import NavPlaylist from '../NavPlaylist/Navplaylist';

const SideNav = ({ spotifyApi, token }) => {
	const [playlists, setPlaylists] = useState([]);
	const [loading, setLoding] = useState(true);
	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;
			const data = await spotifyApi.getUserPlaylists();
			setPlaylists(data.body.items);
			setLoding(false);
			
		}
		getPlaylists();
	}, [spotifyApi, token]);

	const renderPlaylist = () => {
		if(loading){
			return[1,2,3,4,5,6,7,8,9,10].map((_, i) => <NavPlaylist key={i} loading={loading}/>) 
		}
		return playlists.map((playlist, i) => <NavPlaylist key={i} name={playlist.name} id={playlist.id} loading={loading}/>
	)}

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
			<NavItem name="Home" Icon={HomeIcon} target='/'/>
			<Box px={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			<Box sx={{overflowY: 'auto',flex: 1}}>
				{renderPlaylist()}
			</Box>
		</Box>
	);
};

export default SideNav;
