/* eslint-disable react/prop-types */
import Notifications from "./Notifications";
import ProfileDetails from "./ProfileDetails";
import Logo from "./assets/logo.png";
import Profile from "./assets/profile.jpg";
import {
  RxHamburgerMenu,
  AiOutlineSearch,
  BiSolidMicrophone,
  RiVideoAddLine,
  RiVideoAddFill,
  IoMdNotificationsOutline,
  IoMdNotifications,
  GoVideo,
  BsBroadcast,
} from "./icons.js";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = (props) => {
  const [focus, setFocus] = useState("");
  const [notificationCount, setNotificationCount] = useState(1);

  const [showCreateVideo, setShowCreateVideo] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleInputFocus = () => {
    focus ? setFocus("") : setFocus("show");
  };

  useEffect(() => {
    setNotificationCount(1);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__left-container">
        <div
          className="navbar__left-container__hamburger"
          onClick={() => {
            props.showSideBar(!props.sideBar);
            console.log(props.sideBar);
          }}
        >
          <RxHamburgerMenu />
        </div>
        <div className="navbar__left-container__logo">
          <a href="#">
            <img src={Logo} alt="Youtube Home" />
          </a>
        </div>
      </div>
      <div className="navbar__center-container">
        <div className={`navbar__center-container_search-bar`}>
          <div
            className={`navbar__center-container_search-input-focus-icon ${focus}`}
          >
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="navbar__center-container_search-input"
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
          />

          <button
            type="button"
            className="navbar__center-container_search-button"
          >
            <AiOutlineSearch />
          </button>
        </div>
        <div className="navbar__center-container_voice">
          <BiSolidMicrophone />
        </div>
      </div>
      <div className="navbar__right-container">
        <div
          className="navbar__right-container_create"
          alt=""
          onClick={() => {
            setShowCreateVideo(!showCreateVideo);
          }}
        >
          {showCreateVideo ? <RiVideoAddFill /> : <RiVideoAddLine />}
          {showCreateVideo && (
            <div className="navbar__right-container_create_sub-menu">
              <div>
                <GoVideo />
                Upload Video
              </div>
              <div>
                <BsBroadcast />
                Go Live
              </div>
            </div>
          )}
        </div>
        <div
          className="navbar__right-container_notifications"
          alt=""
          onClick={() => {
            setShowNotifications(!showNotifications);
            setNotificationCount(0);
          }}
        >
          {showNotifications ? (
            <IoMdNotifications />
          ) : (
            <IoMdNotificationsOutline />
          )}
          {notificationCount != 0 && (
            <span className="navbar__right-container_notifications_count">
              {notificationCount}
            </span>
          )}
        </div>
        <Notifications showNotifications={showNotifications} />
        <div className="navbar__right-container_profile" alt="">
          <img src={Profile} />
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
