// 'use client'
import React, { useEffect } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import { Avatar, styled, Typography, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import Tooltip from '@mui/material/Tooltip';

const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
        {
            props: ({ open }) => open,
            style: {
                ...openedMixin(theme),
                "& .MuiDrawer-paper": openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
                ...closedMixin(theme),
                "& .MuiDrawer-paper": closedMixin(theme),
            },
        },
    ],
}));

// Array Of Side Links
const dashboard = [
    {
        text: "DashBoard",
        icon: <HomeOutlinedIcon />,
        path: "/",
    },
    {
        text: "Manage Team",
        icon: <PeopleAltOutlinedIcon />,
        path: "/team",
    },
    {
        text: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        path: "/contacts",
    },
    {
        text: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
        path: "/invoices",
    },
];
const profile = [
    {
        text: "Profile Form",
        icon: <Person2OutlinedIcon />,
        path: "/form",
    },
    {
        text: "Calender",
        icon: <CalendarTodayOutlinedIcon />,
        path: "/calendar",
    },
    {
        text: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
        path: "/faq",
    },
];

const chart = [
    {
        text: "Bar Chart",
        icon: <BarChartOutlinedIcon />,
        path: "/bar",
    },
    {
        text: "Pie Chart",
        icon: <PieChartOutlinedIcon />,
        path: "/pie",
    },
    {
        text: "Line Chart",
        icon: <TimelineOutlinedIcon />,
        path: "/line",
    },
    {
        text: "Geography Chart",
        icon: <MapOutlinedIcon />,
        path: "/geography",
    },
];

const SideBar = ({ open, handleDrawerClose }) => {
    useEffect(() => {
        const disableRightClick = (event) => {
            event.preventDefault();
        };

        // Disable right-click on the entire page when the component mounts
        document.addEventListener('contextmenu', disableRightClick);

        // Clean up event listener when the component unmounts
        return () => {
            document.removeEventListener('contextmenu', disableRightClick);
        };
    }, []);
    const handleSpecificContextMenu = (event) => {
        event.preventDefault();
    };
    let location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <Typography color={theme.palette.primary.main}> DashBoard Admin</Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Tooltip title="Sorry You Can't Download Image" placement="right" >
                <Avatar
                    alt="Remy Sharp"
                    src="/Imgs/titleimg.png"
                    onContextMenu={handleSpecificContextMenu}
                    sx={{
                        mx: "auto",
                        width: open ? 88 : 55,
                        height: open ? 88 : 55,
                        my: 2,
                        transition: "1s",
                        border: "2px solid gray",
                    }}
                />
            </Tooltip>
            <Typography
                align="center"
                sx={{
                    fontSize: open ? "17px" : 0,
                    transition: "1s",
                }}
            >
                Mohammed Ebrahim
            </Typography>
            <Typography
                align="center"
                sx={{
                    fontSize: open ? "17px" : 0,
                    transition: "1s",
                    mb: 1,
                    color: theme.palette.info.main,
                }}
            >
                Admin
            </Typography>

            <Divider />
            <List>
                {dashboard.map((item) => (
                    <Tooltip title={open ? null : item.text} placement="right">

                        <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                    bgcolor:
                                        location.pathname === item.path
                                            ? theme.palette.mode === "dark"
                                                ? grey[800]
                                                : grey[300]
                                            : null,
                                }}
                                onClick={() => {
                                    navigate(item.path);
                                }}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: "center",
                                        },
                                        open
                                            ? {
                                                mr: 2,
                                            }
                                            : {
                                                mr: "auto",
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>
                ))}
            </List>

            <Divider />

            <List>
                {profile.map((item) => (
                    <Tooltip title={open ? null : item.text} placement="right">
                        <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                    bgcolor:
                                        location.pathname === item.path
                                            ? theme.palette.mode === "dark"
                                                ? grey[800]
                                                : grey[300]
                                            : null,
                                }}
                                onClick={() => {
                                    navigate(item.path);
                                }}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: "center",
                                        },
                                        open
                                            ? {
                                                mr: 2,
                                            }
                                            : {
                                                mr: "auto",
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
            <Divider />

            <List>
                {chart.map((item) => (

                    <Tooltip title={open ? null : item.text} placement="right">
                        <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                    bgcolor:
                                        location.pathname === item.path
                                            ? theme.palette.mode === "dark"
                                                ? grey[800]
                                                : grey[300]
                                            : null,
                                }}
                                onClick={() => {
                                    navigate(item.path);
                                }}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: "center",
                                        },
                                        open
                                            ? {
                                                mr: 2,
                                            }
                                            : {
                                                mr: "auto",
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Tooltip>
                ))}
            </List>
        </Drawer>
    );
};

export default SideBar;
