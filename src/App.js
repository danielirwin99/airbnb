import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Booking from "./pages/Booking"
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
