import React, {Component} from 'react';
class TodoList extends Component {

    toggle(index) {
        this.props.onToggle(index);
    }

    delete(index) {
        this.props.onDelete(index);
    }

    render() {
        return (
            <div>
                {
                    this.props.todos.map((todo, index)=> {
                        return <div key={index}>
                            <input type="checkbox" checked={todo.isDone} onClick={this.toggle.bind(this, index)}/>
                            {todo.isDone ? <s>{todo.texts}</s> : todo.texts}
                            <button onClick={this.delete.bind(this, index)}>x</button>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default TodoList;