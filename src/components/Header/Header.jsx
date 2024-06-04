import React from "react";
import "../../styles/Header.css";
import logo from "../../assets/img/dumble.png";

const nav__links = [
  {
    path: "#",
    display: "Home",
  },
  {
    path: "#",
    display: "Schedule",
  },
  {
    path: "#",
    display: "Classes",
  },
  {
    path: "#",
    display: "Pricing",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>HealthCoach</h2>
          </div>
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
