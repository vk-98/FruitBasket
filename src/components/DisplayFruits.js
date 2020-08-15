import React, { Component } from 'react'
import PropType from 'prop-types';

export class DisplayFruits extends Component {
  render() {
    const { id, name, count } = this.props.fruit;
    return (
      <div className="col s4 blue lighten-3">
        <input type="button" style={fruitStyle} onClick={this.props.addFruit.bind(this, id)} value="+" /> 
        <input type="button" className="offset-s1" onClick={this.props.subtractFruit.bind(this, id)} value="-" />
        <h3>{name} - {count}</h3>
      </div>
    )
  }
}

const fruitStyle = {
  margin: "10px",
  align: "cemter"
}

DisplayFruits.propTypes = {
  fruit: PropType.object.isRequired
}

export default DisplayFruits;
