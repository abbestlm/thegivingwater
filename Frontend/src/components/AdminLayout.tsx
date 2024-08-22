import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import styles from "./AdminLayout.module.css"; // Import CSS module

const AdminLayout: React.FC = () => {
  return (
    <div className={styles.adminLayout}>
      <AdminHeader />
      <main className={styles.mainContent}>
        <Outlet /> {/* This will render the nested routes */}
      </main>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
