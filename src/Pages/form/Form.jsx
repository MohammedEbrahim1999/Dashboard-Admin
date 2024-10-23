'use client'
import { Alert, Box, Button, Snackbar, Stack, Typography, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Header from "../../Components/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";

const data = [
    {
        value: "Admin",
        label: "Admin",
    },
    {
        value: "Manager",
        label: "Manager",
    },
    {
        value: "User",
        label: "User",
    },
];
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const Form = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = () => {
        handleClick()
    };



    return (
        <Box
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
            }}
            noValidate
            autoComplete="off"
        >
                  <Header title="CREATE USER" subTitle="Create a New User Profile" />


            <Stack direction={"row"} gap={2}>
                <TextField
                    label="First Name"
                    variant="filled"
                    error={Boolean(errors.firstName)}
                    helperText={Boolean(errors.firstName) ? "This field is required & min 5 character" : null}
                    {...register("firstName", { required: true, minLength: 5 })}
                    sx={{
                        flexGrow: 1,
                    }}
                />
                <TextField
                    label="Last Name"
                    variant="filled"
                    error={Boolean(errors.lastName)}
                    helperText={Boolean(errors.lastName) ? "This field is required & min 5 character" : null}
                    {...register("lastName", { required: true, minLength: 5 })}
                    sx={{
                        flexGrow: 1,
                    }}
                />
            </Stack>
            <TextField label="Email" variant="filled"
                error={Boolean(errors.email)}
                helperText={Boolean(errors.email) ? "Please provide a valid email address" : null}
                {...register("email", { required: true, pattern: regEmail })}
            />
            <TextField label="Contact Number" variant="filled"
                error={Boolean(errors.phone)}
                helperText={Boolean(errors.phone) ? "Please provide a valid Phone number" : null}
                {...register("phone", { required: true, minLength: 10, pattern: phoneRegExp })}
            />
            <TextField label="Addresse 1" variant="filled"
                error={Boolean(errors.addresse)}
                helperText={Boolean(errors.addresse) ? "Please provide a Correct Addresse" : null}
                {...register("addresse", { required: true, })}
            />
            <TextField label="Addresse 2" variant="filled" />
            <TextField
                id="outlined-select-currency-native"
                select
                label="Role"
                defaultValue="Admin"
                variant="filled"
                slotProps={{
                    select: {
                        native: true,
                    },
                }}
                helperText="Please select your Role"
            >
                {data.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>

            <Box
                sx={{
                    textAlign: "right",
                }}
            >
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        textTransform: "capitalize",
                    }}
                >
                    Create New User
                </Button>
                <Snackbar open={open} autoHideDuration={4500} onClose={handleClose} anchorOrigin={{ vertical :"top", horizontal : "center" }}>
                    <Alert
                        onClose={handleClose}
                        severity="info"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Account created successfully
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    );
};

export default Form;
