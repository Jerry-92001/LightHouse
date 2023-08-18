import { Page,expect } from "@playwright/test";

export namespace con_class{
    export  class X_paths{
    page:Page;
    constructor(page:Page){
        this.page = page;
    }

    investor =async ()=> await this.page.locator('#main_nav_investor').click();
    company =()=>this.page.locator('#locatorState');
    financial_SFL =()=>this.page.locator('div.container a#inv_financials_btn');
    financial_sub_menu =()=> this.page.$$('button.tab-btn');
    financial_result_PDF =()=>this.page.$$('section.container div#financial-results div.row a');
    investor_Information =()=>this.page.locator('//*[@id="sticky-tab"]/div/div/a[2]');
    share_Holding_Patter =()=>this.page.locator('section.container ');
    investor_Info_SFL=()=>this.page.locator('(//button[text()=" Investor Info "])[1]');
    investor_presentation =()=>this.page.locator('//h4[text()=" Investor Presentations "]');


   
    }

}