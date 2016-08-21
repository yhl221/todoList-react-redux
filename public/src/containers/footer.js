import Footer from '../components/footer'
import {connect} from  'react-redux'

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {
        onsetName:(name)=>{
            dispatch({type:'ButtonName',name});
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Footer)