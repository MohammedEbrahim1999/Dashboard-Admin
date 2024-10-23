import { Box } from '@mui/material'
import BarChart from './BarChart';
import Header from '../../Components/Header';


const Bar = () => {
    return (
        <Box>
            <Header
                title="Bar Chart"
                subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
            />
            <BarChart />
        </Box>
    )
}

export default Bar
