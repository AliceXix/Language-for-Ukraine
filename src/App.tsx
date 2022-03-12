import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Articles, Blogs, Home } from "./components/pages";
// import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import ReportBug from "./components/ReportBug";
export default function App() {
  return (
    <Router>
      <Banner />
      {/* <NavBar /> */}
      <ReportBug />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}
