import React, {useState, useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { ToastContainer, toast,Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DtLogo from "../../assets/DTLogo.png";
import transportImg from '../../assets/transport.avif'
import {TextError} from '../../component'


const Login = () => {
  const [userData, setUserData] = useState({})
  const initialValues = {
    email:'',
    password:'',
    remember:false
  }

  const onSubmit = (values, {resetForm}) => {
    setUserData({...values})
    if(userData){
      toast.success("😊 Login successful", {
        position: "top-right",
        autoClose: 1500,
        transition: Slide,
      })
    }
    setTimeout(()=>{
      resetForm()
    })
  }

  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email or Username")
      .required("Please enter a valid Email"),
    password: Yup.string()
      .required("Please enter password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Password can only contain Latin letters."),
  });

  useEffect(()=>{
    localStorage.setItem('currentUser', JSON.stringify(userData))
  },[userData])

  return (
    <div className="grid sm:grid-cols-2 container mx-auto max-w-[1110px] font-poppins">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        <div className="flex flex-col justify-center mb-[30px]">
          <div className="w-[80px] mx-auto my-[30px]">
            <img src={DtLogo} alt="logo" />
          </div>
          <div className="w-[412px] flex flex-col justify-center bg-loginBg mx-auto rounded-2xl">
            <Form className="w-[320px] mx-auto p-4">
              <h2 className="text-2xl font-bold text-center mx-auto pb-3">
                Login
              </h2>
              <div className="flex flex-col py-2">
                <label className="font-semibold mb-[3px]">Username</label>
                <Field
                  className="border p-2 rounded border-remeber"
                  placeholder="Enter your Email or Username"
                  name="email"
                  type="text"
                />
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div className="flex flex-col py-2">
                <label className="font-semibold mb-[3px]">Password</label>
                <Field
                  className="border p-2 rounded border-remeber"
                  placeholder="Enetr your password"
                  name="password"
                  type="password"
                />
                <ErrorMessage name="password" component={TextError} />
              </div>
              <div className="flex justify-between text-remeber mt-[5px] mb-[15px]">
                <p className="flex items-center">
                  <Field
                    className="mr-2 border-remeber"
                    name="remember"
                    type="checkbox"
                  />
                  Remember Me
                </p>
                <span className="hover:cursor-pointer">Forget Password</span>
              </div>
              <button
                type="submit"
                className="border rounded w-full py-[5px] my-3 bg-remeber text-white"
              >
                Login
              </button>
            </Form>
            <ToastContainer/>
          </div>
        </div>
      </Formik>

      <div className="bg-imageBg">
        <img
          src={transportImg}
          alt="transport"
          className=" h-[570px] rounded"
        />
      </div>
    </div>
  );
};

export default Login;
