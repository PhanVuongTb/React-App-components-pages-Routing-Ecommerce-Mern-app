import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/web/Header";
import Footer from "../components/web/Footer";
import { Toaster } from "react-hot-toast";

const Layoutweb = () => {
  return (
    <div>
      <header>
        <Toaster />
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
