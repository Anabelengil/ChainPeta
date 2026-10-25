// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainPeta title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainPeta/i);
    expect(titleElement).toBeInTheDocument();
});
