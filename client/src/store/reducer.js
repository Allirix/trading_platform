import * as ACTION from "./actions";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.LOGGED_IN:
      return { state, user: payload };
    default:
      throw new Error();
  }
};

export const initialState = {};
