import{expect, test} from "@playwright/test"
import { con_class } from "./POJO/Locators"

const lead_form_links  = [
{
    links:'/commercial-vehicle-loan',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"

},
{
    links:'/commercial-goods-vehicle-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/passenger-commercial-vehicle-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/tractor-farm-equipment-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/construction-equipment-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/working-capital-loan',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/vehicle-insurance-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/tyre-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/tax-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/toll-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/repair-top-up-loan',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/fuel-finance',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
},
{
    links:'/challan-discounting',
    name:'sathish',
    mobile_number:'9512214559',
    email_id:'sathish.p@novactech.in',
    otp:['1','1','1','1','1','1'],
    Year:'1999',
    Month :'JAN',
    Date:'12',
    Loan_Amount : "500000",
    pincode:"606201"
}

]

    test.beforeEach(async ({ page}, testInfo) => {

        console.log(`Running ${testInfo.title}`);
        
    
    });

lead_form_links.forEach((data,idx)=>{


    test('lead_form'+(idx),async ({page,baseURL},testInfo) => {

        await page.goto(`${baseURL}`+data.links);
        await expect(page).toHaveURL(`${baseURL}`+data.links);
    
        const xp = new con_class.X_paths(page);

        await xp.name().fill(data.name);

        await xp.mobile().fill(data.mobile_number);

        await xp.email_id().fill(data.email_id);

        await xp.send_Otp().click();

        const otp_Box= await page.$$('div.input_field input.otp');

        const otp_len= otp_Box.length;

        for (let index = 1; index <= otp_len; index++) {

            await page.locator('#otpCode'+ index).fill(data.otp[index-1]);

            
        }

        await xp.verify_Otp().click();

        await xp.DOB().click();

        await xp.DOB_Elobration().click();

        const year = page.locator('div.mat-calendar-content div.mat-focus-indicator');

        if((await year.allInnerTexts()).includes(data.Year)){

            // console.log("Year in");
      
            await page.locator('div.mat-calendar-content').click();

        }

        page.waitForTimeout(1000)

        const month = page.locator('div.mat-calendar-content div.mat-focus-indicator');

        // console.log(await month.allInnerTexts());

        if((await month.allInnerTexts()).includes(data.Month)){

            console.log("Month in");
      
            await page.locator('div.mat-calendar-content').click();

        }

        page.waitForTimeout(1000);

        const date = page.locator('div.mat-calendar-content div.mat-focus-indicator');

        if((await date.allInnerTexts()).includes(data.Date)){

            // console.log("Date in");
      
            await  page.locator('div.mat-calendar-content').click();

        }

        page.waitForTimeout(1000)

        await xp.loan_amount().fill(data.Loan_Amount);
        await xp.pinocde().fill(data.pincode);

        await xp.form_submit().click();

        
        // Start waiting for response before clicking. Note no await.
        const selector =await page.waitForLoadState();

        const locator = page.locator('div.thank-you');
        await expect(locator).toContainText('Thank you'); 
       
      })

    })
    test.afterEach(async ({ page }, testInfo) => {
        
        console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);      
      
    if (testInfo.status !== testInfo.expectedStatus)

        console.log(`Did not run as expected, ended up at ${page.url()}`);

      });

