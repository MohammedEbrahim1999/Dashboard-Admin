import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import DownloadOutlined from '@mui/icons-material/DownloadOutlined';
import Raw1 from './Raw1';
import Raw2 from './Raw2';
import Raw3 from './Raw3';
import Header from '../../Components/Header';

const Dashboard = () => {
    const theme = useTheme();
    return (
        <Box>
            <Stack direction={"row"} alignItems={"center"} flexWrap={"wrap"} sx={{
                justifyContent: { xs: "center", sm: "space-between" }
            }}>
                <Header
                    isDashboard={true}
                    title={"DASHBOARD"}
                    subTitle={"Welcome to your dashboard"}
                />
                <Box sx={{ textAlign: "right", mb: 1.3 }}>
                    <Button
                        sx={{ padding: "6px 8px", textTransform: "capitalize" }}
                        variant="contained"
                        color="primary"
                    >
                        <DownloadOutlined />
                        Download Reports
                    </Button>
                </Box>

            </Stack>
            <Raw1 />
            <Raw2 />
            <Raw3 />
        </Box>
    )
}

export default Dashboard
