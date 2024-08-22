import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import ChugChallenge from "./pages/ChugChallenge";
import SponsorsAndPartners from "./pages/SponsorsAndPartners";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Label from "./pages/Label"; // Ensure casing is correct
import EditFAQ from "./pages/EditFAQ";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/AdminLayout";
import AdminRoute from "./components/AdminRoute";
import PublicLayout from "./components/PublicLayout";
import EditAboutUs from "./pages/EditAboutUs";
import ManageEntities from "./pages/ManageEntities";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<EditAboutUs />} />
          <Route path="EditAboutUs" element={<EditAboutUs />} />
          <Route path="ManageEntities" element={<ManageEntities />} />
          <Route path="EditFAQ" element={<EditFAQ />} />
        </Route>
        <Route
          path="/*"
          element={
            <PublicLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/Label" element={<Label />} />{" "}
                {/* Correct route */}
                {/* Correct component */}
                <Route path="/chug-challenge" element={<ChugChallenge />} />
                <Route
                  path="/SponsorsAndPartners"
                  element={<SponsorsAndPartners />}
                />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </PublicLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
