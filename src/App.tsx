import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Contactus from "./Pages/SubMenu/Contactus";
import Home from "./Pages/Home";
import About from "./Pages/Menu/About";
import Circulation from "./Pages/SubMenu/Circulation";
import Cs from "./Pages/Menu/Cs";
import Distribute from "./Pages/SubMenu/Distribute";
import Faq from "./Pages/SubMenu/Faq";
import Franchise from "./Pages/SubMenu/Franchise";
import Insurance from "./Pages/SubMenu/Insurance";
import News from "./Pages/SubMenu/News";
import Notice from "./Pages/SubMenu/Notice";
import Recruit from "./Pages/Menu/Recruit";
import Service from "./Pages/Menu/Service";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/circulation" element={<Circulation />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/cs" element={<Cs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/distribute" element={<Distribute />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/news" element={<News />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
