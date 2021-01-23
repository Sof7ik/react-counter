import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

Counter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
}

function Counter ({min, max})
{
    const [counter, setCounter] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');

    function validator (newValue)
    {
        if (newValue <= max && newValue >= min)
        {
            return newValue;
        }
        else if (newValue > max)
        {
            setErrorMessage('Число большое очень');
            return -1;
        }
        else if (newValue < min)
        {
            setErrorMessage('Число маленькое очень');
            return -1;
        }
    }

    function increment ()
    {
        const newCounter = validator(counter + 1);
        if (newCounter !== -1)
        {
            setCounter(newCounter);
            setErrorMessage('');
        }

    }

    function decrement ()
    {
        const newCounter = validator(counter - 1);
        if (newCounter !== -1)
        {
            setCounter(newCounter);
            setErrorMessage('');
        }
    }

    function counterHandler (newValue)
    {
        if (!(isNaN(newValue)))
        {
            const newCounter = validator(newValue);
            if (newCounter !== -1)
            {
                setCounter(newCounter);
                setErrorMessage('');
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
                    <input
                        type={"text"}
                        className={styles.inputCounter}
                        value={counter}
                        onChange={e =>
                                    {
                                        counterHandler(parseInt(e.target.value))
                                    }
                        }/>
                <button onClick={decrement}>- (убавить счетчик)</button>
            </div>

            <p className={styles.error}>{errorMessage}</p>
        </div>
    );
}

export default Counter;