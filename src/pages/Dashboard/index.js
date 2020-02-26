import React from "react";
import api from "~/services/api";

const DashBoard = () => {
  api.get("appointments");
  return <div>Dashboard</div>;
};

export default DashBoard;
