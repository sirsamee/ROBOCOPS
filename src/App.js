import React, {Component}from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from'./Scroll';

class App extends Component{
	constructor(){
		super()
		this.state= {
			robots: [],
			searchfields: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({searchfields: event.target.value})
		console.log(event.target.value);
		
	} 
	render() {
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
		})
		if (this.state.robots.lenght === 0){
			return <h1>Just chill a bit!</h1>
		}
		else {
	return(
		<div className='tc-l'>
		<h1>Robocops</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots ={filteredRobots}/>
		</Scroll>
		</div>

	);
	}
	}
}
export default App;