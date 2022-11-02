import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// TODO: Create another file and rewrite this component as a Class Component(See login page example)
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
    <div className="flex items-center justify-center w-full mt-10">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col min-h-screen bg-grey-lighter">
          <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
            <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.fullname}
                type="text"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.email}
                type="text"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="email"
                placeholder="Email"
              />

              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.password}
                type="password"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="password"
                placeholder="Password"
              />
              <input
                onChange={(e) => handleInput(e)}
                value={registerInfo.confirmPassword}
                type="password"
                className="block w-full p-3 mb-4 border rounded border-grey-light"
                name="confirmPassword"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="w-full py-3 my-1 text-center text-white bg-green-500 rounded hover:bg-green-dark focus:outline-none"
              >
                Create Account
              </button>

              <div className="mt-4 text-sm text-center text-grey-dark">
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

            <div className="mt-6 text-grey-dark">
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
