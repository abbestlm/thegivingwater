import React from "react";
import styles from "./AdminFooter.module.css"; // Import CSS module

const AdminFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} The Giving Water. All rights reserved.
      </p>
    </footer>
  );
};

export default AdminFooter;
