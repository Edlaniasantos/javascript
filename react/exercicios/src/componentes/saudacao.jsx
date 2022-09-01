import React, { Component } from "react"

export default class saudacao extends Component{
    render(){
        const {tipo,nome}= this.state
        return (
            <div>
                <h1>{tipo}{nome}!</h1>
                <hr/>
                <input type="text" placeholder="tipo..."
                value= {tipo} onChange={e=> this.setTipo(e)}/>
                <input type= "text" placeholder="nome..." value={nome}
            </div>
        )
    }
}