import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./AdminHeader.module.css"; // Import CSS module

const AdminHeader: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <header className={styles.adminHeader}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} to="/admin/EditAboutUs">
              Edit About Us
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/admin/ManageEntities">
              Manage Entities
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/admin/EditFAQ">
              Edit FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default AdminHeader;
