import React from 'react';
import logo from './logo.svg';
import './App.css';
const [a, b] = [3, 5];

const App = () => (
	<div className='App'>
		<header className='App-header'>
			<img src={logo} className='App-logo' alt='logo' />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className='App-link'
				href='https://reactjs.org'
				target='_blank'
				rel='noopener noreferrer'
				>
			</a>
				Learn React
				<ul>
					<li>ahmet</li>
					<li>sadık</li>
					<li>deniz</li>
				</ul>
				<span data-testid="span">{a + b}</span>
		</header>
	</div>
);

export default App;
