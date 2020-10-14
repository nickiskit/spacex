import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Feature from './components/Feature'
import Footer from './components/Footer'
//import Calendar from './components/Calendar'
//import Details from './components/Details'
import FetchData from './service/FetchData'

import './style.css'

class App extends React.Component {

	fetchData = new FetchData();

	state = {
		rocket: 'Falcon 1',
		rocketFetures: null,
		rockets: [] 
	};

	componentDidMount() {
		this.updateRocket();
		//console.log(this.fetchData.getRocket());
	}

	updateRocket() {
		this.fetchData.getRocket()
			.then(data => {
				this.setState({rockets: data.map(item => item.name)})

				return data;
			})
			.then(data => data.find(item => item.name === this.state.rocket))
			.then(rocketFetures => {
				this.setState({rocketFetures});
				console.log(this.state);
			})
	}

	changeRocket = rocket => {
		this.setState({rocket},
			this.updateRocket()
		)
	}

	render() {
		return (
		    <>
		    <Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
		    <Main rocket={this.state.rocket}/>
		    <Feature />
		    <Footer />
		   </>
    	);
	}
}

export default App;
