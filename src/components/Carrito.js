import React from 'react';
import Items from "./Items";
import {connect} from "react-redux";

class Carrito extends React.Component{

    constructor(props){
        super(props);
        this.state={items:[]}
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick (e){
        let newItem=document.getElementById('txt_item').value;        
        this.props.agregar(newItem);
    }

    render(){
        return(
            <div>
                <div style={{position: "absolute",  width:"48%"}} id="div_items">
                        <fieldset>
                                <legend>items</legend>
                                <Items/>
                        </fieldset>
                </div>
                <div style={{position: "relative", width:"48%", float:"right"}} id="div_add_items" >
                    <fieldset>
                        <legend>Add items</legend>
                    <input type="text" id="txt_item"/>
                    <input type="button" id="btn_add" value="+" onClick={this.handlerClick}/>
                    </fieldset>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return state;
} 

const mapDispatchToProps = dispatch => ({
    agregar: (newItem) => {
        dispatch({
            type: "add",
            newItem
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Carrito);