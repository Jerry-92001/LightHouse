import { playAudit } from '../index.js';
import playwright from 'playwright-core';
import{test} from "@playwright/test"


// test('audit example', () => {
//   let browser,page;

//   beforeEach(async () => {
//     browser = await playwright['chromium'].launch({
//       args: ['--remote-debugging-port=9223'],
//     });
//     page = await browser.newPage();
//     await page.goto('https://shriramfinance.in/');
//   });

//   afterEach(async () => {
//     await browser.close();
//   });

//   test.it('audits page', async () => {
//     await playAudit({
//       page: page,
//       thresholds: {
//         performance: 30,
//         accessibility: 50,
//         'best-practices': 50,
//         seo: 50,
//         pwa: 50,
//       },
//       port: 9223,
//     });
//   });

//   // it('no logs, no page, no errors', async () => {
//   //   const result = await playAudit({
//   //     url: 'https://shriramfinance.in/',
//   //     thresholds: {
//   //       performance: 50,
//   //       accessibility: 50,
//   //       'best-practices': 50,
//   //       seo: 50,
//   //       pwa: 50,
//   //     },
//   //     port: 9223,
//   //     ignoreError: true,
//   //     disableLogs: true,
//   //   });
//   // });

//   // it('ignore browserName', async () => {
//   //   await playAudit({
//   //     page: page,
//   //     ignoreBrowserName: true,
//   //     thresholds: {
//   //       performance: 30,
//   //       accessibility: 50,
//   //       'best-practices': 50,
//   //       seo: 50,
//   //       pwa: 50,
//   //     },
//   //     port: 9223,
//     // });
//   // });
// });

test('audit example', () => {
  ('open browser', async () => {
    const browser = await playwright['chromium'].launch({
      args: ['--remote-debugging-port=9222'],
    });
    const page = await browser.newPage();
    await page.goto('https://sone-cms.novactech.net/');

    await playAudit({
      page: page,
      port: 9222,
      reports: {
        formats: {
          json: true, //defaults to false
          html: true, //defaults to false
          csv: true, //defaults to false
        },
        name: `lighthouse-${new Date().getTime()}`, //defaults to `lighthouse-${new Date().getTime()}`
        directory: `${process.cwd()}/lighthouse` //defaults to `${process.cwd()}/lighthouse`
      },
    });
    await page.close();
    await browser.close();
  });
});