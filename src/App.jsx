import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./page/Movie";
import MovieDetails from "./page/MovieDetails";
import Header from "./components/Header";
import Layout from "./page/Layout";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="flex flex-col h-screen">
        <Header />
        <main className=" ">
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<Movie />}
              />
              <Route
                path="/movies/:id"
                element={<MovieDetails />}
              />
            </Routes>
          </Layout>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
