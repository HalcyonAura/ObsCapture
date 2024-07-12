import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
	headless: true,
	executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	channel: 'stable',
	args: [
                '--disable-features=IsolateOrigins,site-per-process,SitePerProcess',
                '--flag-switches-begin --disable-site-isolation-trials --flag-switches-end',
                "--window-position=000,000",
                "--disable-dev-shm-usage",
                "--no-sandbox",
              ]
});
const page = await browser.newPage();
url = ''
await page.goto(url, {
  waitUntil: 'networkidle2',
});
await page.setViewport({ width: 1280, height: 10000 }); // adjust height if too short

await new Promise(resolve => setTimeout(resolve, 10000)); 
await page.screenshot({
  path: 'hn.png',
  fullPage: true
});

await browser.close();
