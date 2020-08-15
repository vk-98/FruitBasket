import React, { Component } from 'react'

export class Basket extends Component {
    render() {
        return (
            <div className="center">
                <div className="row">
                    <div className="col s6 offset-s3">
                        <h1 className="blue white-text">My Basket</h1>
                    </div>    
                </div>
                <div className="row">
                    <div className="col s4">
                        <p className="orange white-text">Oranges</p>
                        <p> {this.props.fruits[0].count} </p>
                    </div>   
                    <div className="col s4">
                        <p className="red lighten-2 white-text">Apples</p>
                        <p> {this.props.fruits[1].count} </p>
                    </div>   
                    <div className="col s4">
                        <p className="green white-text">Grapes</p>
                        <p> {this.props.fruits[2].count} </p>   
                    </div>    
                </div>
                
            </div>
        )
    }
}

export default Basket
