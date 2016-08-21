import React, {Component} from "react";
import AddTodo from "../containers/add-todo";
import TodoList from "../containers/todo-list";
import Footer from "../containers/footer";

class App extends Component {

    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
                <Footer/>
            </div>
        )
    }
}

export default App;
