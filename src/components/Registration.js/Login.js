import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const inputValue = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(inputValue);
  const [token, setToken] = useState([]);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    console.log("input values ", value);
  };
  useEffect(() => {
   
  }, []);
  const postData = () => {
    const options = {
      url: " https://api.escuelajs.co/api/v1/auth/login",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        email: value.email,
        password: value.password,
      },
    };

    axios(options).then((response) => {
      console.log(response.data);
      if (response.data) {
        setToken(response.data);
        // if(token !== null){
        //   console.log("token",token);

          localStorage.setItem("token",JSON.stringify(response.data));
        // }
        navigate("/home");
      }

      // set local storage
    });
  };

 console.log("token",token);

  const signup = () => {
    console.log("You are clickingo");

    navigate('/signup')
  };

  return (
    <>
      <div className=" bg-black">
        <div className="w-full md:w-[35%]  mx-auto text-white font-sans font-bold bg-black min-h-screen  md:pl-7">
          <div className=" min-h-screen items-center  ml-10 pt-5 justify-items-start">
            <div className=" row-start-2 text-4xl">
              <p className="">Sign in</p>
              <form action="" onSubmit={handleSubmit}>
                <div className="pt-10 pr-20">
                  <label className="text-sm font-sans font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Write your username"
                    className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                  />
                </div>
                <div className="pt-2 pr-20">
                  <label className="text-sm font-sans font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Write your password"
                    className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
                  />
                </div>

                <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
                  <button
                    type="submit"
                    className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white "
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>

            <button
              className="text-sm font-sans font-medium text-gray-400 underline p-3 mt-5"
              onClick={signup}
            >
              Don´t have an account? Sign up
            </button>
          </div>
        </div>

        <div className="banner col-span-8 text-white font-sans font-bold"></div>
      </div>
    </>
  );
};

export default Login;
