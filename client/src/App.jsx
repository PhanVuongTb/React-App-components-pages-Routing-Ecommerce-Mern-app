import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layoutweb from "./Layout/Layoutweb";
import HonePage from "./pages/web/HomePage";
import About from "./pages/web/About";
import Contact from "./pages/web/Contact";
import Policy from "./pages/web/Policy";
import Pagenotfound from "./pages/web/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layoutweb />}>
          <Route index element={<HonePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
