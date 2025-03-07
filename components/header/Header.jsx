import React from "react";
import Navbar from "./Navbar";
import { Logo } from "./Logo";
import { Login } from "./Login";

function Header() {
  return (
    <header className="flex items-center justify-between  h-20  mt-2 ">
      <div>
        <Logo />
      </div>
      <Navbar />
      <Login />
    </header>
  );
}

export default Header;
