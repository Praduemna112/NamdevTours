import { useState } from "react";
import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Navbar1 from "./components/Navbar/Navbar1";
import HeroSection from "./components/HeroSection/HeroSection";
import HeroSection2 from "./components/HeroSection/HeroSection2";
import CounterPage from "./components/CounterPage/CounterPage";
import FeacturePage from "./components/FeactureSection/FeacturePage";
//import Feacture from "./components/FeactureSection/Feacture";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Model from "./components/ModelView/Model";
import EnquirePage from "./components/EnquirePage/EnquirePage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Privacy_Policy from "./components/Privacy_Policy/Privacy_Policy";
import Terms_Conditions from "./components/Terms_&_Conditions/Terms_Conditions";
import Return_Refund_Policy from "./components/Return_Refund_Policy/Return_Refund_Policy";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import TravelGrid from "./components/TravelGrid/TravelGrid";
import TravelDetail from "./components/TravelGrid/TravelDetail";

import DestinationList from "./components/Destination/DestinationList";
import OurTeam from "./components/Destination/OurTeam";
import WhatWeOffer from "./components/Destination/WhatWeOffer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel/:id" element={<TravelDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/destination/destination-list" element={<DestinationList />} />
          <Route path="/destination/our-team" element={<OurTeam />} />
          <Route path="/destination/what-we-offer" element={<WhatWeOffer />} />
          {/* <Route path="/features" element={<Feacture />} /> */}
          
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/models" element={<Model />} /> */}
          {/* <Route path="/enquire" element={<EnquirePage />} /> */}
          {/* <Route path="/privacypolicy" element={<Privacy_Policy />} /> */}
          {/* <Route path="/terms_conditions" element={<Terms_Conditions />} /> */}
          {/* <Route
            path="/return_refund_policy"
            element={<Return_Refund_Policy />}
          /> */}
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <HeroSection />
    <TravelGrid />
    <CounterPage />
    <div className="my-12" /> 
    <HeroSection2/>
    {/* <FeacturePage /> */}
    <FeacturePage/>
  </div>
);

export default App;
