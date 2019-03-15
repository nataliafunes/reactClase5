import React, {Component} from 'react';
import ReactDom from 'react-dom';


/*
function mostrarValores({nombre, apellido}){
    console.log(nombre);
    console.log(apellido);    
}

mostrarValores({
    nombre: 'Juan',
    apellido: 'Perez'
});*/

class HacerPost extends Component{
    constructor(props){
        console.log('const');
        super(props);
        this.state = {
            texto:'',
             estado: ''
        }
        this.doPost=this.doPost.bind(this);
    }

    doPost() {
        let self=this;
        this.setState({
            estado: 'aguarde' 
        });
        //fetch tiene: URL, HEADERS, METHOD y BODY
        fetch('https://api.github.com/users/jose/orgs',
            {
                headers: {
                "Accept": "Application/json",
                "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({dato: this.state.texto})
            }            
        ).then(function(resp){ //PROMISE CON LA RESPUESTA
            console.log(resp);
            self.setState({
                estado: resp.statusText
            });
        });   
    }

    render(){
        return (
            <div>
                <input type="text" onChange={z=> this.setState({texto:'2'})}/>
                <input type="button" value="Enviar" onClick={this.doPost}/>
                <h1>{this.state.estado}</h1>
            </div>
        );
    }
}

class HacerGet extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        let self=this;
        fetch('https://api.github.com/users/jose/orgs',
            {
                headers: {
                "Accept": "Application/json",
                "Content-Type": "application/json"
                },
                method: "GET"
            }            
        ).then(function(resp){ //PROMISE CON LA RESPUESTA
            console.log(resp.body);
            self.setState({
                login: 'el login mio',
                name: 'el nombre mio'
            });
        });   
    }

    render(){
        return(
            <div>
                   {this.state.login}<br/> 
                   {this.state.name} 
            </div>
        );
    }
}

ReactDom.render(
    <HacerGet></HacerGet>,
    document.getElementById('root')
);

