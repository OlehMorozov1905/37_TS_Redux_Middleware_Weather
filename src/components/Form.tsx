import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { submitHandler, handleChange as handlerChange } from '../actions/weatherAction';

const Form = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = submitHandler(city, dispatch, setCity);
    const changeHandler = handlerChange(setCity);

    return (
        <form onSubmit={handleSubmit}>
            <input value={city} onChange={changeHandler} type='text' />
            <button type='submit'>Get weather</button>
        </form>
    )
}

export default Form
