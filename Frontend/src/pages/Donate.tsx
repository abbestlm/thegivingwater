import React from "react";
import styles from "./Donate.module.css"; // Import CSS module

const Donate: React.FC = () => {
  return (
    <div className={styles.donateContainer}>
      <h1 className={styles.donateTitle}>Support Our Cause</h1>
      <p className={styles.donateDescription}>
        Your contribution helps us provide clean water to more people. With your
        support, we can continue to make a significant impact in communities
        that need it most.
      </p>

      {/* Embed Zeffy Donation Form */}
      <div className={styles.donationFormContainer}>
        <iframe
          title="Donation form powered by Zeffy"
          className={styles.donationForm}
          src="https://www.zeffy.com/embed/donation-form/1a7a98ee-b280-4896-b95e-1cf9ffd94389"
        ></iframe>
      </div>
    </div>
  );
};

export default Donate;
