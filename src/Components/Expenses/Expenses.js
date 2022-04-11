import React from 'react';
import ExpenseItem from './ExpenseItem/ExpenseItem';

const Expenses = () => {

    const expenses = [
        { id: "e001", title: "shopping", amount: 12.99, createdAt: new Date("Dec 21,2021") },
        { id: "e002", title: "grocery", amount: 10.9, createdAt: new Date("Aug 1,2020") },
        { id: "e003", title: "insurance", amount: 22.9, createdAt: new Date("Jan 13,2022") },
    ]

    return (
        // React.createElement("div", {}, React.createElement("h4", {}, "Expenses soon be there..."))
        <div className='container'>
            <h4 className='text-center'>Awesome Expense App</h4>
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