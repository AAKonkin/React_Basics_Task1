import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

function App() {
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				{},
				'Edit ',
				createElement('code', {}, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'LearnReact',
			),
			createElement('p', { className: 'CurrentYear' }, new Date().getFullYear()),
		),
	);
}

export default App;
