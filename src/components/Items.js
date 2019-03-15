import React from 'react';
import {connect} from "react-redux";

class Items extends React.Component{
    
    constructor(props){
        super(props);
        this.handlerClick=this.handlerClick.bind(this);
    }

    handlerClick (e) {
        let key=e.target.key;
        this.props.quitar(key);
    }

    render(){
        let {items}=this.props;
        return (
            <div>
                {items.map(function(item){
                   return (<div>{item}<input type="button" value="-" key={item} onClick={this.handlerClick}/></div>);
                })}
            </div>
        )
    }
}

function mapStateToProps (state){ 
    return state;
}

const mapDispatchToProps = dispatch => ({
    quitar: (key) => {
        dispatch({
            type: "delete",
            key
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);