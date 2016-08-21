import TodoList from '../components/todo-list'
import {connect} from  'react-redux'

function select(state) {
    if (state.filterName === 'All') {
        return state.todos
    }
    if (state.filterName === 'Active') {
        return state.todos.filter((element)=>!element.isDone)
    }
    if (state.filterName === 'Complete') {
        return state.todos.filter((element)=>element.isDone)
    }

    return state.todos;
}

function mapStateToProps(state) {

    return {
        todos: select(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: (index)=> {
            dispatch({type: 'Delete', index});
        },
        onToggle: (index)=> {
            dispatch({type: 'Toggle', index});
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)