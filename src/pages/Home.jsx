import {Box, Button} from '@mui/material'


const Home = ( ) => {
    return(
        
        <Box sx={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flex: 1,
        flexDirection: 'column',
        gap: 5
           }}>

            <img src="/DSC_2423.jpg" alt="alle"style={{ maxWidth:'50%', maxHeight:'50%'}} />
            <Button href='tel:0727025645' variant='contained' size='large'>
                kontakta mig
            </Button>
        </Box>
    );
};

export default Home