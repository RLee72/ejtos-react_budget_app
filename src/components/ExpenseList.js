import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const { dispatch,remaining,currency  } = useContext(AppContext);

    const handleInputChange = (event) => {
        const value = event.target.value;
        currency(value);
        dispatch({ type: 'CHG_CURRENCY', payload: value });
      };


    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} currency={expense.currency}/>
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
