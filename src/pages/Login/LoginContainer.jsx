import { useFormik } from "formik";
import Login from "./Login";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import SessionsApiCall from "../../services/sessions";

function LoginContainer() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

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
    if (login.status === "error") {
      swal
        .fire({
          title: "We're sorry",
          text: login.message,
          icon: "error",
        })
        .then(() => resetForm());
      return;
    }
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
