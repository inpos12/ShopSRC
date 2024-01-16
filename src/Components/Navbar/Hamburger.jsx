import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "../Navbar/Hamburger.module.css";
import Logo from "../Navbar/logo.png";

function LogoutButton() {
  const LoginButton = document.getElementById("Login_Mobile_a");
  const LogoutButton = document.getElementById("Logout_Mobile_a");
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      alert(`로그아웃완료`);
      LoginButton.style.display = "block";
      LogoutButton.style.display = "none";
    })
    .catch((error) => {
      // An error happened.
    });
}

function hamburger() {
  return (
    <>
      <input type="checkbox" id="icon"></input>
      <label for="icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div id="sidebar">
        <div id="Login_Mobile">
          <a id="Login_Mobile_a" href="/Login">
            Login
          </a>
          <a id="Logout_Mobile_a" href="/" onClick={LogoutButton}>
            LogOut
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
            <a href="/GirlCrush_Look/">Girl Crush</a>
          </li>
          <li>
            <a href="/Daily_Look/">Daily</a>
          </li>

          <li>
            <a href="/Login/">Login</a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default hamburger;
