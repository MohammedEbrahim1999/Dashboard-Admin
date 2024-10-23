import { Box } from '@mui/material'
import Geo from './GeographyChart';
import Header from '../../Components/Header';
const Geography = () => {
    return (
        <Box>
            <Header title="Geography" subTitle="Simple Geography Chart" />
            <Geo />
        </Box>
    )
}

export default Geography
