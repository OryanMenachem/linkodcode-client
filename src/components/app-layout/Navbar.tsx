import { Link } from "react-router";

export  function Navbar() {
  return <nav className="nav main--nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/settings"}>Settings</Link>
      <Link to={"/about"}>About</Link>
  </nav>;
}
