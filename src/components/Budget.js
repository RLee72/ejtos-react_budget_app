import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
import { CurrencyContext } from './AllocationForm';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const { totalExpenses } = useContext(AppContext);
    const { dispatch,remaining,currency  } = useContext(AppContext);
    const {cost, setCost} = useContext(AppContext);
    const [inputValue, setInputValue] = useState(2000);
   
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        if (value > 20000) {
            window.alert("The value cannot exceed remaining funds  £"+remaining);
        }
        if (value < 960) {
            window.alert("You cannot reduce the budget lower than the spending");
        }
    };
    


    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
        <form>

            <input type="number" 
            id="quantity" 
            name="quantity" 
            min="0" max="20200" 
            step="10" 
            value={inputValue}
            onChange={handleInputChange}
            />

        </form>
        
        </span>

        </div>
    );
};
export default Budget;
