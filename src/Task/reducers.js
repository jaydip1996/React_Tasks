import { t } from './actions';

const intiState = [];

function generateID () {
    return '_' + Math.random().toString(36).substr(2,9);
}

export const tasksReducer = (state = intiState, action) => {
    switch (action.type) {
        case t.ADD_TASK : return [
            ...state,
            {
                id : generateID(),
                title : action.title
            }
        ]
        case t.COMPLETE_TASK : return state.map(task => {
            if (task.id === action.id) {
                return {...task, completed : true}
            } else {
                return task
            }
        })
        default : return state;
    }
}