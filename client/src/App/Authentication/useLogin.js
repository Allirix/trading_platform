import { useState } from "react";

import { useFetchOnAction } from "../Requests/useFetch";
import { options, LOGIN } from "../Requests/requests";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const { fetchData } = useFetchOnAction(options[LOGIN]({ username, password }));

  const tryLogin = async (e) => {
    e.preventDefault();
    setStatus(FETCHING);

    fetchData()
      .then((res) => {
        // store token in local storage
        localStorage.setItem("LOGGED_IN_TOKEN", res.token);
        localStorage.setItem("USER", JSON.stringify(res));

        setStatus(SUCCESS);
      })
      .catch((e) => {
        console.log(e);
        setStatus(FAIL);
      });
  };
  const onChange = {
    password: ({ target: { value } }) => setPassword(value),
    username: ({ target: { value } }) => setUsername(value),
  };
  return { status, tryLogin, onChange };
};

export default useLogin;
