"use client"
import React, { useEffect, useState } from "react";
import {  TextField, Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
// import { getUser, registerUser } from "@/redux/Auth/Action";
import { useFormik } from "formik";
import * as yup from "yup";
// import { registerUser } from "@/redux/Auth/Action";

const validationSchema = yup.object().shape({
    fullName: yup.string().required("full name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password should be at least 8 character long"),
    mobile: yup.string().required("Mobile number is required")
});

const Register = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "+91",
  });

  // console.log(" auth ----- ", auth);

  const goBack = () => {
    router.back();
    };
    
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            mobile: "+91",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("values", values)
            dispatch(registerUser(values))
        },
    })


  // useEffect(() => {
  //   console.log("jwt --- ",jwt)
  //   if (jwt) {
  //     dispatch(getUser(jwt));
  //   }
  // }, [jwt]);

  useEffect(() => {
    if (auth.user?.fullName ||auth.user?.name) {
      router.push("/book-ride")
    }
  }, [auth.user]);

  return (
    <div>
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        {/* <img className="text-center w-full font-bold text-xl">Login</img> */}
        <div className="w-full  flex justify-center">
          <img
            className="h-10"
            src="https://accounts.olacabs.com/en-in/images/ola-logo.png"
            alt=""
          />
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="h-full p-5">
        <TextField
          label="User Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          error={formik.touched.fullName && formik.errors.fullName}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          label="Mobile Number"
          type="tel"
          variant="outlined"
          fullWidth
          margin="normal"
          name="mobile"
          onChange={formik.handleChange}
          value={formik.values.mobile}
          error={formik.touched.mobile && formik.errors.mobile}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
        <Button
          className="w-full"
          variant="contained"
          type="submit"
          color="primary"
          sx={{ padding: ".9rem 0rem" }}
          onClick={() => router.push('/book-ride')}
        >
          Register
        </Button>
      </form>

      <div className="flex flex-col w-full items-center justify-center space-y-2">
        <p className="flex items-center mt-5 text-center">
          If you have already account ?
          <Button onClick={() => router.push("login")} className="ml-5" color="primary">
            Login
          </Button>
        </p>
        {/* <p className="flex items-center mt-5 text-center">
          Register as driver
          <Button
            onClick={() => router.push("/driver/register")}
            className="ml-5"
            color="primary"
          >
            Register
          </Button>
        </p> */}
      </div>
    </div>
  );
};

export default Register;
