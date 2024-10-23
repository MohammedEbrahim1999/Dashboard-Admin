import { Box, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors';
import { ResponsiveBar } from '@nivo/bar';
const data = [
    {
        year: 2019,
        Spain: 900,
        France: 1400,
        Germany: 1700,
        Egypt: 100,
        Saudia: 3500,
    },

    {
        year: 2020,
        Spain: 1000,
        France: 1500,
        Germany: 1800,
        Egypt: 120,
        Saudia: 4200,
    },

    {
        year: 2021,
        Spain: 1100,
        France: 1600,
        Germany: 1900,
        Egypt: 140,
        Saudia: 4700,
    },

    {
        year: 2022,
        Spain: 1200,
        France: 1700,
        Germany: 2000,
        Egypt: 200,
        Saudia: 5100,
    },

    {
        year: 2023,
        Spain: 1260,
        France: 1709,
        Germany: 2080,
        Egypt: 250,
        Saudia: 5500,
    },
    {
        year: 2024,
        Spain: 1500,
        France: 1950,
        Germany: 2350,
        Egypt: 500,
        Saudia: 6000,
    },
];
const BarChart = ({isDashboard = false}) => {
    const theme = useTheme();
    return (
        <Box sx={{ height: isDashboard? "400px": "75vh"}}>
            <ResponsiveBar
                data={data}
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
                                "strokeWidth": 1
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
                keys={[
                    'Spain',
                    'France',
                    'Germany',
                    'Egypt',
                    'Saudia'
                ]}
                indexBy="year"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'paired' }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'fries'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'sandwich'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'Year',
                    legendPosition: 'middle',
                    legendOffset: 35,
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 3,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'Minmum Wage',
                    legendPosition: 'middle',
                    legendOffset: -50,
                    truncateTickAt: 0
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemTextColor: theme.palette.mode === "dark" ? theme.palette.info.dark : "#000",
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
            />
        </Box>
    )
}

export default BarChart
