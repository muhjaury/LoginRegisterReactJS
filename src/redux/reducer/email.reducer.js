const init = { isEmail: "email" };
export const emailReducer = (state = init, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, isEmail: action.payload };
    default:
      return state;
  }
};
