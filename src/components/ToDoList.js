import ToDoListItem from './ToDoListItem';

import ToDoForm from './ToDoForm';

const ToDoList = ({ todos = [{text: 'Hello World'}] }) => {
    
    return(
        <div className='list-wrapper'>
            <ToDoForm />
            {todos.map(todo => <ToDoListItem todo={todo} />)}
        </div>
    );
}

export default ToDoList;