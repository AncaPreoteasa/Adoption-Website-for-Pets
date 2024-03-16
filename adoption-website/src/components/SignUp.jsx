import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./SignUp.module.css";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigateTo = useNavigate();

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.retypePassword
    ) {
      setError("All fields are required");
      return;
    }

    if (formData.password.length < 4) {
      setError("Password must be at least 4 characters long");
      return;
    }

    if (formData.password !== formData.retypePassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (response.status === 200 || response.status === 201) {
        console.log("User registered successfully.");
        setError(null);
        handleClick();
        navigateTo("/logIn");
      } else {
        setError("Failed...");
      }
    } catch (error) {
      console.warn(error);
      setError("An error occurred during registration");
    }
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className={styles.container}>
        <h2>Sign up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>{error}</div>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            className={styles.input}
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            className={styles.input}
          />
          <TextField
            label="Email Address"
            type="email"
            name="email"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            className={styles.input}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className={styles.input}
          />
          <TextField
            label="Retype Password"
            type={showPassword ? "text" : "password"}
            name="retypePassword"
            variant="outlined"
            fullWidth
            required
            onChange={handleChange}
            className={styles.input}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={styles.btn}
          >
            Sign Up
          </Button>
          <div className={styles.logInContainer}>
            Already have an account?{" "}
            <NavLink to="/logIn" className={styles.logIn}>
              Log in
            </NavLink>
          </div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Form submitted successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignUp;
