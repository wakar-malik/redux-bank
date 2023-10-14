import { useSelector } from "react-redux";
import Account from "./account";
import Customer from "./customer";
import Header from "./header";

function App() {
  const accountState = useSelector((state) => state.account);

  return (
    <>
      <Header totalBalance={accountState.totalBalance} />
      <Customer />
      <Account />
    </>
  );
}

export default App;
