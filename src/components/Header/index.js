import React from "react";
import "./style.css";
import userSvg from "../../assets/user.svg";
function Header() {
  function logout() {
    alert('User Logged Out');
  }



  return (
    <div className="navbar">
      <p className="navbar-heading">Financly.</p>
        <p className="navbar-link" onClick={logout}>
          <span style={{ marginRight: "1rem" }}>
            <img
              src={userSvg}
              width="32"
              style={{ borderRadius: "50%" }}
            />
          </span>
          Logout
        </p>
    </div>
  );
}

export default Header;