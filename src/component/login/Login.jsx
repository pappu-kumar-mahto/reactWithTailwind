import React from "react";
import DtLogo from "../../assets/DTLogo.png";
import transportImg from '../../assets/transport.avif'
const Login = () => {
  return (
    <div className="grid sm:grid-cols-2 container mx-auto max-w-[1110px] font-poppins">
      <div className="flex flex-col justify-center mb-[85px]">
        <div className="w-[80px] mx-auto my-[30px]">
          <img src={DtLogo} alt="logo" />
        </div>
        <div className="w-[412px] flex flex-col justify-center bg-loginBg mx-auto rounded-2xl">
          <form className="w-[320px] mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mx-auto pb-3">
              Login
            </h2>
            <div className="flex flex-col py-2">
              <label className="font-semibold mb-[3px]">Username</label>
              <input
                className="border p-2 rounded border-remeber"
                placeholder="Enter your Email or Username"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="font-semibold mb-[3px]">Password</label>
              <input
                className="border p-2 rounded border-remeber"
                placeholder="Enetr your password"
                type="password"
              />
            </div>
            <div className="flex justify-between text-remeber mt-[5px] mb-[15px]">
              <p className="flex items-center">
                <input className="mr-2 border-remeber" type="checkbox" />{" "}
                Remember Me
              </p>
              <span className="hover:cursor-pointer">Forget Password</span>
            </div>
            <button className="border rounded w-full py-[5px] my-3 bg-remeber text-white">
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="bg-imageBg">
        <img src={transportImg} alt="transport" className=" h-[570px] rounded"/>
      </div>
    </div>
  );
};

export default Login;
