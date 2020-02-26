import React from "react";
import PropTypes from "prop-types";
import Header from "~/Components/Header";
import { Wrapper } from "./styles";

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DefaultLayout;
