import { useGetData } from "../../hooks/useGetData";
import { DataView } from "primereact/dataview";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { formatDate } from "../../helpers/utils";
import { useEffect, useState } from "react";
import { usersService } from "../../services";

function Users() {
  const [users, getUsers] = useGetData(usersService);
  const [enabledUsers, setEnabledUsers] = useState([]);
  const [notEnabledUsers, setNotEnabledUsers] = useState([]);
  useEffect(() => {
    const newEnabledUsers = users?.filter((user) => user.is_enabled === 1);
    const newNotEnabledUsers = users?.filter((user) => user.is_enabled !== 1);
    setEnabledUsers(newEnabledUsers);
    setNotEnabledUsers(newNotEnabledUsers);
  }, [users]);
  const itemTemplate = (user, index) => {
    return (
      <div className="w-full" key={user.id}>
        <div className={classNames("flex flex-column sm:flex-row p-0 sm:p-4 text-xs sm:text-lg gap-4", { "border-top-1 surface-border": index !== 0 })}>
          <div className="flex flex-column  justify-content-between w-auto mr-5 align-items-center xl:align-items-start  gap-4">
            <h2 className="m-0">
              <span className="w-15rem inline-block">Username:</span> <span className={`text-900  ${user.is_enabled === 1 ? "text-green-500" : "text-red-500"} `}>{user.username}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Name:</span>
              <span className="text-900 ">{` ${user.first_name} ${user.last_name}`}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Email:</span> <span className="text-900 ">{user.email}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Role:</span> <span className="text-900 ">{user.role}</span>
            </h2>
            <h2 className="m-0">
              <span className="w-15rem inline-block">Registration Date:</span> <span className="text-900 ">{formatDate(user.signup_date)}</span>
            </h2>
          </div>
          <div className="flex align-items-center">
            <Button className="w-10rem" severity="info" label={user.is_enabled === 1 ? "Deshabilitar" : "Habilitar"} onClick={() => handleUserState(user.id)} />
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

  const handleUserState = async (id) => {
    await usersService.handleUserState(id);
    getUsers();
  };

  return (
    <>
      <div className="card">
        <h1>Enabled Users</h1>
        {enabledUsers.length === 0 ? <h3>There's no enabled users.</h3> : <DataView value={enabledUsers} listTemplate={listTemplate} />}
      </div>

      <div className="card">
        <h1>Disabled Users</h1>
        {notEnabledUsers.length === 0 ? <h3>There's no disabled users.</h3> : <DataView value={notEnabledUsers} listTemplate={listTemplate} />}
      </div>
    </>
  );
}

export default Users;
