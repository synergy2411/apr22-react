import { useState } from "react";
import { v4 } from 'uuid';

const AddExpense = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredCreatedAt, setEnteredCreatedAt] = useState('')

    // let title = "My Title";
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const createdAtChangeHandler = (event) => setEnteredCreatedAt(event.target.value)

    const amountChangeHandler = event => setEnteredAmount(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(enteredTitle, enteredAmount, enteredCreatedAt)
        const expense = {
            id : v4(),
            title : enteredTitle,
            amount  : enteredAmount,
            createdAt : new Date(enteredCreatedAt)
        }
        props.onAddNewExpense(expense);
    }

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="text-center">Add Your Expense</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            {/* title */}
                            <div className="form-group">
                                <label htmlFor="title">Title :</label>
                                <input type="text"
                                    value={enteredTitle}
                                    name="title"
                                    className="form-control"
                                    onChange={titleChangeHandler} />
                            </div>
                            {/* amount */}
                            <div className="form-group">
                                <label htmlFor="amount">Amount :</label>
                                <input type="number" value={enteredAmount} 
                                    onChange={amountChangeHandler} 
                                    name="amount" 
                                    className="form-control" 
                                    min="0.1" 
                                    step="0.1" />
                            </div>
                            {/* createdAt */}
                            <div className="form-group">
                                <label htmlFor="createdAt">Date :</label>
                                <input type="date" 
                                    value={enteredCreatedAt} 
                                    onChange={createdAtChangeHandler} 
                                    min="2019-01-01" 
                                    max="2022-12-31" 
                                    name="createdAt" 
                                    className="form-control" />
                            </div>
                            {/* button */}
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddExpense;