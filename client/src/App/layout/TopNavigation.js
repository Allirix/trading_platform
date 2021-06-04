import { useState } from "react";
import profile from "../../assets/images/profilePicture.jpg";
import notification from "../../assets/images/notification.svg";
import "./TopNavigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function TopNavigation({ credits, firstname, lastname }) {
  return (
    <header>
      <Navbar expand="sm">
        <Navbar.Brand href="#home">Auction App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <img src={profile} alt=" hey" className="profile-img" />
            <Navbar.Text>{`${firstname} ${lastname}`}</Navbar.Text>
            <Navbar.Text>Credits: {credits}</Navbar.Text>
            <Notification />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default TopNavigation;

const Notification = () => {
  const style = { height: "fit-content", opacity: 1, display: "block" };
  const [showNotification, setShowNotification] = useState(false);
  const toggleNotification = () =>
    setShowNotification((e) => {
      console.log(e, style);
      return !e;
    });
  return (
    <>
      <button className="notification" onClick={toggleNotification}>
        <img src={notification} alt="" />
        <span className="notification-overlay">2</span>
      </button>
      <div className="notifications" id="box" style={showNotification ? style : {}}>
        <h2>
          Notifications - <span>2</span>
        </h2>
        <div className="notifications-item">
          <img
            src="https://www.ebitfy.com/public/assets/user_frontend/icons/sell-icon.png"
            alt="img"
          />
          <div className="text">
            <h4>SOLD: CPU Hours</h4>
            <p>Sold 5 CPU Hours for 100 Credits </p>
          </div>
        </div>
        <div className="notifications-item">
          <img
            src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/256/add-item-icon.png"
            alt="img"
          />
          <div className="text">
            <h4>BOUGHT: CPU Hours</h4>
            <p>Bought 5 CPU Hours for 100 Credits </p>
          </div>
        </div>
      </div>
    </>
  );
};
