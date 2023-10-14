const initialState = {
  name: "",
  customerID: "",
};

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/created":
      return {
        ...state,
        name: action.payload.name,
        customerID: action.payload.customerID,
      };

    default:
      return state;
  }
}

export function created(name, customerID) {
  return { type: "customer/created", payload: { name, customerID } };
}

export default customerReducer;
