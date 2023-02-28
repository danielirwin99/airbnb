import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import React, { lazy, Suspense } from "react";

function App() {
  const Home = lazy(() => import("./pages/Home"));

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
