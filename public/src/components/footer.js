import React,{Component} from 'react';
class Footer extends Component{
    setName(name){
        this.props.onsetName(name);
    }
    render(){
        return(
            <div>
                <button onClick={this.setName.bind(this,'All')}>All</button>
                <button onClick={this.setName.bind(this,'Active')}>Active</button>
                <button onClick={this.setName.bind(this,'Complete')}>Complete</button>
            </div>
        )
    }
}

export default Footer;