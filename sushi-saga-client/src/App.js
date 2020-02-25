import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = { 
    allSushi : [],
    sushiIndex: 0, 
    eatenSushi : [],
    budget: 100
    
  }
  componentDidMount(){ 
    fetch(API)
    .then(res => res.json())
    .then(sushiRolls => this.setState({allSushi : sushiRolls}))
  }
getFour = () => { 
return this.state.allSushi.slice(this.state.sushiIndex, this.state.sushiIndex+4)
}
nextFour = () => { 
  let newFour = this.state.sushiIndex + 4 
  this.setState({sushiIndex: newFour})
}

addEatenSushi = (sushi) =>{ 
  if(this.state.budget > sushi.price){ 
  let addedSushi = [...this.state.eatenSushi, sushi]
  let newBudget = this.state.budget - sushi.price
  this.setState({eatenSushi: addedSushi, budget: newBudget})
  } 
  else{ 
    alert("No Free Meals El Broke-o")
  }
}

addMoney =(event) => { 
 event.preventDefault()
let newBudget = parseInt(this.state.budget) + parseInt(event.target.childNodes[0].value)
this.setState({budget: newBudget})
event.target.reset()
}

// moneyCount = (sushi) => {
//   console.log(sushi) 

// }
  render() {
    
    return (
      <div className="app">
        <SushiContainer allSushi={this.getFour} nextFour={this.nextFour} addEatenSushi={this.addEatenSushi} eatenStatus={this.state.eatenSushi} />
        <Table  eatenSushi={this.state.eatenSushi} moneyLeft={this.state.budget} />
        <MoneyForm addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;