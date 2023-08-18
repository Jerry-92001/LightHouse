import { playAudit } from 'playwright-lighthouse'
import { test } from '@playwright/test';
const urls =[
  {
      url :"https://www.amazon.in/"
  },
  {
    url :"https://uat.shriramfinance.in/"
  },
  {
    url :"https://uat.shriramfinance.in/"
  }
]

urls.forEach((data,idx) => {

  test("Ligthouse performance test" + idx, async ({playwright}) => {
    const browser = await playwright.chromium.launch({
        args: ['--remote-debugging-port=9222'],
        headless: false
      })
        const context =await browser.newContext();
        const page =await context.newPage();
        await page.goto(data.url)
  
          await playAudit({
            page: page,
            thresholds: {
              performance: 30,
              accessibility: 50,
              'best-practices': 50,
              seo: 50,
              pwa: 50,
            },
             ignoreError:true,
            port: 9222,
              reports:{
              "formats":{html:true,csv:false,json:false},
              name:"lighthouse-report",
              directory:"lighthouse-report"+""+ Date.now().toString()
          }
          })
        await context.close();
  });
  
});
