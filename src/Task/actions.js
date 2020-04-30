export const t = {
    ADD_TASK : 'ADD_TASK',
    COMPLETE_TASK : 'COMPLETE_TASK'
}

export const actions = {
    addTask : title => ({
        type : t.ADD_TASK,
        title
    }),
    
    completeTask : id => ({
        type : t.COMPLETE_TASK,
        id
    }),
}