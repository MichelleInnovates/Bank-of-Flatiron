import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions,onDelete}) {
  

  return (
    <div>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         
          {transactions.map((transaction, index) => (
            <Transaction
              key={index}
              index={index}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;