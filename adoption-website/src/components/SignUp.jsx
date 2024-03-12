import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./SignUp.module.css";
import Header from "./Header";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypePassword: "",
  });

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
      const response = await axios.post(
        "http://localhost:3000/users",
        formData
      );
      setSuccessMessage("User registered successfully");
      setError(null);
      console.log("User registered successfully:", response.data);
      navigateTo("/logIn");
    } catch (error) {
      setError(
        error.response.data.message || "An error occurred during registration"
      );
      setSuccessMessage(null);
      console.error("Error during registration:", error.response.data);
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
        <div>
          Already have an account?{" "}
          <NavLink to="/logIn" className={styles.logIn}>
            Log in
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SignUp;
