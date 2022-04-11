import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = ({title, amount, createdAt}) => {
    
    return (
        <div className="col-4">
        <div className='card'>
            <div className='card-header'>
                <h5 className="text-center"> {title.toUpperCase()}</h5>
                </div>
            <div className='card-body'>
                <p>Amount : ${amount}</p>
                <ExpenseDate createdAt = {createdAt} />
            </div>
        </div>
        </div>
    )
}

export default ExpenseItem;