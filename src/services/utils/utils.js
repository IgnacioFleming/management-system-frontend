import { API_Status_List, authRedirection } from "../../helpers/utils";

const requestOptionsHandler = (data, method) => {
  const authInfo = JSON.parse(localStorage.getItem("backoffice_manager_auth_token"));
  const sessionId = authInfo?.payload.token || "";
  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${sessionId}`,
    },
  };

  if (data instanceof FormData) {
    options.body = data;
  } else {
    options.body = JSON.stringify(data);
    options.headers = { "Content-Type": "application/json" };
  }
  return options;
};

const requestHandle = async (path, options = {}, auth = true) => {
  if (auth) {
    const authInfo = JSON.parse(localStorage.getItem("backoffice_manager_auth_token"));
    const sessionId = authInfo?.payload.token || "";
    options.headers = { Authorization: `Bearer ${sessionId}` };
  }
  const result = await fetch(path, options);
  const { status, payload, error, redirectURL } = await result.json();
  if (status === API_Status_List.ERROR) return { status, error };
  authRedirection(status, redirectURL);
  return payload;
};

export default {
  requestOptionsHandler,
  requestHandle,
};
