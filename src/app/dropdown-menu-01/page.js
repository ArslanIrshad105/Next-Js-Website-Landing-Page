"use client";
import React, { useState } from "react";
import "../dropdown-menu-01/style.css";
import { ClickAwayListener } from "@mui/base";
const DropdownMenu = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  return (
    <header>
      <span className="navigation__group">
        <img
          className="icon"
          src="assets/media/dropdown-menu-01/message.svg"
          alt="Message"
        />
        <img
          className="icon"
          src="assets/media/dropdown-menu-01/notification.svg"
          alt="Notification"
        />
        <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
          <div>
            <img
              className="profile"
              src="assets/media/dropdown-menu-01/Arslan-profile.jpg"
              alt="Joe Doe Picture"
              onClick={() => setIsOpenSelect(!isOpenSelect)}
            />

            <div
              className={
                isOpenSelect
                  ? "dropdown__wrapper dropdown__wrapper--fade-in"
                  : "none"
              }
            >
              <div className="dropdown__group">
                <div className="user-name">Arslan Irshad</div>
                <div className="email">abc@domain.com</div>
              </div>
              <hr className="divider" />
              <nav>
                <ul>
                  <li>
                    <img
                      src="assets/media/dropdown-menu-01/profile.svg"
                      alt="Profile"
                    />{" "}
                    My Profile
                  </li>
                  <li>
                    <img
                      src="assets/media/dropdown-menu-01/settings.svg"
                      alt="Settings"
                    />{" "}
                    Settings
                  </li>
                </ul>
                <hr className="divider" />
                <ul>
                  <li>
                    <img
                      src="assets/media/dropdown-menu-01/tutorials.svg"
                      alt="Tutorials"
                    />{" "}
                    Tutorials
                  </li>
                  <li>
                    <img
                      src="assets/media/dropdown-menu-01/help.svg"
                      alt="Help"
                    />{" "}
                    Help Center
                  </li>
                </ul>
                <hr className="divider" />
                <ul>
                  <li>
                    <img
                      src="assets/media/dropdown-menu-01/premium.svg"
                      alt="Premium"
                    />
                    Go Premium
                  </li>
                  <li style={{ color: "#E3452F" }}>
                    <img
                      src="assets/media/dropdown-menu-01/logout.svg"
                      alt="Log Out"
                    />
                    Log out
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </ClickAwayListener>
      </span>
    </header>
  );
};

export default DropdownMenu;
