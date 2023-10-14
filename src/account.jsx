import { useState } from "react";
import Input from "./input";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw, reqLoan, payLoan } from "./accountSlice";

function Account() {
  const [depositAmount, setDepositAmount] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [payLoanAmount, setPayLoanAmount] = useState(0);
  const [reqLoanAmount, setReqLoanAmount] = useState(0);

  const accountState = useSelector((state) => state.account);
  const customerState = useSelector((state) => state.customer);

  const dispatch = useDispatch();

  const depositHandler = (e) => {
    e.preventDefault();

    dispatch(deposit(depositAmount, currency));
    setDepositAmount(0);
    setCurrency("INR");
  };

  const withdrawHandler = (e) => {
    e.preventDefault();

    dispatch(withdraw(withdrawAmount));
    setWithdrawAmount(0);
  };

  const reqLoanHandler = (e) => {
    e.preventDefault();

    dispatch(reqLoan(reqLoanAmount));
    setReqLoanAmount(0);
  };

  const payLoanHandler = (e) => {
    e.preventDefault();

    dispatch(payLoan(payLoanAmount));
    setPayLoanAmount(0);
  };

  return (
    <>
      {customerState.name && (
        <div className="accountContainer">
          <h2>
            <span> Hello </span>
            {customerState.name}
          </h2>
          <form className="depositForm" onSubmit={depositHandler}>
            <div>
              <Input
                value={depositAmount}
                className="input"
                label={true}
                labelName="Deposit"
                id="deposit"
                type="number"
                onChange={(e) => setDepositAmount(+e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="select">Select Currency</label>
              <br />
              <select
                id="select"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <button>Deposit</button>
          </form>

          <form className="withdrawForm" onSubmit={withdrawHandler}>
            <div>
              <Input
                className="input"
                label={true}
                labelName="Withdraw Amount"
                type="number"
                id="withdraw"
                value={withdrawAmount}
                onChange={(e) => {
                  setWithdrawAmount((prev) =>
                    +e.target.value > accountState.totalBalance
                      ? prev
                      : +e.target.value
                  );
                }}
              />
            </div>
            <button>Withdraw</button>
          </form>

          {accountState.loan > 0 && (
            <>
              <form className="payLoanForm" onSubmit={payLoanHandler}>
                <div>
                  <Input
                    className="input"
                    label={true}
                    labelName="Pay Loan"
                    id="loan"
                    type="number"
                    value={payLoanAmount}
                    onChange={(e) =>
                      setPayLoanAmount((prev) =>
                        +e.target.value > accountState.loan
                          ? prev
                          : +e.target.value
                      )
                    }
                  />
                </div>
                <button>Withdraw</button>
              </form>
              <p>
                You owe <span>{accountState.loan}</span> Loan Amount
              </p>
            </>
          )}

          {!accountState.loan && (
            <form className="reqLoanForm" onSubmit={reqLoanHandler}>
              <div>
                <Input
                  className="input"
                  label={true}
                  labelName="Request Loan"
                  id="loan"
                  type="number"
                  value={reqLoanAmount}
                  onChange={(e) => setReqLoanAmount(+e.target.value)}
                />
              </div>
              <button>Withdraw</button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

export default Account;
