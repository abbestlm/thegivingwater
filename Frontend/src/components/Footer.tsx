import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer: React.FC = () => {
  const [settings, setSettings] = useState<{
    contact: {
      phone: string;
      email: string;
      address: string;
    };
    favicon: string;
    socialMedia: {
      facebook: string;
      twitter: string;
      instagram: string;
    };
  }>({
    contact: {
      phone: "",
      email: "",
      address: "",
    },
    favicon: "",
    socialMedia: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
  });

  useEffect(() => {
    fetch("http://localhost:8081/settings")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setSettings({
            contact: {
              phone: data.contact?.phone || "",
              email: data.contact?.email || "",
              address: data.contact?.address || "",
            },
            favicon: data.favicon || "",
            socialMedia: {
              facebook: data.socialMedia?.facebook || "",
              twitter: data.socialMedia?.twitter || "",
              instagram: data.socialMedia?.instagram || "",
            },
          });
        } else {
          console.error("No settings data found");
        }
      })
      .catch((error) => console.error("Error fetching settings:", error));
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Phone:</strong> {settings.contact.phone || "N/A"}
              </li>
              <li>
                <strong>Email:</strong> {settings.contact.email || "N/A"}
              </li>
              <li>
                <strong>Address:</strong> {settings.contact.address || "N/A"}
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3 text-center">
            <img
              src={settings.favicon || "/favicon.png"}
              alt="Company Logo"
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href={settings.socialMedia.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={settings.socialMedia.twitter || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={settings.socialMedia.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
