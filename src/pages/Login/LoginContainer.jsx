import { useFormik } from "formik";
import Login from "./Login";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import SessionsApiCall from "../../services/repository/sessions";
import Alerts from "../../helpers/alerts/alerts";
import { API_Status_List } from "../../helpers/utils";

function LoginContainer() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const { setUserData } = useContext(UserContext);
  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: loginUser,
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Email field is required").min(6),
      password: Yup.string().required("Password fiel is required").min(6),
    }),
    validateOnChange: submitted,
  });
  async function loginUser({ username, password }) {
    const login = await SessionsApiCall.login({ username, password });
    if (login.status === API_Status_List.UNAUTHORIZED) {
      await Alerts.errorAlert({ text: login.message, resolveCallback: resetForm });
      return;
    }
    setUserData(login.payload);
    navigate("/");
  }

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setSubmitted(true);
    }
  }, [errors]);

  return (
    <div>
      <Login handleChange={handleChange} handleSubmit={handleSubmit} values={values} errors={errors} />
    </div>
  );
}

export default LoginContainer;
