import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer/Footer'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
        <Cards></Cards>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
