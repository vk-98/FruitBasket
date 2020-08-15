import React, { Component } from "react";
import DisplayFruits from "./DisplayFruits";
import Orange from "./Orange";
import Apple from "./Apple";
import Grapes from "./Grapes";
import Basket from "./Basket";

export class Dashboard extends Component {
  state = {
    fruits: [
      {
        id: "1",
        name: "Orange",
        count: 10,
      },
      {
        id: "2",
        name: "Apple",
        count: 10,
      },
      {
        id: "3",
        name: "Grapes",
        count: 10,
      },
    ],
    basket: [
        {
            id: "1",
            name: "Orange",
            count: 0,
          },
          {
            id: "2",
            name: "Apple",
            count: 0,
          },
          {
            id: "3",
            name: "Grapes",
            count: 0,
          },
    ]
  };
  addFruit = (id) => {
    this.setState({
      fruits: this.state.fruits.map((fruit) => {
        if (fruit.id === id) {
          fruit.count = Math.max(fruit.count - 1, 0);
        }
        return fruit;
      }),
      basket: this.state.basket.map(fruit => {
          if( fruit.id === id){
            fruit.count = Math.min(fruit.count + 1, 10);
          }
          return fruit
      })
    });
  };

  subtractFruit = (id) => {
    this.setState({
      fruits: this.state.fruits.map((fruit) => {
        if (fruit.id === id) {
          fruit.count = Math.min(fruit.count + 1, 10);
        }
        return fruit;
      }),
      basket: this.state.basket.map(fruit => {
        if( fruit.id === id){
          fruit.count = Math.max(fruit.count - 1, 0);
        }
        return fruit
    })
    });
  };

  render() {
    return (
        <div className="row">
            <Orange
            key={this.state.fruits[0].id}
            fruit={this.state.fruits[0]}
            addFruit={this.addFruit}
            subtractFruit={this.subtractFruit}
            />
            <Apple
            key={this.state.fruits[1].id}
            fruit={this.state.fruits[1]}
            addFruit={this.addFruit}
            subtractFruit={this.subtractFruit}
            />
            <Grapes
            key={this.state.fruits[2].id}
            fruit={this.state.fruits[2]}
            addFruit={this.addFruit}
            subtractFruit={this.subtractFruit}
            />
            
            <Basket fruits={this.state.basket}/>
        </div>
    )
  }
}

export default Dashboard;
