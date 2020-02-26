import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import logo from "~/assets/mask_gas.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("You must enter your email"),
  password: Yup.string().required("You must enter the password")
});

const SignIn = () => {
  const handleSubmit = data => {
    console.tron.log(data);
  };

  return (
    <>
      <img src={logo} alt="tattoo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter email..." />
        <Input name="password" type="password" placeholder="Enter password" />
        <button type="submit">SignIn</button>
        <Link to="register">SignUp</Link>
      </Form>
    </>
  );
};

export default SignIn;
