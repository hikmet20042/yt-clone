/* eslint-disable react/prop-types */
import { SlSettings, GoKebabHorizontal, PiEyeSlashLight } from "./icons.js";
import { useState } from "react";
import Profile from "./assets/profile.jpg";

const Notifications = (props) => {
  const [notificationSettingsVisibility, setNotificationSettingsVisibility] =
    useState({});
  let { showNotifications } = props;
  console.log(props);
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
  return (
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

export default Notifications;
