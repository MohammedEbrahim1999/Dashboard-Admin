import { Box } from '@mui/material'
import PieChart from './PieChart';
import Header from '../../Components/Header';
const pie = () => {
    return (
        <Box>
            <Header title="Pie Chart" subTitle="Simple Pie Chart" />
            <PieChart />
        </Box>
    )
}

export default pie
