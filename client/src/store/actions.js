//actions are dispacthed to the sentralised store.

export const LOGGED_IN = "LOGGED_IN";
export const loggedIn = (payload) => ({ payload, type: LOGGED_IN });
