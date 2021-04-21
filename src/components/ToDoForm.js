import { useState } from 'react';
import { connect } from 'react-redux';
import { createToDo } from './actions';

const ToDoForm = ({ toDos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return(
        <div className='new-todo-form'>
            <input className='todo-form-input' type='text' placeholder='Type your new ToDo here' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button 
                className='todo-form-create-btn' 
                onClick={() => {
                    const isDuplicateText = toDos.some(toDo => toDo.text == inputValue);

                    if(!isDuplicateText){
                        onCreatePressed(inputValue); 
                        setInputValue('');
                    }
                }}>
                    Create ToDo
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    toDos: state.toDos,
});

const mapDispatchToProps = (dispatch) => ({
    onCreatePressed: (text) => dispatch(createToDo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);