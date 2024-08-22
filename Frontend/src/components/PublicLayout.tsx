import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Inline styles for the layout container
  const layoutStyle: React.CSSProperties = {
    backgroundImage: "url(/images1.png)", // Path to your image in the public folder
    backgroundSize: "cover", // Cover the entire container
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Optional: makes the background fixed
    minHeight: "100vh", // Ensure the container covers the full viewport height
    display: "flex",
    flexDirection: "column", // Correctly typed value for flexDirection
    width: "100%",
    margin: "0", // Ensure there's no margin causing empty space
  };

  return (
    <div style={layoutStyle}>
      {!isAdminRoute && <Header />}
      <main style={{ flex: "1", padding: "20px" }}>{children}</main>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default PublicLayout;
  