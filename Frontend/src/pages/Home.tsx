import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // Import CSS module

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide access to clean and safe drinking water to
          communities in need. We believe that everyone deserves the basic human
          right of clean water, and we are committed to making a positive impact
          through sustainable projects and partnerships.{" "}
          <Link to="/about-us" className={styles.learnMoreLink}>
            Learn more
          </Link>
        </p>
      </section>

      <section className={styles.impactSection}>
        <h2>Our Impact</h2>
        <div className={styles.impactCards}>
          <div className={styles.impactCard}>
            <h3>133,030 Bottles of Water Given</h3>
            <p>
              Every donation, no matter the size, makes a difference in the
              lives of those we serve. Thank you again for your interest in The
              Giving Water. We hope you will join us in our efforts to
              positively impact the lives of those in need and create a more
              sustainable and supportive community.
            </p>
            <div className={styles.buttonContainer}>
              <Link to="/donate" className={styles.ctaButton}>
                Donate Now
              </Link>
            </div>
          </div>
          <div className={styles.impactCard}>
            <h3>1,444 Chug Challenges</h3>
            <p>
              The Chug Challenge is a fun and easy way for individuals to
              contribute to The Giving Water’s efforts to provide hydration for
              those in need. By simply chugging a bottle of water, donating $1,
              $5, $10, or more, and challenging others to do the same,
              individuals can help spread awareness about The Giving Water and
              its mission.
            </p>
            <div className={styles.buttonContainer}>
              <Link to="/chug-challenge" className={styles.ctaButton}>
                Join Chug Challenges
              </Link>
            </div>
          </div>
          <div className={styles.impactCard}>
            <h3>Partnerships with Local Communities</h3>
            <p>
              We work hand-in-hand with local communities to ensure the
              sustainability of our water projects.
            </p>
            <div className={styles.buttonContainer}>
              <Link to="/sponsorsandpartners" className={styles.ctaButton}>
                Let's Collaborate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.songSection}>
        <h2>Listen to Our Song</h2>
        <div className={styles.songContent}>
          <img
            src="/singer.png"
            alt="Candace Foshee"
            className={styles.singerImage}
          />
          <div className={styles.songText}>
            <p>
              Candace Foshee is the amazingly talented artist that helped create
              the new Rap Song from The Giving Water. Check her out on your
              music streaming platforms to see some of her other amazing work.
            </p>
            <p>
              “I am the party! My nickname is fun and games I love a good time
              and good energy. I’m hard working and determined down to earth and
              happy.”
            </p>
            <p>- Candace Foshee</p>
          </div>
          <div className={styles.songLinks}>
            <a
              href="https://drive.google.com/file/d/1bJIqb6ObGoymjvG9gr5ob5RZyC-zqeeH/view"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Download Song
            </a>
            <iframe
              src="https://drive.google.com/file/d/1bJIqb6ObGoymjvG9gr5ob5RZyC-zqeeH/preview"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay"
              className={styles.songPlayer}
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.questionsSection}>
        <p>
          If you have any questions, click{" "}
          <Link to="/faq" className={styles.learnMoreLink}>
            here
          </Link>{" "}
          to visit our FAQ page.
        </p>
      </section>
    </div>
  );
};

export default Home;
