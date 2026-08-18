const puppeteer = require('puppeteer');
const path = require('path');

async function run() {
  const outputDir = 'C:\\Users\\avina\\.gemini\\antigravity\\brain\\67569af9-033c-4560-985d-0bdc61d48c87';
  
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Mobile 390px Viewport (Light Mode)
  console.log('Taking 390px Mobile Light Screenshot...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'mobile_390_light.png'), fullPage: true });

  // 2. Mobile 390px Viewport (Dark Mode)
  console.log('Taking 390px Mobile Dark Screenshot...');
  await page.evaluate(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'mobile_390_dark.png'), fullPage: true });

  // 3. Desktop 1440px Viewport (Light Mode)
  console.log('Taking 1440px Desktop Light Screenshot...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'desktop_1440_light.png'), fullPage: true });

  // 4. Desktop 1440px Viewport (Dark Mode)
  console.log('Taking 1440px Desktop Dark Screenshot...');
  await page.evaluate(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'desktop_1440_dark.png'), fullPage: true });

  console.log('All screenshots captured successfully!');
  await browser.close();
}

run().catch(err => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
