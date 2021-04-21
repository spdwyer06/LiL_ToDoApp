import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from './actions';

export const toDos = (state = [], action) => {
    const { type, payload } = action;

    switch(type){
        case CREATE_TODO: {
            const { text } = payload;
            const newToDo = {
                text,
                isCompleted: false
            };

            return state.concat(newToDo);
        }
        case REMOVE_TODO: {
            const { text } = payload;

            return state.filter(toDo => toDo.text != text);
        }
        case MARK_TODO_AS_COMPLETED: {
            const { text } = payload;

            return state.map(toDo => {
                if((toDo.text == text))
                    // Return the toDo with the isCompleted prop set to true
                    return {...toDo, isCompleted: true };
            })
        }
        default: {
            return state;
        }
    }

}