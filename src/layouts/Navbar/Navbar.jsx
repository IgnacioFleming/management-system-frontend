import { Menubar } from "primereact/menubar";
import StartNavbar from "./StartNavbar";
import ProfileButton from "./ProfileButton/ProfileButton";
import { items } from "./items";

export default function Navbar() {
  return (
    <>
      <div className="card">
        <Menubar model={items} start={<StartNavbar />} end={<ProfileButton />} />
      </div>
    </>
  );
}
