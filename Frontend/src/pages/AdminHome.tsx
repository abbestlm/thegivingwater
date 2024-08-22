import React from "react";
import { Outlet } from "react-router-dom";

const AdminHome: React.FC = () => {
  return (
    <div>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default AdminHome;
