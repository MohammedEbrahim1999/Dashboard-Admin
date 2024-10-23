import { Box, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors';
import { ResponsivePie } from '@nivo/pie'
const data = [
    {
        id: "React",
        label: "React",
        value: 1200,
        color: "hsl(107, 70%, 50%)",
    },
    {
        id: "style",
        label: "style",
        value: 900,
        color: "hsl(64, 70%, 50%)",
    },
    {
        id: "Libraries",
        label: "Libraries",
        value: 200,
        color: "hsl(41, 70%, 50%)",
    },
    {
        id: "Mui",
        label: "haskell",
        value: 1000,
        color: "hsl(172, 70%, 50%)",
    },
    {
        id: "vueJs",
        label: "vuejs",
        value: 250,
        color: "hsl(219, 70%, 50%)",
    },
];
const PieChart = ({ isDashboard = false }) => {
    const theme = useTheme();

    return (
        <Box sx={{ height: isDashboard ? "200px" : "75vh" }}>
            <ResponsivePie
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
                data={data}
                margin={
                    isDashboard
                        ? { top: 10, right: 0, bottom: 10, left: 0 }
                        : { top: 40, right: 80, bottom: 80, left: 80 }
                }
                innerRadius={isDashboard ? 0.8 : 0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                colors={{ scheme: 'paired' }}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.mode === "dark" ? theme.palette.info.dark : "#000"}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                enableArcLabels={isDashboard ? false : true}
                enableArcLinkLabels={isDashboard ? false : true}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={
                    isDashboard
                        ? []
                        : [
                            {
                                anchor: "bottom",
                                direction: "row",
                                justify: false,
                                translateX: 0,
                                translateY: 56,
                                itemsSpacing: 0,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: theme.palette.text.primary,
                                itemDirection: "left-to-right",
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: "circle",
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemTextColor: theme.palette.text.primary,
                                        },
                                    },
                                ],
                            },
                        ]
                }
            />
        </Box>
    )
}

export default PieChart
