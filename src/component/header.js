import React, { useState } from "react";
import menuIcon from "../Assets/images/icon-menu.svg";
import closeIcon from "../Assets/images/icon-close-menu.svg";
import todoIcon from "../Assets/images/icon-todo.svg";
import calendarIcon from "../Assets/images/icon-calendar.svg";
import reminderIcon from "../Assets/images/icon-reminders.svg";
import planningIcon from "../Assets/images/icon-planning.svg";
import "./header.css";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFeaturesMenu, setShowFeaturesMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  return (
    <>
      <nav className="desktop-nav">
        <div className="desktop-menu">
          <h1>Snap</h1>
          <ul>
            <li
              id="features"
              onClick={() => setShowFeaturesMenu(() => !showFeaturesMenu)}
            >
              <span>Features</span>
              <span>
                <i
                  class={
                    !showFeaturesMenu
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-angle-up"
                  }
                ></i>
              </span>
              <ul className={showFeaturesMenu ? "features-menu" : "hide"}>
                <li>
                  <img src={todoIcon} alt="todo icon" />
                  <span>Todo List</span>
                </li>
                <li>
                  <img src={calendarIcon} alt="todo icon" />
                  <span>Calendar</span>
                </li>
                <li>
                  <img src={reminderIcon} alt="todo icon" />
                  <span>Reminders</span>
                </li>
                <li>
                  <img src={planningIcon} alt="todo icon" />
                  <span>Planning</span>
                </li>
              </ul>
            </li>
            <li
              id="company"
              onClick={() => setShowCompanyMenu(() => !showCompanyMenu)}
            >
              <span>Company</span>
              <span>
                <i
                  class={
                    !showCompanyMenu
                      ? "fa-solid fa-angle-down"
                      : "fa-solid fa-angle-up"
                  }
                ></i>
              </span>
              <ul className={showCompanyMenu ? "company-menu" : "hide"}>
                <li>
                  <span>Calendar</span>
                </li>
                <li>
                  <span>Reminders</span>
                </li>
                <li>
                  <span>Planning</span>
                </li>
              </ul>
            </li>
            <li>
              <span>Careers</span>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </div>
        <div className="login-register">
          <span>Login</span>
          <span className="register">Register</span>
        </div>
      </nav>
      <nav className="mobile-nav">
        <h1>Snap</h1>
        <div className="hamburger">
          <img
            src={menuIcon}
            alt="menu icon"
            onClick={() => setShowMenu(() => !showMenu)}
          />
          <div className={showMenu ? "mobile-menu" : "hide"}>
            <div className="menus">
              <div>
                <img
                  src={closeIcon}
                  alt="close menu icon"
                  onClick={() => setShowMenu(() => !showMenu)}
                />
              </div>
              <ul>
                <li>
                  <span>Features</span>
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </li>
                <li>
                  <span>Company</span>
                  <span>
                    <i class="fa-solid fa-angle-down"></i>
                  </span>
                </li>
                <li>
                  <span>Careers</span>
                </li>
                <li>
                  <span>About</span>
                </li>
                <li className="login-register">
                  <span className="login">Login</span>
                  <span className="register">Register</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
