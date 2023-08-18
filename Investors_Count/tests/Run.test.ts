import{test} from "@playwright/test"
import { con_class} from "./locators/locators"

test('Investor_Count',async ({page,baseURL}) => {

    await page.goto(`${baseURL}`);
    const xp = new con_class.X_paths(page);
    await xp.investor();
    const fin_sub=(await xp.financial_result_PDF()).length;
    console.log(fin_sub);


   






})