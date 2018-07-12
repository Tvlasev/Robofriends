import React from 'react';
import './app.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=> this.setState({robots: users}))
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if(!robots.length){
			return <h1 className='tc'>Loading...</h1>
		}else{
			return (
				<div className='tc'>
					<h1 id='title'>ROBOFRIENDS</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<CardList robots={filteredRobots} />
				</div>
			);
		}
  }
}

export default App;