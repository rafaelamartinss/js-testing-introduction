const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Rafaela', 21);
    expect(text).toBe('Rafaela (21 years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Rafaela', 22);
    expect(text).toBe('Rafaela (22 years old)');
})