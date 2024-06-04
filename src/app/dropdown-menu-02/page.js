"use client";
import React, { useState } from "react";
import "../dropdown-menu-02/style.css";
import { ClickAwayListener } from "@mui/base";
const DropdownMenu = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  return (
    <header>
      <div className="navigation__group">
        <button className="icon-wrapper">
          <img
            className="icon"
            src="assets/media/dropdown-menu-02/message.svg"
            alt="Message"
          />
        </button>
        <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
          <div onClick={() => setIsOpenSelect(!isOpenSelect)}>
            <div className="icon-wrapper notifications">
              <button type="button">
                <img
                  className="icon"
                  src="assets/media/dropdown-menu-02/notification.svg"
                  alt="Notification"
                />
              </button>
              <div className="notification-mark notification-mark--pulsing"></div>
            </div>
            <div
              className={
                isOpenSelect
                  ? "dropdown__wrapper dropdown__wrapper--fade-in"
                  : "none"
              }
            >
              <div className="notifications-top">
                <h2>Notifications</h2>
              </div>
              <div className="notification-items">
                <div className="notification-item notification-item--recent">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src="assets/media/dropdown-menu-02/jason.jpg"
                      alt="Jason Alexander"
                    />
                  </div>
                  <div className="notification-item__body">
                    <div>
                      <strong>Jason Alexander</strong> completed{" "}
                      <strong>Issue 131</strong>
                    </div>
                    <span className="time">6 min ago</span>
                  </div>
                  <div className="border"></div>
                </div>
                <div className="notification-item notification-item--recent">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src="assets/media/dropdown-menu-02/michelle.jpg"
                      alt="Michelle Claude"
                    />
                  </div>
                  <div className="notification-item__body">
                    <div>
                      <strong>Michelle Claude</strong> opened a new{" "}
                      <strong>Issue 152</strong>
                    </div>
                    <span className="time">8 min ago</span>
                  </div>
                </div>

                <div className="notification-item">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src="assets/media/dropdown-menu-02/ricahrd_taylor.jpg"
                      alt="Richard Taylor"
                    />
                  </div>
                  <div className="notification-item__body">
                    <div>
                      <strong>Richard Taylor</strong> edited{" "}
                      <strong>Road Map 2023</strong>
                    </div>
                    <span className="time">1 week ago</span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src="assets/media/dropdown-menu-02/jennifer.jpg"
                      alt="Jennifer Floyd"
                    />
                  </div>
                  <div className="notification-item__body">
                    <div>
                      <strong>Jennifer Floyd</strong> created{" "}
                      <strong>Road Map 2023</strong>
                    </div>
                    <span className="time">1 week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ClickAwayListener>
        <button type="button" className="profile">
          <img
            src="assets/media/dropdown-menu-02/Arslan.jpg"
            alt="Profile Picture"
          />
        </button>
      </div>
      {/* <div className="dropdown__wrapper hide dropdown__wrapper--fade-in none"> */}
    </header>
  );
};

export default DropdownMenu;
