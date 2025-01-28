import { Menubar } from "primereact/menubar";
import { items } from "./items";
import StartNavbar from "./StartNavbar";
import ProfileButton from "./ProfileButton/ProfileButton";

export default function Navbar() {
  return (
    <>
      <div className="card">
        <Menubar model={items} start={<StartNavbar />} end={<ProfileButton />} />
      </div>
    </>
  );
}
