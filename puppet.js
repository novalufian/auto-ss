const puppeteer = require('puppeteer');
const config = require('./app/libs/config.json');

// (async () => {
//   const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
//   const page = await browser.newPage();
//   await page.setViewport({ width: 360, height: 740 });
//   await page.setContent()
//   await page.goto('https://m.kapanlagi.com');
//   await page.screenshot({path: 'buddy-screenshot.png'});

//   await browser.close();
// })();

console.log(config.kly_config.mobile.merdeka)