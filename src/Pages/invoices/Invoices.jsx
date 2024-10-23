import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows as initialRows, columns } from "./data"; // Use your provided rows and columns data
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Header from "../../Components/Header";

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

// Helper function to generate a random address
const generateAddress = () => {
    return `${Math.floor(Math.random() * 10000)} Random St, City, ZIP ${Math.floor(Math.random() * 90000 + 10000)}`;
};

// Helper function to generate a random city
const generateCity = () => {
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
    return cities[Math.floor(Math.random() * cities.length)];
};

// Helper function to generate a random zip code
const generateZipCode = () => {
    return `${Math.floor(Math.random() * 90000 + 10000)}`;
};

const Contacts = () => {
    const theme = useTheme();
    const [rows, setRows] = useState(initialRows);
    const [selectionModel, setSelectionModel] = useState([]);

    // Function to add a new row with realistic data
    const addRow = () => {
        const newName = generateName();
        const newRow = {
            id: rows.length + 1, // Increment ID based on the number of rows
            name: newName,
            email: generateEmail(newName),
            age: generateAge(),
            phone: generatePhoneNumber(),
            address: generateAddress(),
            city: generateCity(),
            zipCode: generateZipCode(),
            registrarId: Math.floor(Math.random() * 1000000),
        };
        setRows([...rows, newRow]);
    };

    // Function to remove selected rows and reorder the IDs
    const removeSelectedRows = () => {
        // Filter out the selected rows
        const updatedRows = rows.filter((row) => !selectionModel.includes(row.id));

        // Reorder the remaining rows' IDs starting from 1
        const reorderedRows = updatedRows.map((row, index) => ({
            ...row,
            id: index + 1,
        }));

        setRows(reorderedRows); // Update the rows with reordered IDs
    };

    return (
        <Box>
                    <Header title="INVOICES" subTitle="List of Invoice Balances" />


            {/* Buttons for adding and removing rows */}
            <Stack direction={"row"} gap={2} sx={{ mb: 2 }}>
                <Button size="small" onClick={addRow} variant="contained" color="primary">
                    Add a row
                </Button>
                <Button
                    size="small"
                    onClick={removeSelectedRows}
                    variant="contained"
                    color="error"
                    disabled={selectionModel.length === 0} // Disable button if no rows are selected
                >
                    Remove selected rows
                </Button>
            </Stack>

            {/* DataGrid */}
            <div style={{ height: 650, width: "100%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    autoHeight
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    onRowSelectionModelChange={(newSelection) => {
                        // @ts-ignore
                        setSelectionModel(newSelection);
                    }}
                    rowSelectionModel={selectionModel}
                />
            </div>
        </Box>
    );
};

export default Contacts;
