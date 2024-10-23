import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import { data } from './data';
import { grey } from '@mui/material/colors';

const LineChart = ({isDashboard = false}) => {
    const theme = useTheme();
    return (
        <Box sx={{ height: isDashboard ? "350px" : "75vh" }}>
            <ResponsiveLine
                theme={
                    {
                        "text": {
                            "fontSize": 11,
                            "fill": "#333333",
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        },
                        "axis": {
                            "domain": {
                                "line": {
                                    "stroke": grey[500],
                                    "strokeWidth": 2
                                }
                            },
                            "legend": {
                                "text": {
                                    "fontSize": 12,
                                    "fill": theme.palette.mode === "dark" ? theme.palette.info.dark : "#000",
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            },
                            "ticks": {
                                "line": {
                                    "stroke": "#777777",
                                    "strokeWidth": 1
                                },
                                "text": {
                                    "fontSize": 11,
                                    "fill": theme.palette.mode === "dark" ? theme.palette.info.dark : "#000",
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            }
                        },
                        "grid": {
                            "line": {
                                "stroke": theme.palette.mode === "dark" ? theme.palette.text.secondary : "#000",
                                "strokeWidth": 0
                            }
                        },
                        "legends": {
                            "title": {
                                "text": {
                                    "fontSize": 11,
                                    "fill": "#333333",
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            },
                            "text": {
                                "fontSize": 11,
                                "fill": "#333333",
                                "outlineWidth": 0,
                                "outlineColor": "transparent"
                            },
                            "ticks": {
                                "line": {},
                                "text": {
                                    "fontSize": 10,
                                    "fill": "#333333",
                                    "outlineWidth": 0,
                                    "outlineColor": "transparent"
                                }
                            }
                        },
                        "annotations": {
                            "text": {
                                "fontSize": 13,
                                "fill": "#333333",
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "link": {
                                "stroke": "#000000",
                                "strokeWidth": 1,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "outline": {
                                "stroke": "#000000",
                                "strokeWidth": 2,
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            },
                            "symbol": {
                                "fill": "#000000",
                                "outlineWidth": 2,
                                "outlineColor": "#ffffff",
                                "outlineOpacity": 1
                            }
                        },
                        "tooltip": {
                            "wrapper": {},
                            "container": {
                                "background": "#ffffff",
                                "color": "#000",
                                "fontSize": 12
                            },
                            "basic": {},
                            "chip": {},
                            "table": {},
                            "tableCell": {},
                            "tableCellValue": {}
                        }
                    }
                }
                data={data}
                curve='catmullRom'
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard? null : 'Transportation',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard? null : 'Count',
                    legendOffset: -44,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        itemTextColor: theme.palette.mode === "dark" ? theme.palette.info.dark : "#000",
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1,
                                    itemTextColor: theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.info.dark,
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    )
}

export default LineChart
