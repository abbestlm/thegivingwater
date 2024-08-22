import { useEffect, useState } from "react";
import styles from "./AboutUs.module.css"; // Import styles as a module

interface TeamMember {
  title: string;
  content: string;
  image: string; // Added image field
}

const AboutUs = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("Founder");

  const teamMembers: Record<string, TeamMember> = {
    Founder: {
      title: "Founder: Dawn Weir",
      content: `Dawn Weir is a wonderfully accomplished woman who has been both a wife and an amazing mother. Dawn's journey began with a degree in Interior Design, which later expanded into Landscape Architecture and eventually led her into Civil and Traffic Engineering. She has hosted two very popular radio shows and podcasts. Dawn has always been a passionate community activist, supporting and creating numerous causes. Her contributions include establishing community gardens, designing public buildings, and launching a project called Community Sweep & Meet, which was supported by the City of Las Vegas. Her efforts have been featured in many magazines, newspaper articles, and local news segments for her community and humanitarian achievements.

Now, Dawn has combined her extensive skills and experience to create a new concept in philanthropy that aligns with your budget, enabling you to give and receive more. She feels truly blessed to see her dreams come true and to help others achieve theirs. Dawn is passionate about bringing “Conscious Commerce” to the forefront of everyone’s minds. This innovative and unique approach marries philanthropy with commerce, creating what she calls “Conscious Commerce.” At The Giving Water, we believe that good business practices go beyond mere transactions; they involve partnerships and alliances. While everyone in the supply chain has their own agenda—suppliers, distributors, retailers, and consumers—we understand that it's crucial to have a shared agenda where everyone wins.`,
      image: "/founder.jpg", // Path to Dawn's image
    },
    Treasurer: {
      title: "Treasurer: Dr. Richard Wall",
      content: `Dr. Richard Wall was born on a military base in Kansas and spent most of his childhood moving from base to base. After high school, he joined the US Army and was trained as a combat medic and radiologic technologist. Currently, he serves as the senior cardiac cath lab technologist at Spring Valley Hospital and is an adjunct faculty instructor for the Northwestern State University of Louisiana. Dr. Wall holds a BS in Medical Imaging and an MS in Radiologic Science Education, and he is set to receive his doctorate in Health Sciences in May 2020. He has been published several times in prestigious medical journals.

Dr. Wall is delighted to have the opportunity to give back to the heart of the community through the incredible work of The Giving Water.`,
      image: "/Treasurer.jpg", // Path to Richard's image
    },
    Secretary: {
      title: "Secretary: Gideon Alingi",
      content: `Gideon Alingi, A tech enthusiast, Website Developer, and Graphic Designer was born and raised in Cameroon, Africa. Springing from a continent with serious water needs, he quickly found an interest in The Giving Water’s Mission to hydrate America with a firm confidence that the ripple effect would spread like a flood and crash across Africa and other parts of the world where access to portable drinking water is a great challenge. Talking about challenges, our Chug Challenge is just so fun. Click here to see what others have done and you’re more than welcome to challenge someone to do the same.

Gideon currently resides in Kigali, Rwanda where he was forced to relocate due to big security concerns, thanks to The Giving Water’s aid. As a go-getter and a devoted young man from Africa, it is only natural that he gives to the best of his abilities to foster the Organization’s mission to Hydrate society.`,
      image: "/Secretary.jpg", // Path to Richard's image
    },
  };

  const principles = [
    {
      title: "HYDRATION IS EVERYTHING",
      content: `We know hydration is everything or we would all be dead in about 10 days. We give 100% to hydrating you America.`,
    },
    {
      title: "HYDRATION HABITS",
      content: `If you hydrate right, you will feel amazing, and everything else will come easier because you are a clear thinking machine. We are devoted to creating new Habits of Hydration for all Americans and a future generation to come as Hydration is the future.`,
    },
    {
      title: "SUCCESS THROUGH HYDRATION",
      content: `Adding to businesses brands and supporting community hydration, Charities receive the flow of water and funds they did not think were possible. Most of all, the community is now able to give within their bottled water budget to provide hydration for all Americans. Establishing a stronger hydrated America as The Giving Water is the future hydration of America.`,
    },
    {
      title: "GIVE AND RECEIVE FREELY",
      content: `There are many challenges in life, but giving should be one of them. The Giving Water was created specifically to solve the problem of giving so that all can give without sacrifice. The Giving Water is changing the status of bottled water.`,
    },
    {
      title: "HYDRATED LIFE",
      content: `Hydration is essential to life, and you are essential to us, which is why The Giving Water is providing free bottled water to Hydrate America. We do the work, and you get the rewards.`,
    },
    {
      title: "HYDRATE AMERICA",
      content: `The Giving Water is here to Hydrate America. Hydration is paramount to building a healthy and successful body. Giving is paramount to hydrating your heart and letting your spirit rise with the tides, as a rising tide floats all boats. The Giving Water is the hydration future of America.`,
    },
    {
      title: "HYDRATION HONESTY",
      content: `Honesty being hydrated feels the BEST. We want America hydrated and to feel the best because America is The BEST. Through day-to-day consistent hydration interaction habits, we can show our youth the benefit of hydration so that they will never experience the death of dehydration.`,
    },
    {
      title: "HYDRATION CHALLENGE",
      content: `In a challenge, there are “No Quitters” in a Chug Challenge to Hydrate America NO ONE GOES THIRSTY. Please take The Giving Water Chug Challenge to Hydrate America and Provide for others and Donate and Hydrate Your Heart.`,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:8081/settings") // Ensure this URL matches your backend
      .then((response) => response.json())
      .then((data) => {
        if (data && data.content) {
          setContent(data.content);
        } else {
          console.error("No content found or data is missing");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setLoading(false);
      });
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.content}>
            <h2>About The Giving Water</h2>
            <p>{content}</p>
          </div>

          {/* Team Section */}
          <div className={`${styles.content} ${styles.clearfix}`}>
            <h2>Our Team</h2>
            <div className={styles.tabs}>
              {Object.keys(teamMembers).map((key) => (
                <button
                  key={key}
                  className={`${styles.tab} ${
                    activeTab === key ? styles.activeTab : ""
                  }`}
                  onClick={() => handleTabClick(key)}
                >
                  {teamMembers[key].title}
                </button>
              ))}
            </div>
            <div className={styles.teamMemberSection}>
              <img
                src={teamMembers[activeTab].image}
                alt={teamMembers[activeTab].title}
                className={styles.teamImage}
              />
              <h2>{teamMembers[activeTab].title}</h2>
              <p>{teamMembers[activeTab].content}</p>
            </div>
          </div>

          {/* Principles Section */}
          <div className={styles.principlesSection}>
            <h2>OUR 8 PRINCIPLES</h2>
            <div className={styles.principlesList}>
              {principles.map((principle, index) => (
                <div key={index} className={styles.principle}>
                  <h3>{principle.title}</h3>
                  <p>{principle.content}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutUs;
