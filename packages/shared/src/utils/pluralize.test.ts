import { pluralize, depluralize } from '.';

describe('pluralize', () => {
	it('adds an s to the end of the string', () => {
		expect(pluralize('test')).toBe('tests');
	});

	it('removes an s to the end of the string', () => {
		expect(depluralize('tests')).toBe('test');
	});
});
