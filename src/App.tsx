import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetail/MovieDetail";
import './App.scss'
function App() {

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
