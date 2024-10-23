import { DataGrid } from "@mui/x-data-grid";
import { rows as initialRows } from "./data.jsx";
import { Box, Typography, useTheme, Button, Stack } from "@mui/material";
import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import Header from "../../Components/Header.jsx";

// Helper function to generate a random phone number
const generatePhoneNumber = () => {
    const randomDigits = () => Math.floor(Math.random() * 9000 + 1000); // Generates a 4-digit number
    return `(${Math.floor(Math.random() * 900 + 100)})-${randomDigits()}-${randomDigits()}`;
};

// Helper function to generate a random name
const generateName = () => {
    const firstNames = ["John", "Jane", "Alice", "Bob", "Emily", "Tom", "Sarah", "Mike"];
    const lastNames = ["Doe", "Smith", "Johnson", "Brown", "Davis", "Clark", "Anderson", "Taylor"];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
};

// Helper function to generate a random email
const generateEmail = (name) => {
    const domains = ["example.com", "mail.com", "test.com"];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const email = name.toLowerCase().replace(" ", "."); // Convert name to lowercase and replace space with a dot
    return `${email}@${domain}`;
};

// Helper function to generate a random age
const generateAge = () => {
    return Math.floor(Math.random() * (60 - 18) + 18); // Age between 18 and 60
};

// Helper function to generate a random access level
const generateAccess = () => {
    const accessLevels = ["User", "Manager", "Admin"];
    return accessLevels[Math.floor(Math.random() * accessLevels.length)];
};

const Team = () => {
    const theme = useTheme();

    // Manage rows with state
    const [rows, setRows] = useState(initialRows);

    // Function to add a new row with realistic data
    const addRow = () => {
        const newName = generateName();
        const newRow = {
            id: rows.length + 1, // Increment ID based on the number of rows
            Name: newName,
            Email: generateEmail(newName),
            Age: generateAge(),
            Phone: generatePhoneNumber(),
            Access: generateAccess(),
        };
        setRows([...rows, newRow]);
    };

    // Function to remove the last row
    const removeRow = () => {
        if (rows.length > 0) {
            setRows(rows.slice(0, -1)); // Remove the last row
        }
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 33,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "Name",
            headerName: "Name",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "Email",
            headerName: "Email",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "Age",
            headerName: "Age",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "Phone",
            headerName: "Phone",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "Access",
            headerName: "Access",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { Access } }) => {
                return (
                    <Box
                        sx={{
                            p: "5px",
                            width: "115px",
                            borderRadius: "3px",
                            textAlign: "center",
                            mx: "auto",
                            my: "10px",
                            display: "flex",
                            justifyContent: "space-evenly",
                            bgcolor:
                                Access === "Admin"
                                    ? theme.palette.primary.dark
                                    : Access === "Manager"
                                        ? theme.palette.secondary.dark
                                        : "#3da58a",
                        }}
                    >
                        {Access === "Admin" && (
                            <AdminPanelSettingsOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}
                        {Access === "Manager" && (
                            <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
                        )}
                        {Access === "User" && (
                            <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
                        )}
                        <Typography variant="body1" sx={{ fontSize: "13px", color: "#FFF" }}>
                            {Access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box>
            <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

            {/* Buttons for adding and removing rows */}
            <Stack direction={"row"} gap={2} sx={{ mb: 2 }}>
                <Button size="small" onClick={addRow} variant="contained" color="primary">
                    Add a row
                </Button>
                <Button
                    size="small"
                    onClick={removeRow}
                    variant="contained"
                    color="error"
                    sx={{ mr: 1 }}
                >
                    Remove a row
                </Button>
            </Stack>

            {/* DataGrid */}
            <div style={{ height: 650, width: "100%" }}>
                <DataGrid
                    rows={rows}
                    // @ts-ignore
                    columns={columns}
                    checkboxSelection
                    autoHeight
                />
            </div>

        </Box>
    );
};

export default Team;
