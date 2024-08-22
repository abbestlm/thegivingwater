import React from "react";
import styles from "./ChugChallenge.module.css"; // Import CSS module

const ChugChallenge: React.FC = () => {
  return (
    <div className={styles.chugChallengeContainer}>
      <h1 className={styles.chugChallengeTitle}>
        The Giving Water Chug Challenge
      </h1>
      <p className={styles.chugChallengeDescription}>
        Take part in The Giving Water "Chug Challenge" to help provide clean
        water to those in need.
      </p>
      <p className={styles.chugChallengeDetails}>
        All you have to do is drink water by chugging any size bottle or glass,
        shout out yourself, and challenge someone else. After that, make a
        donation to support our mission of providing water for everyone.
      </p>
      <p className={styles.chugChallengeMission}>
        By participating, you'll be helping The Giving Water's mission to
        provide hydration for all Americans and inspire healthy hydration
        habits.
      </p>
      <p className={styles.chugChallengeInstructions}>
        To participate:
        <ul>
          <li>
            1. Create a 55-second video of you chugging any size bottle of
            water.
          </li>
          <li>2. Shout out The Giving Water and donate $10.00.</li>
          <li>3. Challenge someone else to do the same.</li>
          <li>4. Post your video on @TheGivingWater instagram and tag us!</li>
        </ul>
        <strong>
          Remember to follow, like, and tag someone else to keep the challenge
          going!
        </strong>
      </p>
      <a
        href="https://www.instagram.com/TheGivingWater"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButtonLink} // Optional: style the link as a button
      >
        <button className={styles.ctaButton}>Join the Challenge</button>
      </a>

      {/* Main Video Section */}
      <div className={styles.mainVideoContainer}>
        <h2 className={styles.videoTitle}>Intro Video</h2>
        <iframe
          className={styles.mainVideo}
          src="https://www.youtube.com/embed/s_agW6SZsAY"
          title="Main Explanation Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Other Videos Section */}
      <div className={styles.otherVideosContainer}>
        <h2 className={styles.videoTitle}>Watch How Others Did It</h2>
        <div className={styles.videoGrid}>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/uBlLfivEjXA"
              title="Video Example 1"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/K7Cd6u7PIyM"
              title="Video Example 2"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/90S6N-ugwK8"
              title="Video Example 3"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/rfMLJIxBs-M"
              title="Video Example 4"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/KSWes1pigew"
              title="Video Example 5"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/iKd5xYLZZvM"
              title="Video Example 6"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/O-ya4qCcYNw"
              title="Video Example 7"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/bSfE8WyXLKQ"
              title="Video Example 8"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChugChallenge;
