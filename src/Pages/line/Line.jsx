import { Box } from '@mui/material'
import LineChart from './LineChart';
import Header from '../../Components/Header';

const Line = () => {
    return (
        <Box>
            <Header title="Line Chart" subTitle="Simple Line Chart" />

            <LineChart />
        </Box>
    )
}

export default Line
