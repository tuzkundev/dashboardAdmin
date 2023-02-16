import React from "react";
import DropDown from "../dropdown/DropDown";
import "./topnav.css";

import notifications from "../../assets/JsonData/notification.json";

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const TopNav = () => {
  console.log(notifications);

  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <DropDown icon="bx bx-user" />
        </div>
        <div className="topnav__right-item">
          <DropDown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
