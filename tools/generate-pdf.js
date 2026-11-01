// Regenerates assets/Albert_Hernandez_Plaza_CV.pdf from the running site.
// Usage: bundle exec jekyll serve (other terminal), then:
//   npm i playwright && npx playwright install chromium && node tools/generate-pdf.js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.CV_URL || 'http://localhost:4000/');
  await page.waitForTimeout(1500); // web fonts
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: 'assets/Albert_Hernandez_Plaza_CV.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await browser.close();
})();
