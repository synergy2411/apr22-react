import React, { useState } from 'react';
import AddExpense from './AddExpense/AddExpense';
import ExpenseItem from './ExpenseItem/ExpenseItem';

const INTIAL_EXPENSES = [
    { id: "e001", title: "shopping", amount: 12.99, createdAt: new Date("Dec 21,2021") },
    { id: "e002", title: "grocery", amount: 10.9, createdAt: new Date("Aug 1,2020") },
    { id: "e003", title: "insurance", amount: 22.9, createdAt: new Date("Jan 13,2022") },
]

const Expenses = () => {

    const [expenses, setExpenses] = useState(INTIAL_EXPENSES)
    const [showForm, setShowForm] = useState(false)

    const onToggleForm = () => setShowForm(!showForm);

    const onAddNewExpense = expense => {
        setExpenses((prevState)=>{
            return [expense, ...prevState]
        })
    }

    return (
        // React.createElement("div", {}, React.createElement("h4", {}, "Expenses soon be there..."))
        <div className='container'>
            <h4 className='text-center'>Awesome Expense App</h4>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <button onClick={onToggleForm} 
                        className="btn btn-block btn-primary">
                            {showForm ? 'Hide Form' : 'Add Expense'}
                        </button>
                </div>
            </div>
            {showForm && <AddExpense onAddNewExpense = {onAddNewExpense}/>}
            <hr/>
            <div className='row'>
            <ExpenseItem 
                title={expenses[0].title} 
                amount={expenses[0].amount} 
                createdAt={expenses[0].createdAt} />
            <ExpenseItem 
                title={expenses[1].title} 
                amount={expenses[1].amount} 
                createdAt={expenses[1].createdAt} />
            <ExpenseItem 
                title={expenses[2].title} 
                amount={expenses[2].amount} 
                createdAt={expenses[2].createdAt} />
            </div>

        </div>
    )

}

export default Expenses;