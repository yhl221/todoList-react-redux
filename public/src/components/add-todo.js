import React, {Component} from 'react';
class AddTodo extends Component {

    add() {
        const text = this.refs.myText.value;
        {console.log(text)}
        this.props.onAdd(text);
        this.refs.myText.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" ref="myText"/>
                <button onClick={this.add.bind(this)}>添加</button>
            </div>
        )
    }
}

export default AddTodo;