import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HeaderFooter from "./components/HeaderFooter";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HeaderFooter />}>
          <Route path="/" index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
