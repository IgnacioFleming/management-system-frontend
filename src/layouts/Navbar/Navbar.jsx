import { Card } from "primereact/card";
import { useRef } from "react";
import styles from "./Navbar.module.css";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import Alerts from "../../helpers/alerts/alerts";
import SessionsApiCall from "../../services/repository/sessions";
import { Link } from "react-router-dom";

export default function Navbar() {
  const signOutRef = useRef(null);
  const items = [
    {
      label: "My Profile",
      icon: "pi pi-user",
      command: () => {
        window.history.pushState(null, "", "/profile");
        return window.dispatchEvent(new PopStateEvent("popstate"));
      },
    },
    {
      label: "Log out",
      icon: "pi pi-sign-out",
      command: async () => {
        const logout = await SessionsApiCall.logout();
        if (!logout?.status) return (window.location.pathname = "/login");
        return Alerts.errorAlert();
      },
    },
  ];
  return (
    <>
      <Card style={{ height: 80 }} pt={{ root: { className: "surface-50 h-full" }, body: { className: "p-0" }, content: { className: "p-0" } }}>
        <div className={`${styles.container} w-full`}>
          <div className="w-full flex justify-content-center align-items-center">
            <Link to="/">
              <img className="object-contain" src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1731526688/Business-manager/LogoHorizontalConTexto_nqydaj.png" alt="Logo" />
            </Link>
          </div>
          <div>
            <Menu model={items} ref={signOutRef} id="popup-sign-out" popup></Menu>
            <Button className={`${styles.button} p-0 sm:p-2`} aria-controls="popup-sign-out" onClick={(e) => signOutRef.current.toggle(e)} aria-haspopup>
              <Avatar size="large" image="https://res.cloudinary.com/dah7yxmc5/image/upload/v1731529767/Business-manager/default-avatar.jpg" shape="circle" />
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
