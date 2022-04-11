const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Rafaela', 21);
    expect(text).toBe('Rafaela (21 years old)');
});