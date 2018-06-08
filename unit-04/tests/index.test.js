const puppeteer = require('puppeteer');
    
describe('index.html', () => {
    const elements = ['html', 'head', 'title', 'meta', 'body', 'a', 'br', 'div', 'p', 'i', 'b', 'u', 'sub', 'sup', 'ruby', 'ul', 'ol', 'li', 'input', 'select', 'button', 'video', 'img', 'audio'];
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            // --no-sandbox option required to run test on Travis-CI
            // If you don't need it, this can be removed
            args: ['--no-sandbox']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:7777');
    });

    for (let tagName of elements) {
        it(`should have ${tagName} element`, async () => {
            await page.waitForSelector(tagName, { timeout: 100 });
        });
    }

    afterAll(async () => {
        await browser.close();
    });
});
