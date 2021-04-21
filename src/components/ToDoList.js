import TodoListItem from './TodoListItem';

const ToDoList = ({todos}) => {
    <div className='list-wrapper'>
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
}

export default ToDoList;