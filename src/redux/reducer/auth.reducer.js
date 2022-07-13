const init = { auth: "auth" };
export const authReducer = (state = init, action) => {
  switch (action.type) {
    case "AUTH":
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};
