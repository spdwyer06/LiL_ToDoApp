import {useState} from 'react';

const ToDoForm = () => {
    const [inputValue, setInputValue] = useState('');

    <div className='new-todo-form'>
        <input className='todo-form-input' type='text' placeholder='Type your new ToDo here' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button className='todo-form-create-btn'>Create ToDo</button>
    </div>
}

export default ToDoForm;