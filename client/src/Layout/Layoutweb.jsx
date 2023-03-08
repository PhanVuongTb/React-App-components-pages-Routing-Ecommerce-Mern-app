import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/web/Header";
import Footer from "../components/web/Footer";

const Layoutweb = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layoutweb;
