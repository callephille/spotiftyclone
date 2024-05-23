import {Box, Button} from '@mui/material';
import { accessUrl } from '../config/config'

const Login = () => {
    return (
    <Box>
        <img src='/Spotify_Logo.png' alt='Spotify logo' style={{marginBottom: '300px', width: '70%', maxWidth:'500px' }}/>
        <Button variant='contained' color='primary' size='large' href={accessUrl}>
            Login to Spotify
        </Button>
    </Box>

);
};

export default  Login;