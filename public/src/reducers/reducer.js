function reducer(state={todos:[],filterName:'All'},action) {
    switch (action.type){
        case 'Add':
            return {todos:[...state.todos,{texts:action.text,isDone:false}]};
        case 'Delete':
            state.todos.splice(action.index,1);
            return {todos:[...state.todos]};
        case 'Toggle':
            state.todos[action.index].isDone=!state.todos[action.index].isDone;
            return {todos:[...state.todos]};
        case 'ButtonName':
            return {todos:[...state.todos],filterName:action.name};
    }
    return state;
}

export  default reducer;