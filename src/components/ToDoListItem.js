

const ToDoListItem = ({ toDo, onRemovePressed }) => {

    return(
        <div className='todo-item-container'>
            <h3>{toDo.text}</h3>
            <div className='buttons-container'>
                <button className='completed-btn'>Mark As Completed</button>
                <button className='remove-btn' onClick={() => onRemovePressed(toDo.text)}>Remove</button>
            </div>
        </div>
    );
}

export default ToDoListItem;