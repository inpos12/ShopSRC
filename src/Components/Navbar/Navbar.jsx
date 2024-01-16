import React from "react";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import firebase from "../login/Firebase";
import style from "../Navbar/Navbar.module.css";
import "../Navbar/Navbar.module.css";
import Hamburger from "./Hamburger";
import Logo from "../Navbar/logo.png";

function LogoutButton() {
  const LoginButton = document.getElementById("login");
  const LogoutButton = document.getElementById("logout");
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      LogoutButton.style.display = "none";
      LoginButton.style.display = "block";
      alert(`로그아웃완료`);
    })
    .catch((error) => {
      // An error happened.
    });
}

const NavbarElement = () => {
  return (
    <div id="navbar">
      <div className={style.nav}>
        <div className={style.container}>
          <div className={style.menu}>
            <div className={style.logo}>
              <a href="/">
                <img src={Logo} className={style.navbar_logo}></img>
              </a>
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Shoes/">Shoes</a>
              </li>
              <li>
                <a href="/GirlCrush/">Girl Crush </a>
              </li>
              <li>
                <a href="/Daily/">Daily</a>
              </li>
            </ul>
          </div>
          <a id="login" href="/Login/">
            Login
          </a>
          <a id="logout" href="/" onClick={LogoutButton}>
            Logout
          </a>
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default NavbarElement;
