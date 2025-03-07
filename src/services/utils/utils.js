import { API_Status_List, authRedirection } from "../../helpers/utils";

const requestOptionsHandler = (data, method) => {
  const options = {
    method: method,
    credentials: "include",
  };
  if (data instanceof FormData) {
    options.body = data;
  } else {
    options.body = JSON.stringify(data);
    options.headers = { "Content-Type": "application/json" };
  }
  return options;
};
const requestHandle = async (path, options = {}) => {
  const result = await fetch(path, { ...options, credentials: "include" });
  const { status, payload, error, redirectURL } = await result.json();
  if (status === API_Status_List.ERROR) return { status, error };
  authRedirection(status, redirectURL);
  return payload;
};

export default {
  requestOptionsHandler,
  requestHandle,
};
