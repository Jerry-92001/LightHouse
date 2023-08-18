import { Page } from "@playwright/test";

export namespace con_class{
    export  class X_paths{
    page:Page;
    constructor(page:Page){
        this.page = page;
    }

    name = () => this.page.locator("#cus_name");
    mobile= ()=>this.page.locator('#cus_mobile');
    email_id =()=> this.page.locator('#cus_email');
    send_Otp =()=>this.page.locator('button#pf-apply-btn');
    verify_Otp =() => this.page.locator('button#otpVerifybtn');
    DOB = () => this.page.locator('#loan-dob');
    DOB_Elobration =() => this.page.locator('//*[@id="mat-datepicker-0"]/mat-calendar-header/div/div/button[1]');
    loan_amount =() => this.page.locator("#cus_loanAmount");
    pinocde =()=> this.page.locator("#cus_pincode2");
    form_submit =()=> this.page.locator("#pf-apply-btn1");


   
    }

}