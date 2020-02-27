import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushiList: [],
      sushiIndex: 0,
      meal: [],
      wallet: 100,
    }
  }

  componentDidMount(){

    this.fetchSushi()
  }

  componentDidUpdate(){
    console.log('Sushi index:', this.state.sushiIndex)
  }

  fetchSushi = () => {
    fetch(API).then(res=>res.json()).then(data => this.setState({sushiList: data}))
  }

  moreSushiPlease = () => {
    let currentSushi = this.state.sushiIndex
    currentSushi += 4
    this.setState({
      sushiIndex: currentSushi
    })
  }

  eatSushi = (e, sushiObj) => {
    let newTab = this.state.wallet - sushiObj.price
    if(newTab >= 0 && !this.state.meal.includes(sushiObj)){
      let addToMeal = [...this.state.meal, sushiObj]
      addToMeal.length % 5 === 0? alert(`You've eaten a lot!`) : null 
      // console.log('number of meals', addToMeal.length%5)
      this.setState({
        meal: addToMeal,
        wallet: newTab,
      })
    }
  }

  addToWallet = (e) => {
    e.preventDefault()
    console.log('Adding to wallet..')
    let newFunds = this.state.wallet + parseInt(e.target.firstElementChild.value)
    this.setState({
      wallet: newFunds
    })
  }

  displayFourSushi = () => {
    
    let displayList = [...this.state.sushiList].slice(this.state.sushiIndex, this.state.sushiIndex+4)
    return displayList
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiList={this.displayFourSushi()} sushiIndex={this.state.sushiIndex} moreSushi={this.moreSushiPlease} eatSushi={this.eatSushi} sushiMeal={this.state.meal}/>
        
        <form onSubmit={e=>this.addToWallet(e)}>
        <input type="number" name="funds" placeholder="amount to add"></input>
        <input type="submit" value="Add Funds"></input>
        </form>
        <Table wallet={this.state.wallet} mealsEaten={this.state.meal}/>
      </div>
    );
  }
}

export default App;