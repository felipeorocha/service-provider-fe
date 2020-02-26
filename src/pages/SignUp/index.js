import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import logo from "~/assets/mask_gas.svg";

const SignUp = () => {
  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="tattoo" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Enter full name" />
        <Input name="email" type="email" placeholder="Enter email..." />
        <Input name="password" type="password" placeholder="Enter password" />
        <button type="submit">SignUp</button>
        <Link to="/">SignIn</Link>
      </Form>
    </>
  );
};

export default SignUp;
