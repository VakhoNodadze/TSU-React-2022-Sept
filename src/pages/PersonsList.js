import React, { useEffect } from "react";
import PersonItem from "../components/molecules/PersonItem";

import { useNavigate } from "react-router-dom";

const PersonsList = ({ personData }) => {
  const userInfo = localStorage.getItem("user");

  const redirect = useNavigate();

  //componentDidUpdate
  useEffect(() => {
    if (!userInfo) {
      redirect("/login");
    }
  }, [redirect, userInfo]);

  //componentDidMount
  // useEffect(() => {}

  // , [])

  // componentDidUnmount
  // useEffect(() => {
  //   return {

  //   }
  // }, [])

  return (
    <>
      {userInfo ? (
        personData.map((person) => <PersonItem key={person.id} {...person} />)
      ) : (
        <h1 className="w-full text-center">You are not logged in</h1>
      )}
    </>
  );
};

export default PersonsList;
