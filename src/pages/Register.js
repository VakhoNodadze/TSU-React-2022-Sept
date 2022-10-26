import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ handleAddUser }) => {
  const [registerInfo, setRegisterInfo] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const redirect = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setRegisterInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      registerInfo.fullname.trim() === "" ||
      registerInfo.email.trim() === "" ||
      registerInfo.password.trim() === "" ||
      registerInfo.confirmPassword.trim() === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (registerInfo.password !== registerInfo.confirmPassword) {
      alert("Passwords must match!");
      return;
    }
    handleAddUser(registerInfo);
    alert("User successfully added!");
    setRegisterInfo({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    redirect("/login");
  };

  return (
    <div className="flex justify-center items-center w-full mt-10">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.fullname}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.email}
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.password}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.confirmPassword}
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirmPassword"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <p className="no-underline border-b border-grey-dark text-grey-dark">
                  Terms of Service
                </p>{" "}
                and
                <p className="no-underline border-b border-grey-dark text-grey-dark">
                  Privacy Policy
                </p>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <a
                className="no-underline border-b border-blue text-blue"
                href="../login/"
              >
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
