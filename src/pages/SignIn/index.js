import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import { signInRequest } from "~/store/modules/auth/actions";
import logo from "~/assets/mask_gas.svg";
import Loading from "~/pages/Components/Loading";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("You must enter your email"),
  password: Yup.string().required("You must enter the password")
});

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="tattoo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter email..." />
        <Input name="password" type="password" placeholder="Enter password" />
        <button type="submit">{loading ? <Loading /> : "SignIn"}</button>
        <Link to="register">SignUp</Link>
      </Form>
    </>
  );
};

export default SignIn;
