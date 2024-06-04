import { Box, List, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PlaylistItem from '../components/PlaylistItem/PlaylistItem';

const Library = ({token, spotifyApi}) => {

    const [playlists, setPlaylists] = useState([]);
	const [loading, setLoding] = useState(true);
	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;
			const data = await spotifyApi.getUserPlaylists();
			setPlaylists(data.body.items);
			setLoding(false);
            console.log(items)
			
		}
		getPlaylists();
	}, [spotifyApi, token]);

    const renderPlaylistItems = () => {
        if(loading){
            return [1,2,3,4,5,6,7,8,9].map((_,i) => <PlaylistItem loading={loading} key={i}/>);
        }
        return albumList.map((playlist, i) => <PlaylistItem key={i} {...playlist} loading={loading} />);
    }

	return (
		<Box
			id="Library"
			px={3}
			sx={{
				display: { xs: 'flex', md: 'none' },
				backgroundColor: 'Background.default',
				flex: 1,
				flexDirection: 'column',
				overflowY: 'auto'
			}}
		>
			<Typography py={3} sx={{ color: 'text.primary', fontSize: '30px' }}>
				Ditt biblotek
			</Typography>
            <List>
                {renderPlaylistItems()}
            </List>
		</Box>
	);
};

export default Library;
