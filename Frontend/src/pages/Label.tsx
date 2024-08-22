import React from "react";
import { Link } from "react-router-dom";
import styles from "./Label.module.css";

const Label: React.FC = () => {
  return (
    <div className={styles.labelContainer}>
      {/* Introductory Text */}
      <div className={styles.introText}>
        <p>
          TheGivingWater.org labels are a powerful tool utilized to raise
          awareness and promote social causes. These labels are designed and
          placed on various products, including water bottles and beverages, to
          capture attention, spark conversations, and encourage individuals to
          take action. Here are key aspects of TheGivingWater.org label
          campaigns:
        </p>
      </div>

      {/* Label Sections */}
      <section className={styles.labelSection}>
        <h2>Labels for Veterans</h2>
        <div className={styles.labelContent}>
          <img
            src="/men.jpg"
            alt="Veterans Label"
            className={`${styles.labelImage} ${styles.leftImage}`}
          />
          <div className={styles.labelText}>
            <p>
              TheGivingWater.org label campaign for veterans is designed to
              raise awareness, honor their service, and provide support. The
              visually striking label features patriotic imagery and messaging
              emphasizing the importance of assisting veterans and acknowledging
              their sacrifices.
            </p>
            <Link to="/donate" className={styles.donateButton}>
              Donate to Support Veterans
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.labelSection}>
        <h2>Labels for Animals</h2>
        <div className={styles.labelContent}>
          <img
            src="/animal.jpg"
            alt="Animals Label"
            className={`${styles.labelImage} ${styles.rightImage}`}
          />
          <div className={styles.labelText}>
            <p>
              TheGivingWater.org label campaign for animals highlights the
              plight of endangered and abused animals. By placing these labels
              on products, we aim to raise awareness and encourage individuals
              to support animal welfare initiatives.
            </p>
            <Link to="/donate" className={styles.donateButton}>
              Donate to Support Animals
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.labelSection}>
        <h2>Labels for Human Trafficking</h2>
        <div className={styles.labelContent}>
          <img
            src="/woman.jpg"
            alt="Human Trafficking Label"
            className={`${styles.labelImage} ${styles.leftImage}`}
          />
          <div className={styles.labelText}>
            <p>
              TheGivingWater.org label campaign for human trafficking takes a
              proactive approach to preventing and combating this grave issue.
              In addition to raising awareness, the campaign strategically
              distributes these labels at border checkpoints and hotels to
              amplify their impact.
            </p>
            <Link to="/donate" className={styles.donateButton}>
              Donate to Combat Human Trafficking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Label;
