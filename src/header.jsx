import React from "react";

function Header({ totalBalance }) {
  return (
    <header className="headerContainer">
      <h1>Redux Bank</h1>
      <h1>Total Balance: {totalBalance} </h1>
    </header>
  );
}

export default Header;
