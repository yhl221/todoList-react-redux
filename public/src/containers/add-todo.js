import AddTodo from '../components/add-todo';
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
        onAdd:(text)=>{
            dispatch({type:'Add',text});
        }
    }
}

export default connect(()=>{return{}},mapDispatchToProps)(AddTodo);
