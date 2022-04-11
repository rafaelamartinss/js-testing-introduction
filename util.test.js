const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Rafaela', 21);
    expect(text).toBe('Rafaela (21 years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Rafaela', 22);
    expect(text).toBe('Rafaela (22 years old)');
})

test('should create an element with text', async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('file:///var/www/html/programming-studies/tests/js-testing-introduction/index.html');

    await page.click('input#name');
    await page.type('input#name', 'Rafaela');

    await page.click('input#age');
    await page.type('input#age', '22');

    await page.click('button#btnAddUser')

    const expectedElement = await page.$eval('.user-item', el => el.textContent);
    expect(expectedElement).toBe('Rafaela (22 years old)');
}, 6000);