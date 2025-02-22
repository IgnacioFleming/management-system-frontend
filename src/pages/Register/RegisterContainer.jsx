import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import { useFormik } from "formik";
import * as Yup from "yup";
import SessionsApiCall from "../../services/repository/sessions";
import Alerts from "../../helpers/alerts/alerts";

function RegisterContainer() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: registerUser,
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      first_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("Last Name is required"),
      email: Yup.string().required("Email field is required").email("This field must be an email"),
      password: Yup.string()
        .required("Password field is required")
        .min(8, "Password field must be at least 8 characters long")
        .matches(/^(?=.*\d)(?=.*\W)(?=.*[a-z])(?=.*[A-Z]).*$/, {
          message: "Password field must contain at least one uppercase, one lowercase, one digit and one special character",
        }),
      confirm_password: Yup.string()
        .required("Password confirmation is required")
        .oneOf([Yup.ref("password")], "Doesn't match your entered password"),
    }),
    validateOnChange: submitted,
  });
  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setSubmitted(true);
    }
  }, [errors]);

  async function registerUser({ username, first_name, last_name, email, password }) {
    const register = await SessionsApiCall.register({ username, first_name, last_name, email, password });
    if (register.status === "error") {
      await Alerts.errorAlert({ title: "We're sorry", text: "User email already exists. Please Login or try registering with another email", resolveCallback: resetForm });
      return;
    }
    await Alerts.successAlert({ title: "Registration completed!", text: "You have been registered successfully. Please Login to start purchasing", confirmButtonText: "Go to Login", resolveCallback: () => navigate("/login") });
  }
  return <Register handleChange={handleChange} handleSubmit={handleSubmit} values={values} errors={errors} />;
}

export default RegisterContainer;
