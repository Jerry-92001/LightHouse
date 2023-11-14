import test from "@playwright/test";
import { log } from "console";

test("brokenLink", async ({ page }) => {
  await page.goto("https://www.shriramfinance.in/");

  // Get all the links on the page
  const links = await page.$$eval("a", (elements) =>
    elements.map((element) => element.getAttribute("href"))
  );             

  for (const link of links) {
    if (link) {

        console.log(link + "Link");

        const  broken:string = link;
        const SFL:string = "https";

        if (!broken.startsWith(SFL)){

          const  concat = "https://www.shriramfinance.in"+ link;

          console.log(concat);


          const response = await page.goto(concat, { waitUntil: "domcontentloaded" });

          console.log(response?.status() + "Response");

        }
        else {
          const response = await page.goto(link, { waitUntil: "domcontentloaded" });
          console.log(response?.status() + "Response");
        }

        
        
        

    //   if (response.status() >= 400) {
    //     console.log(
    //       `Broken link: ${link} (HTTP status code ${response.status()})`
    //     );
    //   }
    }
  }
});
