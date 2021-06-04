export const USERS = "/users",
  ORGANISATIONS = "/organisations",
  TRADES = "/trades",
  ASSETS = "/assets",
  LOGIN = "/login";

export const endpoints = [USERS, ORGANISATIONS, TRADES, ASSETS];

// requests["/users"]({ID: 1234}) gives axios request options for user with ID 1234
const requests = endpoints.reduce((reqs, url) => {
  reqs[url] = (options = {}) => ({
    ...options, //eg {method: POST, params: {ID: 1234}}
    url,
  });
  return reqs;
}, {});

export default requests;

//special options
export const options = {
  [LOGIN]: (data) => {
    const requestOptions = {
      url: LOGIN,
      data,
      method: "POST",
    };
    return requestOptions;
  },
};
