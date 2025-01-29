import { DataTable } from "primereact/datatable";
import { useGetData } from "../../hooks/useGetData";
import UsersApiCall from "../../services/users";
import { Column } from "primereact/column";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Rating } from "primereact/rating";
import { classNames } from "primereact/utils";
import { formatDate } from "../../utils/utils";

function Users() {
  const { data } = useGetData(UsersApiCall);
  console.log(data);
  const itemTemplate = (user, index) => {
    return (
      <div className="col-12" key={user.id}>
        <div className={classNames("flex p-4 gap-4", { "border-top-1 surface-border": index !== 0 })}>
          <div className="flex flex-column  justify-content-between w-5 align-items-center xl:align-items-start  gap-4">
            <h2 className="m-0">
              <span className="w-15rem inline-block">Usuario:</span> <span className={`text-900  ${user.is_enabled ? "text-green-500" : "text-red-500"} `}>{user.username}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Nombre:</span>
              <span className="text-900 ">{` ${user.first_name} ${user.last_name}`}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Email:</span> <span className="text-900 ">{user.email}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Rol:</span> <span className="text-900 ">{user.role}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Fecha de Alta:</span> <span className="text-900 ">{formatDate(user.signup_date)}</span>
            </h2>
          </div>
          <div className="flex align-items-center">
            <Button className="w-10rem" severity="info" label={user.is_enabled ? "Deshabilitar" : "Habilitar"} />
          </div>
        </div>
      </div>
    );
  };
  const listTemplate = (items) => {
    if (!items || items.length === 0) return null;

    let list = items.map((product, index) => {
      return itemTemplate(product, index);
    });

    return <div className="grid grid-nogutter">{list}</div>;
  };

  const enabledUsers = data?.filter((user) => user.is_enabled);
  const notEnabledUsers = data?.filter((user) => !user.is_enabled);

  return (
    <>
      <div className="card">
        <h1>Usuarios habilitados</h1>
        <DataView value={enabledUsers} listTemplate={listTemplate} />
      </div>

      <div className="card">
        <h1>Usuarios No Habilitados</h1>
        <DataView value={notEnabledUsers} listTemplate={listTemplate} />
      </div>
    </>
  );
}

export default Users;
