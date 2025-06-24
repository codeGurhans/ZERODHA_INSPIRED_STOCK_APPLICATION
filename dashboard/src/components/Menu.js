import React, {useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000";
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
          <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)}>
            <p>Dashboard</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/orders" onClick={() => handleMenuClick(1)}>
            <p>Orders</p>
          </Link>            
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={() => handleMenuClick(2)}>
            <p>Holdings</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/positions" onClick={() => handleMenuClick(3)}>
            <p>Positions</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onClick={() => handleMenuClick(4)}>
            <p>Funds</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onClick={() => handleMenuClick(5)}>
            <p>Apps</p>
          </Link>
          </li>
        </ul>
        <hr />
        {/* <div className="logout-btn"> */}
          <button onClick={handleLogout} className="btn btn-danger" style={{padding: "0.5rem", borderRadius:"1rem", marginLeft:"0.5rem", marginBottom:"0.5rem"}}>
            Logout
          </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Menu;
