import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./LogIn.module.css";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className={styles.container}>
        <h2>Log In</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={styles.btn}
          >
            Log In
          </Button>
          <div className={styles.signUpContainer}>
            Need an account?
            <NavLink to="/signUp" className={styles.signUp}>
              Sign up
            </NavLink>{" "}
          </div>
        </form>
      </div>
    </>
  );
}
