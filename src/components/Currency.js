import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
import { CurrencyContext } from './AllocationForm';

const Currency = () => {
    const { dispatch,remaining,currency  } = useContext(AppContext);
    const [mycurrency, setMycurrency] = useState(' ');
   
    const handleInputChange = (event) => {
        const value = event.target.value;
        setMycurrency(value);
        dispatch({ type: 'CHG_CURRENCY', payload: value });
    };


    

    return (
        <div className='alert alert-secondary'>
            <span>Currency({currency})</span>

                    <select className="Currency" id="Currency" onChange={handleInputChange} class ="Currency" style={{background: '#98efbf'}}>
                        <option value="" name="Current" disabled selected>Currency (£ Pound)</option>
                        <option value="$" name="Dollar">$ Dollar</option>
                        <option value="£" name="Pound">£ Pound</option>
                        <option value="€" name="Euro">€ Euro</option>
                        <option value="₹" name="Ruppee">₹ Ruppee</option>
                        
                    </select>

        </div>
    );
};
export default Currency;
