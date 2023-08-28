/* eslint-disable react/prop-types */
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
  SlSettings,
  GoVideo,
  GoKebabHorizontal,
  BsBroadcast,
  PiEyeSlashLight,
} from "./icons.js";
import { useState } from "react";
import { useEffect } from "react";

const NavBar = (props) => {
  const [focus, setFocus] = useState("");
  const [notificationCount, setNotificationCount] = useState(1);

  const [showCreateVideo, setShowCreateVideo] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [notificationSettingsVisibility, setNotificationSettingsVisibility] =
    useState({});

  const arr = [
    {
      bodyText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores cupiditate, accusantium quaerat aut",
      time: "2 hours ago",
    },
    {
      bodyText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores cupiditate, accusantium quaerat aut",
      time: "2 hours ago",
    },
    {
      bodyText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores cupiditate, accusantium quaerat aut",
      time: "2 hours ago",
    },
    {
      bodyText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores cupiditate, accusantium quaerat aut",
      time: "2 hours ago",
    },
    {
      bodyText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores cupiditate, accusantium quaerat aut",
      time: "2 hours ago",
    },
  ];

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
        <div
          className={`navbar__right-container_notifications_detailed ${
            showNotifications && "show"
          }`}
        >
          <div className="navbar__right-container_notifications_detailed_header">
            <div className="navbar__right-container_notifications_detailed_header-title">
              Notifications
            </div>
            <div className="navbar__right-container_notifications_detailed_header-settings">
              <SlSettings />
            </div>
          </div>
          <div className="navbar__right-container_notifications_detailed_body">
            {arr.map((value, index) => (
              <div
                key={index}
                className="navbar__right-container_notifications_detailed_body-notification"
              >
                <div className="navbar__right-container_notifications_detailed_body-notification-profile">
                  <img src={Profile} />
                </div>
                <div className="navbar__right-container_notifications_detailed_body-notification-body">
                  <p className="navbar__right-container_notifications_detailed_body-notification-body-text">
                    {value.bodyText}
                  </p>
                  <p className="navbar__right-container_notifications_detailed_body-notification-body-date">
                    {value.time}
                  </p>
                </div>
                <div className="navbar__right-container_notifications_detailed_body-notification-image">
                  <img src={Profile} />
                </div>
                <div
                  className="navbar__right-container_notifications_detailed_body-notification-settings"
                  onClick={() => {
                    setNotificationSettingsVisibility((prevState) => {
                      const newState = { ...prevState };
                      Object.keys(newState).forEach((key) => {
                        newState[key] = false;
                      });
                      newState[index] = !prevState[index];
                      return newState;
                    });
                  }}
                >
                  <GoKebabHorizontal />
                  {notificationSettingsVisibility[index] && (
                    <NotificationSettings arr={arr} index={index} />
                  )}
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
        <div className="navbar__right-container_profile" alt="">
          <img src={Profile} />
        </div>
      </div>
    </div>
  );
};

function NotificationSettings(arr, index) {
  return (
    <div
      className={`navbar__right-container_notifications_detailed_body-notification-settings_details`}
    >
      <div className="navbar__right-container_notifications_detailed_body-notification-settings_details-setting">
        <div className="navbar__right-container_notifications_detailed_body-notification-settings_details-setting_icon">
          <PiEyeSlashLight />
        </div>
        <div
          className="navbar__right-container_notifications_detailed_body-notification-settings_details-setting_desc"
          onClick={() => {
            arr.splice(index, 1);
          }}
        >
          Hide this notification
        </div>
      </div>
      <div className="navbar__right-container_notifications_detailed_body-notification-settings_details-setting">
        <div className="navbar__right-container_notifications_detailed_body-notification-settings_details-setting_icon"></div>
        <div className="navbar__right-container_notifications_detailed_body-notification-settings_details-setting_desc">
          Turn off all from Beyhan Budak
        </div>
      </div>
    </div>
  );
}

export default NavBar;
