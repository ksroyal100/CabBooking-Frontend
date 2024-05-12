"use client"
import React, { useState } from 'react'

import BookRideNavbar from './BookRideNavbar'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Backdrop, Button, CircularProgress } from '@mui/material';
import AvialableCab from './AvialableCab';
import { useDispatch, useSelector } from "react-redux";
import SearchResult from './SearchResult';
import { useRouter } from 'next/navigation';



const validationSchema = Yup.object().shape({
  pickupLocation: Yup.string().required("Pickup location is required"),
  destinationLocation: Yup.string().required(
    "Destination location is required"
  ),
});

const BookRide = () => {
  const [activeField, setActiveField] = useState(null);
  // const { auth, ride } = useSelector((store) => store);
  
  const handleOnSubmit = (event) => {
    


    console.log("handle on submit ---- ",event);

    // const pickupLatitude = searchParams.get("pickup_lattitude");
    // const pickupLongitude = searchParams.get("pickup_longitude");
    // const destinationLatitude = searchParams.get("destination_lattitude");
    // const destinationLongitude = searchParams.get("destination_longitude");
    // const pickupArea = searchParams.get("pickup_area");
    // const destinationArea = searchParams.get("destination_area");

    // const location = {
    //   pickupLatitude,
    //   pickupLongitude,
    //   destinationLatitude,
    //   destinationLongitude,
    //   pickupArea,
    //   destinationArea,
    };

    // dispatch(requestRide({ location, router }));

    // console.log("handle submit location - ", location);
  // }; 


  const formik = useFormik({
    initialValues: {
      pickupLocation: "",
      destinationLocation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      if(formik.isValid){
        handleOnSubmit(values);
        console.log(values)
      }
      
    },
  });

  const onFocused = (e) => {
    setActiveField(e.target.name);
  };
  return (
    <div className='w-full'>
      <BookRideNavbar />
      <div className='px-3 lg:px-5 mt-10'>
        <form onSubmit={formik.handleSubmit} className="space-y-5 -z-10">
          <div>
          <div className="border p-2 flex items-center relative">
              <p className="pr-3">From</p>
              <input
                name="pickupLocation"
                placeholder="Enter Pickup Location"
                value={formik.values.pickupLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("pickupLocation", value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className="border-none outline-none"
                onFocus={onFocused}
              />
              {activeField === "pickupLocation" && formik.values.pickupLocation &&  (
                <div className="">
                  <SearchResult
                    setActiveField={setActiveField}
                    latitude_key={"pickup_lattitude"}
                    longitude_key={"pickup_longitude"}
                    area_key={"pickup_area"}
                  />
                </div>
              )}
            </div>
            {formik.touched.pickupLocation && formik.errors.pickupLocation && (
              <div className=''>
              <p className="text-xs text-red-500 px-2">
                    {" "}
                    {formik.errors.pickupLocation}
                </p>{ " "}
              </div>
            )}
          </div>

          <div>
            <div className="border p-2 flex items-center relative">
              <p className="pr-3">To</p>
              <input
                name="destinationLocation"
                placeholder="Enter Destination Location"
                value={formik.values.destinationLocation}
                onChange={(event) => {
                  const value = event.target.value;
                  formik.setFieldValue("destinationLocation", value);
                  // dispatch(searchLocation(value));
                }}
                onBlur={formik.handleBlur}
                className="border-none outline-none"
                onFocus={onFocused}
              />
              {activeField === "destinationLocation" &&
                formik.values?.destinationLocation.length > 0 && (
                  <div className="">
                    <SearchResult
                      setActiveField={setActiveField}
                      latitude_key={"destination_lattitude"}
                      longitude_key={"destination_longitude"}
                      area_key={"destination_area"}
                    />
                  </div>
                )}
            </div>

            {formik.touched.destinationLocation &&
              formik.errors.destinationLocation && (
                <div className="">
                  <p className="text-xs text-red-500 px-2">
                    {" "}
                    {formik.errors.destinationLocation}
                  </p>{" "}
                </div>
              )}
          </div>
          <Button
            className=""
            sx={{
              width: "100%",
              padding: ".7rem 0rem",
            }}
            variant="contained"
            color="primary"
            type="submit"
     
          >
            Find Driver
          </Button>
        </form>
      </div>

      <div className="-z-10 px-2 lg:px-5 mt-5">
        <p className="py-5 text-sm ">Available Cabs</p>
        <div className="space-y-5">
          <AvialableCab />
          <AvialableCab />
          <AvialableCab />
          <AvialableCab />
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        // open={ride.rideDetails?.status === "REQUESTED"}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </div>
  )
}

export default BookRide