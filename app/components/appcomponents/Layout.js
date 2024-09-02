"use client";
import Header from "./Header";
import Footer from "./Footer";
import DrawerDialoge from "./DrawerDialoge";
import { useState } from "react";

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onMenuCLick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const OnDrawerButtonClicked = (item) => {
    console.log(item.name);
  };

  return (
    <div>
      <Header onMenuCLick={onMenuCLick} />
      <main className="flex">{children}</main>
      <Footer />
      <DrawerDialoge
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        OnDrawerButtonClicked={OnDrawerButtonClicked}
      />
    </div>
  );
};

export default Layout;
