import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders 3 list elements', () => {
	render(<App />);
	const listItems = screen.getAllByRole('listitem');

	expect(listItems.length).toBe(3);
});

test('span has correct value', () => {
	render(<App />);
	const span = screen.getByTestId('span');

	expect(span.textContent).toBe('8');
});
