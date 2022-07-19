import React, { Component } from 'react';
import Cards from './components/Cards'
import Scroll from './components/Scroll'
import './App.css';
import Auto from './components/autocomplete';

class App extends Component {
  constructor() {
		super();
		this.state = {
			serachfield: '',
			games: [],
      descending: true
		}

	}
	componentDidMount() {
		
		fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json')
			.then( response => response.json())
			.then( game => {
				this.setState({games: game.slice(1).sort((a,b)=> b["score"]-a["score"])})
			})

      
	}

  onChangeHandler = (text) => {
		this.setState({ serachfield: text })
	}
  ascendingHandler = () => {
    this.setState({descending: !this.state.descending});
    if(this.state.descending) {
     return this.setState({games: this.state.games.sort((a,b)=> a["score"] - b["score"])})
    } else {
      return this.setState({games: this.state.games.sort((a,b)=> b["score"]-a["score"])})
    }
  }
  render() {
  const filtred = this.state.games.filter(game => {
    return game.title.toLowerCase().includes(this.state.serachfield)
  })
  return (
    <div className="App">
       <div className="tc">
				<h1 className="f1">Rent mojo games</h1>
				<Auto changed={this.onChangeHandler} ascordes={this.state.descending} ascordeshandler={this.ascendingHandler} item={this.state.games}/>
				<Scroll>
					<Cards games={filtred}/>
				</Scroll>
			</div>
    </div>
  );
}
}
export default App;
