import { useState } from "react";
import Input from "./input";
import { useDispatch, useSelector } from "react-redux";
import { created } from "./customerSlice";

function Customer() {
  const [name, setName] = useState("");
  const [customerID, setCustomerID] = useState("");

  const customerState = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const customerHandler = (e) => {
    e.preventDefault();

    dispatch(created(name, customerID));

    setName("");
    setCustomerID("");
  };

  return (
    <>
      {!customerState.name && (
        <div className="customerContainer">
          <h1>Add New Customer</h1>

          <form className="customerForm" onSubmit={customerHandler}>
            <div>
              <Input
                value={name}
                className="input"
                label={true}
                labelName="Name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Input
                value={customerID}
                className="input"
                label={true}
                labelName="Customer ID"
                id="customer"
                onChange={(e) => setCustomerID(e.target.value)}
              />
            </div>

            <button>Create Account</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Customer;
