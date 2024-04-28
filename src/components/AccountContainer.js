import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import TransactionForm from "./TransactionForm";

function AccountContainer({
  transactions,
  searchTerm,
  onSearch,
  onAddTransaction,
}) {
  return (
    <div>
      <Search onSearch={onSearch} />
      <TransactionForm onAddTransaction={onAddTransaction} />
      <TransactionsList transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;
