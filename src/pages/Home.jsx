import { Box, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {
    return (
        <Box sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flex: 1,
            flexDirection: 'column',
            gap: 5
               }}>
    
            <img src="/DSC_2423.jpg" alt="alle" style={{ maxWidth: '50%', maxHeight: '50%' }} />
            <Box>
                <Button
                    href='tel:0727025645'
                    variant='contained'
                    size='large'
                    startIcon={<PhoneIcon />}
                >
                    Ring mig
                </Button></Box>
                <Box>
                <Button
                    href='mailto:carlphilip97@gmail.com'
                    variant='contained'
                    size='large'
                    startIcon={<EmailIcon />}
                    
                >
                    Skicka Mail
                </Button>
            </Box>
        </Box>
    );
};

export default Home;