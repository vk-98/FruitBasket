import React, { Component } from 'react'
import PropType from 'prop-types';

export class Apple extends Component {
  render() {
    const { id, name, count } = this.props.fruit;
    return (
        <div className="col s4 red lighten-1 center" style={{minHeight: "200px"}}>
        
        <input type="button" className="btn green hoverable" onClick={this.props.addFruit.bind(this, id)} value=" + " />  {"   "}
        <input type="button" className="btn red darken-2 hoverable" onClick={this.props.subtractFruit.bind(this, id)} value=" - " />
        <h3 className="white-text">{name} - {count}</h3>
      </div>
    )
  }
}


Apple.propTypes = {
  fruit: PropType.object.isRequired
}

export default Apple;
