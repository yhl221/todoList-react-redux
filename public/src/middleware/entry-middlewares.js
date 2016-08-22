import TodoList from './todo-list';
import Footer from './footer';
import AddTodo from './add-todo'


export default store => next => action => {
    switch (action.type) {
        case 'Add':
            AddTodo(next,action);
            break;
        case 'Delete' :
            TodoList(next,action);
            break;
        case 'Toggle':
            TodoList(next,action);
            break;
        case 'ButtonName':
            Footer(next,action);
            break;
    }
}