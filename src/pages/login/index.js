import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, login } from "../../services/auth";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [textRegister, setTextRegister] = useState("Sign in");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      email: form.get("email"),
      password: form.get("password"),
    };
    if (register) {
      createUser(data).then((response) => {
        const { user, token } = response.data;
        const authData = {
          user,
          token,
        };
        dispatch(setAuth(authData));
        navigate("/home");
      });
    } else {
      login(data).then((response) => {
        const { user, token } = response.data;
        const authData = {
          user,
          token,
        };
        dispatch(setAuth(authData));
        navigate("/home");
      });
    }
  };

  useEffect(() => {
    if (register) {
      setTextRegister("Register me");
    } else {
      setTextRegister("Sign in");
    }
  }, [register]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {textRegister}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onClick={() => setRegister(!register)}
                />
              }
              label="Register me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {textRegister}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
