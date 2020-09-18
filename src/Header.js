import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>To do list</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
const linkStyle = {
  color: "blue",
  textDecoration: "none",
};
const headerStyle = {
  background: "tomato",
};
export default Header;
