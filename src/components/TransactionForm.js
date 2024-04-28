import React,{useState} from "react";

function TransactionForm({submitData}) {
 const [newTransaction, setNewTransaction] = useState ({
    date:"",
    description:"",
    category:"",
    amount:""
})
function handleChange(event) {
    setNewTransaction({
       ...newTransaction,
        [event.target.name]: event.target.value
    })
}
function handleSubmit(event) {
    event.preventDefault();
    submitData(newTransaction)
    setNewTransaction({date:"",
    description:"",
    category:"",
    amount:""})
}
    return (
        <div className="transaction-form-container">
            <form className="ui form transaction-form" onSubmit={handleSubmit} >
                <div className="transaction-form-fields">
                    <input type="date" name="date" className="form-input" value={newTransaction.date} onChange = {handleChange}/>
                    <input type="text" name="description" placeholder="Description" className="form-input" value = {newTransaction.description} onChange = {handleChange}/>
                    <input type="text" name="category" placeholder="Category" className="form-input" value={newTransaction.category} onChange = {handleChange} />
                    <input type="number" name="amount" placeholder="Amount" step="0.01" className="form-input" value={newTransaction.amount} onChange = {handleChange}/>
                    <button className="ui button add-transaction-btn" type="submit">
                        Add Transaction
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TransactionForm;