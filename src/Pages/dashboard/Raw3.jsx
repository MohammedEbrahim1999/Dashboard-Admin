import { Paper, Stack, Typography, useTheme } from '@mui/material'
import PieChart from '../pie/PieChart'
import BarChart from '../bar/BarChart'
import Geo from '../geography/GeographyChart'

const Raw3 = () => {
    const theme = useTheme();
    return (
        <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
            <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", }}>
                <Typography
                    color={theme.palette.secondary.main}
                    sx={{ padding: "30px 30px 0 30px", mb: 2 }}
                    variant="h6"
                    fontWeight="600"
                >
                    Campaign
                </Typography>
                <PieChart isDashboard={true} />
                <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
                    $48,352 revenue generated
                </Typography>
                <Typography variant="body2" px={0.7} pb={3} align="center">
                    Includes extra misc expenditures and costs
                </Typography>
            </Paper>
            <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", }}>
                <Typography
                    color={theme.palette.secondary.main}
                    variant="h6"
                    fontWeight="600"
                    sx={{ padding: "30px 30px 0 30px" }}
                >
                    Sales Quantity
                </Typography>
                <BarChart isDashboard={true} />
            </Paper>
            <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%", }}>
                <Geo isDashbord={true} />
            </Paper>
        </Stack>
    )
}

export default Raw3