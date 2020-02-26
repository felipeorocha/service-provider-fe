import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const RouteWrapper = ({ component: Component, isPrivate, ...others }) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...others} component={Component} />;
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};

export default RouteWrapper;
