import React, { useState } from 'react'


import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IconButton, InputAdornment } from '@mui/material';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    function typoGraphy(inputFieldName) {
        return <Typography sx={{ lineHeight: '0', marginTop: '20px' }}>{inputFieldName}</Typography>;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        // <ThemeProvider theme={defaultTheme}>
        <Box sx={{ height: '100vh', width: '100vw', display: "flex" }}>
            <Grid container component="main" spacing={0} >
                <Grid
                    item
                    xs={0}
                    md={6}
                    justifyContent="end" alignItems="center"
                    display={"flex"}
                    component={Paper}
                    elevation={0}
                >
                    <Box sx={{ background: `radial-gradient(circle at center, #ffffff 50%, #e9f0f8 100%)`, height: '90%', width: '95%', borderRadius: '24px' }}>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} component={Paper} square elevation={0} justifyContent="center" alignItems="center" display={"flex"}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            // display: 'flex',
                            // flexDirection: 'column',
                            alignItems: 'start',
                            width: '55%'
                        }}
                    >
                        <Typography component="h1" variant="h4" fontWeight="bold">
                            Sign Up
                        </Typography>
                        <Typography component="h5" paddingBottom="25px">
                            Enter details mentioned below
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            {typoGraphy("Full Name")}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"

                                name="name"
                                placeholder='Enter name'
                                autoComplete="name"
                                autoFocus
                            />
                            {typoGraphy("Email ID")}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"

                                name="email"
                                placeholder='Enter email'
                                autoComplete="email"
                                autoFocus
                            />
                            <Typography sx={{ lineHeight: '0', marginTop: '20px' }}>Password</Typography>
                            <TextField

                                placeholder='Enter password'
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                //label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                autoComplete="current-password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container spacing={2}> {/* Adjust spacing as needed */}
                                <Grid item xs={12} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField type="file" fullWidth label="Input Field 2" variant="standard" />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 2, mb: 2, textTransform: 'none', height: "50px" }}
                            >Let's Go</Button>
                            <Typography>
                                Already have an account?
                                <Link href="#" variant="body2"  >
                                    {"Log in"}
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        // </ThemeProvider>
    );
}
