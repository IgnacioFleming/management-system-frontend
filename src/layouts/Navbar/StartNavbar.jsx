import { Link } from "react-router-dom";

function StartNavbar() {
  return (
    <Link to="/">
      <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2" />
    </Link>
  );
}

export default StartNavbar;
