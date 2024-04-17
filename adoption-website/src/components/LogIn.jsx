import React, { useEffect, useState } from "react";
import { TextField, IconButton, InputAdornment, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import styles from "./LogIn.module.css";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const BASE_URL = "http://localhost:3000";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigateTo = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        console.log("User logged in successfully");
        const data = await response.json();
        setError(null);
        navigateTo("/");
        return data;
      } else {
        setError("Failed...");
      }
    } catch (err) {
      console.warn(err);
      setError("An error occured during login");
    }

    setIsLoading(false);
    console.log(formData);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  if (isLoading)
    if (error) {
      return <p>{error}</p>;
    } else {
      return (
        <>
          <Stack spacing={0.1}>
            <Skeleton
              variant="rectangular"
              height={50}
              width="100%"
              className={styles.skeletonHeader}
            />
            <Skeleton
              variant="rectangular"
              height={50}
              width="100%"
              className={styles.skeletonNavBar}
            />
          </Stack>
          <Stack spacing={1} className={styles.stack}>
            <Skeleton
              variant="text"
              sx={{ fontSize: "3rem" }}
              width={100}
              className={styles.skeleton}
            />
            <Skeleton variant="rectangular" width={350} height={250} />
          </Stack>
        </>
      );
    }

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
