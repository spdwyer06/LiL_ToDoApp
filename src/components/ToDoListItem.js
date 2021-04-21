

const ToDoListItem = ({toDo}) => {

    return(
        <div className='todo-item-container'>
            <h3>{toDo.text}</h3>
            <div className='buttons-container'>
                <button className='completed-btn'>Mark As Completed</button>
                <button className='remove-btn'>Remove</button>
            </div>
        </div>
    );
}

export default ToDoListItem;