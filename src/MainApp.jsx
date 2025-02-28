import "./App.css";
import AppRoutes from "./AppRoutes";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppContext } from "./app/context/AppContext";
import Sidebar from "./components/Sidebar";
import SearchSidebar from "./components/SearchSidebar";
import ScrollToTop from "./components/ScrollToTop";
import NewsLetter from "./components/NewsLetter";
import Cookies from "./components/Cookies";

function MainApp() {
  const { activeMenu, openSearchMenu } = useAppContext();

  return (
    <div className="font-[Poppins]">
      <div
        className={`lg:hidden fixed top-0 left-0 z-[9999] ${
          activeMenu ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-1000`}
      >
        <Sidebar />
      </div>
      <div
        className={`lg:hidden fixed top-0 left-0 z-[9999] ${
          openSearchMenu ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-1000`}
      >
        <SearchSidebar />
      </div>
      <Header />
      <ScrollToTop>
        <AppRoutes />
      </ScrollToTop>
      <NewsLetter />
      <Footer />
    <Cookies/>
      

    </div>
  );
}

export default MainApp;
