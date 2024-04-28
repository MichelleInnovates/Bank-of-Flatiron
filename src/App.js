import React, { useState } from "react";
import "./App.css";

import TransactionForm from "./components/TransactionForm"; 
import TransactionsList from "./components/TransactionsList";
import Search from "./components/Search";
function App() {
  const data = [
    { date: "06/14/2005", description: "Cjs", category: "Food", amount: 25.5 },
    { date: "06/15/2005", description: "Imax", category: "Entertainment", amount: 12.99 },
    { date: "06/16/2005", description: "Lc Waikiki", category: "Shopping", amount: 50.0 },
    { date: "06/17/2005", description: "Electricty", category: "Bills", amount: 150.0 },
    { date: "06/18/2005", description: "Celery", category: "Groceries", amount: 30.0 }
  ];
  

  const [transactions, setTransactions] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const filteredTransactions = transactions.filter((transaction) =>{
    if (searchTerm.length > 0 ){
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    } else {return true;}
  }
 
);
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
function handleDelete (transactionIndex) {
const newArray= transactions.filter((transaction, index)=>{
  return index!== transactionIndex;
}) 
setTransactions(newArray)
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Royal Bank of Flatiron</h1>
      </header>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <TransactionForm submitData={handleAddTransaction}/>
      <TransactionsList transactions={filteredTransactions} searchTerm={searchTerm} onDelete={handleDelete} />

    </div>
  );
}

export default App;