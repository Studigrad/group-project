import { Page, chromium, Browser, expect } from "@playwright/test";   
    

    // 
    // let signInBtn = page.locator("(//button[@class='sc-eXzmLu jSfUoM'])[1]");
    // let signInByEmailBtn = page.locator("(//span[@class='sc-bBkKde epgXIi'])[2]");
    // // let signInBtn = page.locator("//div[@class='sc-dxfTlo dqVlR']/a/button[@class='sc-eXzmLu jSfUoM'][1]");
    // // let signInByEmailBtn = page.locator("(//div/button[@role='button']/i)[1]");
    // let emailField = page.locator("//input[@name='email']");
    // let passField = page.locator("//input[@name='password']");
    // let submitBtn = page.locator("//button[@type='submit']");

async function login() {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto('https://www.kaggle.com/');
    await page.locator("(//button[@class='sc-eXzmLu fyDCMu'])[1]").click();
    await page.locator("(//span[@class='sc-bBkKde epgXIi'])[2]").click();
    await page.locator("//input[@name='email']").fill('illyastud2002@gmail.com');
    await page.locator("//input[@name='password']").fill('Test12345@');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h1")).toHaveText(`Welcome, Test Hillel!`) 
    await page.context().storageState({path:'./LoginAuth.json'});
  }

export default login