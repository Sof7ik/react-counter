import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

const Counter = ({min, max}) =>
{
    const [counter, setCounter] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');

    function increment ()
    {
        if (counter + 1 <= max)
        {
            setCounter(counter + 1);
            setErrorMessage('');
        }
        else
        {
            setErrorMessage('Число большое очень');
        }
    }

    function decrement ()
    {
        if (counter - 1 >= min)
        {
            setCounter(counter - 1);
            setErrorMessage('');
        }
        else
        {
            setErrorMessage('Число маленькое очень');
        }
    }

    function counterHandler (e)
    {
        const newValue = parseInt(e.target.value);

        if (!(isNaN(newValue)))
        {
            if (newValue >= min && newValue <= max){
                setCounter(newValue);
                setErrorMessage('');
            }
            else
            {
                if (newValue > max) setErrorMessage('Число большое очень');
                if (newValue < min) setErrorMessage('Число маленькое очень')
            }
        }
        else
        {
            setCounter(min);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.counterWrapper}>
                <button onClick={increment}>+ (прибавить к счетчику)</button>
                    <input type={"text"} className={styles.inputCounter} value={counter} readOnly={false} onChange={counterHandler}/>
                <button onClick={decrement}>- (убавить счетчик)</button>
            </div>

            <p className={styles.error}>{errorMessage}</p>
        </div>
    );
}

PropTypes.Counter = () => {

}

export default Counter;