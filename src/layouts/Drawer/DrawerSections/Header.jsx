import { Button } from "primereact/button";

function Header({ handleDrawerVisibility, closeIconRef }) {
  return (
    <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
      <span className="inline-flex align-items-center gap-2">
        <span className="font-semibold text-2xl text-primary">Mi negocio</span>
      </span>
      <span>
        <Button type="button" ref={closeIconRef} onClick={handleDrawerVisibility} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
      </span>
    </div>
  );
}

export default Header;
