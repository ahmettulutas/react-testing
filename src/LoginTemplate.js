import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login2 from './Login2';

jest.mock('axios', () => ({
	__esModule: true,

	default: {
		get: () => ({
			data: { id: 1, name: 'John' },
		}),
	},
}));
test('renders name input', () => {
	render(<Login2 />);
	const inputElement = screen.getByPlaceholderText('name');
	expect(inputElement).toBeInTheDocument();
});

test('renders password input', () => {
	render(<Login2 />);
	const passwordElement = screen.getByPlaceholderText('password');
	expect(passwordElement).toBeInTheDocument();
});

test('button is rendered', () => {
	render(<Login2 />);
	const buttonElement = screen.getByRole('button', { name: 'Login' });
	expect(buttonElement).toBeInTheDocument();
});

test('both inputs are blank', () => {
	render(<Login2 />);
	const passwordElement = screen.getByPlaceholderText('password');
	const inputElement = screen.getByPlaceholderText('name');
	expect(passwordElement).toHaveTextContent('');
	expect(inputElement).toHaveTextContent('');
});

test('inputs get the correct values', () => {
	render(<Login2 />);
	const passwordElement = screen.getByPlaceholderText('password');
	const inputElement = screen.getByPlaceholderText('name');
	const testName = 'test name';
	const testPassword = 'test password';

	userEvent.type(passwordElement, testPassword);
	userEvent.type(inputElement, testName);

	expect(inputElement).toHaveValue(testName);
	expect(passwordElement).toHaveValue(testPassword);
});

test('button is disabled', () => {
	render(<Login2 />);
	const buttonElement = screen.getByRole('button', { name: 'Login' });
	expect(buttonElement).toBeDisabled();
});

test('button is enabled', () => {
	render(<Login2 />);
	const passwordElement = screen.getByPlaceholderText('password');
	const inputElement = screen.getByPlaceholderText('name');
	const buttonElement = screen.getByRole('button', { name: 'Login' });

	const testName = 'test name';
	const testPassword = 'test password';

	userEvent.type(passwordElement, testPassword);
	userEvent.type(inputElement, testName);

	expect(buttonElement).not.toBeDisabled();
});

test('button text changes', () => {
	render(<Login2 />);
	const passwordElement = screen.getByPlaceholderText('password');
	const inputElement = screen.getByPlaceholderText('name');
	const buttonElement = screen.getByRole('button', { name: 'Login' });

	const testName = 'test name';
	const testPassword = 'test password';

	userEvent.type(passwordElement, testPassword);
	userEvent.type(inputElement, testName);
	userEvent.click(buttonElement);

	expect(buttonElement).toHaveTextContent(/Loading/i);
});

test('button text changes back', async () => {
	render(<Login2 />);
	const passwordElement = screen.getByPlaceholderText('password');
	const inputElement = screen.getByPlaceholderText('name');
	const buttonElement = screen.getByRole('button', { name: 'Login' });

	const testName = 'test name';
	const testPassword = 'test password';

	userEvent.type(passwordElement, testPassword);
	userEvent.type(inputElement, testName);
	userEvent.click(buttonElement);

	await waitFor(() => expect(buttonElement).not.toHaveTextContent(/Loading/i));
});

test('span renders the name', async () => {
	render(<Login2 />);
	const passwordElement = screen.getByPlaceholderText('password');
	const inputElement = screen.getByPlaceholderText('name');
	const buttonElement = screen.getByRole('button', { name: 'Login' });

	const testName = 'test name';
	const testPassword = 'test password';

	userEvent.type(passwordElement, testPassword);
	userEvent.type(inputElement, testName);
	userEvent.click(buttonElement);

	const userName = await screen.findByText('John');
	expect(userName).toBeInTheDocument();
});
