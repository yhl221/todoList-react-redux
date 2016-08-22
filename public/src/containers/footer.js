import Footer from '../components/footer'
import {connect} from  'react-redux'

function mapDispatchToProps(dispatch){
    return {
        onsetName:(name)=>{
            dispatch({type:'ButtonName',name});
        }
    };
}
export default connect(()=>{return{}},mapDispatchToProps)(Footer)