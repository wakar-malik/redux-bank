const initialState = {
  totalBalance: 0,
  loan: 0,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        totalBalance: state.totalBalance + action.payload,
      };

    case "account/withdraw":
      return {
        ...state,
        totalBalance: state.totalBalance - action.payload,
      };

    case "account/reqLoan":
      return {
        ...state,
        totalBalance: state.totalBalance + action.payload,
        loan: action.payload,
      };

    case "account/payLoan":
      return {
        ...state,
        totalBalance: state.totalBalance - action.payload,
        loan: state.loan - action.payload,
      };

    default:
      break;
  }
  return state;
}

export function deposit(amount, currency) {
  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );

    const converted = await res.json();

    console.log(converted);

    dispatch({ type: "account/deposit", payload: converted.rates.INR });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function reqLoan(amount) {
  return { type: "account/reqLoan", payload: amount };
}

export function payLoan(amount) {
  return { type: "account/payLoan", payload: amount };
}

export default accountReducer;
