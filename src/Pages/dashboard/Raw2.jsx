import { Box, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material'
import LineChart from '../line/LineChart'
import DownloadOutlined from '@mui/icons-material/DownloadOutlined'
import { transactionsData } from './data'

const Raw2 = () => {
    const theme = useTheme()
    return (
        <Stack direction={"row"} gap={2} sx={{ mt: 2 }} flexWrap={"wrap"}>
            <Paper sx={{
                flexGrow: 1,
                width: { xs: "100%", xl: 850 }
            }}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
                    <Box>
                        <Typography variant={"h6"} sx={{
                            mb: 1,
                            mt: 2,
                            ml: 4,
                            color: theme.palette.secondary.dark,
                        }}>
                            Revenue Generated
                        </Typography>
                        <Typography variant='p' sx={{ ml: 4 }}>
                            $59,342.32

                        </Typography>
                    </Box>
                    <Box>
                        <IconButton sx={{ mr: 3 }}>
                            <DownloadOutlined />
                        </IconButton>
                    </Box>
                </Stack>
                <LineChart isDashboard={true} />
            </Paper>

            <Box
                sx={{
                    overflow: "auto",
                    borderRadius: "4px",
                    minWidth: "280px",
                    maxHeight: 440,
                    flexGrow: 1,
                }}
            >
                <Paper>
                    <Typography
                        color={theme.palette.secondary.main}
                        fontWeight={"bold"}
                        p={1.2}
                        variant='h6'>
                        Recent Transactions
                    </Typography>
                </Paper>
                {transactionsData.map((item) => {
                    return (
                        <Paper sx={{
                            mt: 0.4,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <Box p={1.2}>
                                <Typography variant="body1">{item.txId}</Typography>
                                <Typography variant="body2">{item.user} </Typography>
                            </Box>
                            <Typography variant="body1">{item.date} </Typography>

                            <Typography
                                borderRadius={1.4}
                                p={1}
                                bgcolor={theme.palette.error.main}
                                color={theme.palette.getContrastText(theme.palette.error.main)}
                                variant="body2"
                                mr={1}
                            >
                                ${item.cost}
                            </Typography>
                        </Paper>
                    )
                })}

            </Box>
        </Stack>
    )
}

export default Raw2
