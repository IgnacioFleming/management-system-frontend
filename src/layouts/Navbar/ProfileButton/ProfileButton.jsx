import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { useRef } from "react";
import styles from "./ProfileButton.module.css";
import SessionsApiCall from "../../../services/repository/sessions";
import Alerts from "../../../helpers/alerts/alerts";

function ProfileButton() {
  const signOutRef = useRef(null);
  const items = [
    {
      label: "Cerrar Sesión",
      icon: "pi pi-sign-out",
      command: async () => {
        const logout = await SessionsApiCall.logout();
        if (!logout?.status) return (window.location.pathname = "/login");
        return Alerts.errorAlert();
      },
    },
  ];

  return (
    <div className="flex align-items-center gap-2">
      <Menu model={items} ref={signOutRef} id="popup-sign-out" popup></Menu>
      <Button className={styles.button} aria-controls="popup-sign-out" onClick={(e) => signOutRef.current.toggle(e)} aria-haspopup>
        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
      </Button>
    </div>
  );
}

export default ProfileButton;
