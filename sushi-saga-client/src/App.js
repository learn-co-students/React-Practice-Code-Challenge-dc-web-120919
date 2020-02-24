import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushi: [],
      eaten: [],
      plates: 0,
      moneyLeft: 100
    }
  }

  componentDidMount(){
    console.log("mounting!")
    fetch(API).then(res => res.json()).then(data => {
      this.setState({sushi: data})
    })
  }

  renderFourSushi = () => {
      return this.state.sushi.slice(this.state.plates, this.state.plates + 4)
  }

  sushiHandler = (sushi) => {
    console.log("I was clicked")
    if((this.state.moneyLeft-sushi.price) >= 0){
      let currentMoney = this.state.moneyLeft - sushi.price
      this.setState({
        eaten: [...this.state.eaten, sushi],
        moneyLeft: currentMoney
      })
    } else {
      alert(" Can't keep eating if you have no monies 🤑")
    }
  }

  getMoreSushi = () => {
    console.log("I'm getting 4 more plates")
    if (this.state.plates < 100){
      let currentPlate = this.state.plates
      this.setState({plates: 4 + currentPlate})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer renderFourSushi={this.renderFourSushi()} sushiHandler={this.sushiHandler} gettingMoreSushi={this.getMoreSushi} eatenSushi={this.state.eaten}/>
        <Table moneyLeft={this.state.moneyLeft} amountOfPlates={this.state.eaten}/>
      </div>
    );
  }
}

export default App;