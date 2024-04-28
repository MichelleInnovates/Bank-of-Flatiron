import React, { useState } from "react";
import "./App.css";
import AccountContainer from "./components/AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([
    // Initial transaction data
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Royal Bank of Flatiron</h1>
      </header>
      <AccountContainer
        transactions={transactions}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onAddTransaction={handleAddTransaction}
      />
    </div>
  );
}

export default App;
