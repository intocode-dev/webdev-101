const puppeteer = require('puppeteer');
    
describe('index.html', () => {
    const elements = ['html', 'head', 'title', 'meta', 'body', 'a', 'br', 'div', 'p', 'i', 'b', 'u', 'sub', 'sup', 'ruby', 'ul', 'ol', 'li', 'input', 'select', 'button', 'video', 'img', 'audio'];
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto('http://localhost:7777');
    });

    for (let tagName of elements) {
        it(`should have ${tagName} element`, async () => {
            await page.waitForSelector(tagName, { timeout: 100 });
        });
    }

    it(`should have a link to page-2.html`, async () => {
        const hrefs = await page.evaluate(() => {
            const anchors = document.querySelectorAll('a');
            return [].map.call(anchors, a => a.href);
        });
        const rs = hrefs.reduce((prev, href) => {
            if (prev || /page-2.html$/.test(href)) {
                return true;
            } else {
                return false;
            }
        }, false);

        expect(rs).toBe(true);
    });

    afterAll(async () => {
        await browser.close();
    });
});

describe('page-2.html', () => {
    let browser, page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        await page.goto('http://localhost:7777/page-2.html');
    });
    it(`should exists`, async () => {
        await page.waitForSelector('body');
    });

    afterAll(async () => {
        await browser.close();
    });
});