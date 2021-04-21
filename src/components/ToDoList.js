import { connect } from 'react-redux';
import { removeToDo, markToDoAsCompleted } from './actions';

import ToDoListItem from './ToDoListItem';
import ToDoForm from './ToDoForm';

const ToDoList = ({ toDos = [{text: 'Hello World'}], onRemovePressed, onCompletedPressed }) => {
    
    return(
        <div className='list-wrapper'>
            <ToDoForm />
            {toDos.map(toDo => <ToDoListItem toDo={toDo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    toDos: state.toDos
});

const mapDispatchToProps = (dispatch) => ({
    onRemovePressed: (text) => dispatch(removeToDo(text)),
    onCompletedPressed: (text) => dispatch(markToDoAsCompleted(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);