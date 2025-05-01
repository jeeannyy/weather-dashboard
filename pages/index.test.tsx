import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './index';

test('disables Search button when input is empty', () => {
	const { getByRole } = render(<HomePage />);
	const button = getByRole('button', { name: /search/i });
	expect(button).toBeDisabled();
});
