import { Button } from "primereact/button";

function Header({ handleDrawerVisibility, closeIconRef }) {
  return (
    <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
      <span className="inline-flex align-items-center gap-2">
        <span className="font-semibold text-xl text-primary">Business Manager</span>
      </span>
      <span>
        <Button type="button" ref={closeIconRef} onClick={handleDrawerVisibility} icon="pi pi-bars" pt={{ icon: { style: { fontSize: "1.5rem", paddingTop: 2 } } }} text className="h-2rem w-2rem border-none"></Button>
      </span>
    </div>
  );
}

export default Header;
