import { Stack, Typography, Slider, Box, IconButton } from "@mui/material";
import {formatTime} from '../../utils/formatTime';
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import { useState } from "react";


const PlayerConstrols = () => {
    return(
        <Stack>
            <Stack>playknapp</Stack>
            <Stack>progress</Stack>
        </Stack>
    );
    
}

export default PlayerConstrols