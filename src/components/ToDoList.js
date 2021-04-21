import ToDoListItem from './ToDoListItem';

import ToDoForm from './ToDoForm';

const ToDoList = ({ toDos = [{text: 'Hello World'}] }) => {
    
    return(
        <div className='list-wrapper'>
            <ToDoForm />
            {toDos.map(toDo => <ToDoListItem toDo={toDo} />)}
        </div>
    );
}

export default ToDoList;