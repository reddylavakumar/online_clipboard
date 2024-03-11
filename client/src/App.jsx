import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
import Home from "./Home";
import Header from "./Header";
import Footer from "./footer";
import Retrieve from "./Retrieve";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/retrieve" element={<Retrieve />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
