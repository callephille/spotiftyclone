import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@mui/icons-material';
import { IconButton, Stack, Typography, Slider, Box } from '@mui/material';
import { formatTime } from '../../utils/formatTime';
import { useState } from 'react';

const PlayerControls = ({ player, is_paused, duration, progress }) => {
	const skipStyle = { width: 28, height: 28 };
    const playStyle = { width: 38, height: 38 };
	const [currentProgress, setCurrentProgress] = useState(progress);

	return (
		<Stack direction="column" spacing={2} justify="center" alignItems="center" sx={{ width: '100%' }}>
			<Stack spacing={1} direction="row" justifyContent={'center'} alignItems="center" sx={{ width: '100%' }}>
				<IconButton size="small" sx={{ color: 'text.primary' }}>
					<SkipPrevious sx={skipStyle} onClick={()=>{
                        setCurrentProgress(0);
                        player.previousTrack();
                    }}/>
				</IconButton>
				<IconButton
					onClick={() => {
						player.togglePlay();
					}}
					size="small"
					sx={{ color: 'text.primary' }}
				>
					{is_paused ? (
						<PlayArrow sx={playStyle} />
					) : (
						<Pause sx={playStyle} />
					)}
				</IconButton>
				<IconButton size="small" sx={{ color: 'text.primary' }}>
					<SkipNext sx={skipStyle} 
                    onClick={()=>{
                        setCurrentProgress(0);
                        player.nextTrack();
                    }}/>
				</IconButton>
			</Stack>
			<Stack spacing={2} direction="row" justifyContent={'center'} alignItems="center" sx={{ width: '75%' }}>
				<Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 12 }}>
					{formatTime(currentProgress)}
				</Typography>
				<Slider max={duration} value={currentProgress} min={0} size="medium" />
				<Typography variant="body1" sx={{ color: 'text.secondary', fontSize: 12 }}>
					{formatTime(duration)}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default PlayerControls;