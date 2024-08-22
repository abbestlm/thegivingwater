import React, { useEffect, useState } from "react";
import styles from "./SponsorsAndPartners.module.css";

interface Entity {
  id: number;
  name: string;
  description: string;
  logo_url: string;
}

const SponsorsAndPartners: React.FC = () => {
  const [sponsors, setSponsors] = useState<Entity[]>([]);
  const [partners, setPartners] = useState<Entity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sponsorsResponse = await fetch("http://localhost:8081/sponsors");
        const sponsorsData = await sponsorsResponse.json();
        setSponsors(sponsorsData);

        const partnersResponse = await fetch("http://localhost:8081/partners");
        const partnersData = await partnersResponse.json();
        setPartners(partnersData);
      } catch (error) {
        setError("Failed to load data. Please try again later.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        <section className={styles.section}>
          <h1 className={styles.title}>Our Partners</h1>
          <p className={styles.description}>
            We are proud to collaborate with our partners to achieve our
            mission. Their support and collaboration are vital to our success.
          </p>
          <ul className={styles.list}>
            {partners.map((partner) => (
              <li key={partner.id} className={styles.item}>
                <img
                  src={partner.logo_url}
                  alt={partner.name}
                  className={styles.logo}
                />
                <h2>{partner.name}</h2>
                <p>{partner.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h1 className={styles.title}>Our Sponsors</h1>
          <p className={styles.description}>
            We are deeply grateful for the support of our sponsors. Their
            generous contributions help us achieve our mission.
          </p>
          <ul className={styles.list}>
            {sponsors.map((sponsor) => (
              <li key={sponsor.id} className={styles.item}>
                <img
                  src={sponsor.logo_url}
                  alt={sponsor.name}
                  className={styles.logo}
                />
                <h2>{sponsor.name}</h2>
                <p>{sponsor.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Become a Sponsor or Partner</h2>
        <p className={styles.contactDescription}>
          If you are interested in sponsoring or partnering with us and having
          your brand displayed here, please contact us for more details.
        </p>
        <a
          href="https://www.linkedin.com/in/dawn-weir-2472411b0/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactButton}
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default SponsorsAndPartners;
