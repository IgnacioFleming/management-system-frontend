import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useFormik } from "formik";
import { UserContext } from "../../contexts/user";
import SessionsApiCall from "../../services/repository/sessions";
import Alerts from "../../helpers/alerts/alerts";
import { API_Status_List } from "../../helpers/utils";
import DemoLogin from "./DemoLogin";

function DemoLoginContainer() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const { handleSubmit, resetForm } = useFormik({
    initialValues: {
      username: "administrator",
      password: "adminPassword",
    },
    onSubmit: loginUser,
  });
  async function loginUser({ username, password }) {
    const login = await SessionsApiCall.login({ username, password });

    if (login.status === API_Status_List.UNAUTHORIZED) {
      await Alerts.errorAlert({ text: login.message, resolveCallback: resetForm });
      return;
    }
    if (login.status !== API_Status_List.SUCCESS) {
      return await Alerts.errorAlert({ text: "Unexpected error.", resolveCallback: resetForm });
    }
    setUserData(login.payload.user);
    navigate("/");
  }

  return (
    <div>
      <DemoLogin handleSubmit={handleSubmit} />
    </div>
  );
}

export default DemoLoginContainer;
