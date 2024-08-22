import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const EditAboutUs: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [contact, setContact] = useState<{
    phone: string;
    email: string;
    address: string;
  }>({
    phone: "",
    email: "",
    address: "",
  });
  const [socialMedia, setSocialMedia] = useState<{
    facebook: string;
    twitter: string;
    instagram: string;
  }>({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  useEffect(() => {
    fetch("http://localhost:8081/settings")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setContent(data.content || "");
          setContact(data.contact || { phone: "", email: "", address: "" });
          setSocialMedia(
            data.socialMedia || { facebook: "", twitter: "", instagram: "" }
          );
        } else {
          console.error("No data found");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    // Prepare the data to send, excluding empty values
    const dataToSend: any = {
      content: content.trim() || undefined,
      contact: {
        phone: contact.phone.trim() || undefined,
        email: contact.email.trim() || undefined,
        address: contact.address.trim() || undefined,
      },
      socialMedia: {
        facebook: socialMedia.facebook.trim() || undefined,
        twitter: socialMedia.twitter.trim() || undefined,
        instagram: socialMedia.instagram.trim() || undefined,
      },
    };

    // Filter out undefined or empty fields
    const filteredData: any = {};
    for (const key in dataToSend) {
      if (
        dataToSend[key] &&
        (typeof dataToSend[key] === "object"
          ? Object.keys(dataToSend[key]).length > 0
          : dataToSend[key])
      ) {
        filteredData[key] = dataToSend[key];
      }
    }

    console.log("Sending data to server:", filteredData); // Log the data being sent

    fetch("http://localhost:8081/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filteredData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          console.error("Error updating data:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("An error occurred while saving data. Please try again.");
      });
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              {/* Contact Information Fields */}
              <div className="mb-4">
                <h2 className="text-danger border-bottom pb-2 mb-4">
                  Contact Information
                </h2>
                <div className="form-group mb-3">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={contact.phone}
                    onChange={(e) =>
                      setContact({ ...contact, phone: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={contact.address}
                    onChange={(e) =>
                      setContact({ ...contact, address: e.target.value })
                    }
                  />
                </div>

                {/* Social Media Links Fields */}
                <div className="mb-4">
                  <h2 className="text-danger border-bottom pb-2 mb-4">
                    Social Media Links
                  </h2>
                  <div className="form-group mb-3">
                    <label>Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialMedia.facebook}
                      onChange={(e) =>
                        setSocialMedia({
                          ...socialMedia,
                          facebook: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialMedia.twitter}
                      onChange={(e) =>
                        setSocialMedia({
                          ...socialMedia,
                          twitter: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      value={socialMedia.instagram}
                      onChange={(e) =>
                        setSocialMedia({
                          ...socialMedia,
                          instagram: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              {/* About Us Content Field */}
              <div className="mb-4">
                <h2 className="text-danger border-bottom pb-2 mb-4">
                  About Us Content
                </h2>
                <textarea
                  className="form-control"
                  value={content}
                  onChange={handleChange}
                  rows={15}
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-danger" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAboutUs;
