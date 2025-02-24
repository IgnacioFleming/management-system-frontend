import { Card } from "primereact/card";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex align-items-center justify-content-center" style={{ height: "calc(100vh - 100px)" }}>
      <Card className="flex justify-content-center w-9">
        <div className="w-15 flex flex-column gap-5">
          <header>
            <div className="pl-5">
              <h2>Mi Perfil</h2>
            </div>
            <div className="border-circle w-10rem h-10rem">
              <img className="w-full h-full border-circle " src="https://res.cloudinary.com/dah7yxmc5/image/upload/v1731529767/Business-manager/default-avatar.jpg" alt="Mi perfil" />
            </div>
          </header>
          <main className="pl-2 flex flex-column gap-3">
            <div className="flex">
              <strong className="w-6rem block">Usuario: </strong>
              <div>{user.username}</div>
            </div>
            <div className="flex">
              <strong className="w-6rem block">Nombre: </strong>
              <div>
                {user.first_name}
                {user.last_name}
              </div>
            </div>
            <div className="flex">
              <strong className="w-6rem block">Rol: </strong>
              <div>{user.role}</div>
            </div>
            <div className="flex">
              <strong className="w-6rem block">Activo: </strong>
              <div>{user.is_enabled ? "Sí" : "No"}</div>
            </div>
            <div className="pl-3 mt-5">
              <Link to="/">
                <Button label="Volver" severity="info" />
              </Link>
            </div>
          </main>
        </div>
      </Card>
    </div>
  );
}

export default Profile;
