import React from "react";

function TransactionForm() {
  return (
    <div className="transaction-form-container">
      <form className="ui form transaction-form">
        <div className="transaction-form-fields">
          <input type="date" name="date" className="form-input" />
          <input type="text" name="description" placeholder="Description" className="form-input" />
          <input type="text" name="category" placeholder="Category" className="form-input" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" className="form-input" />
          <button className="ui button add-transaction-btn" type="submit">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
