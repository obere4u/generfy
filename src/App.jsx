import React from "react";
import Movie from "./page/Movie";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Movie />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
