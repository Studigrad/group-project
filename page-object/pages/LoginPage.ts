import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../BasePage";
import dotenv from "dotenv";
dotenv.config();

export class LoginPage extends BasePage {
  readonly emailField: any;
  readonly passField: any;
  readonly submitBtn: any;
  readonly signInBtn: any;
  readonly signInByEmailBtn: any;
  readonly kaggleTitle: any;

  constructor(page: Page) {
    super(page);
    this.signInBtn = page.locator("//div[@class='sc-dxfTlo dqVlR']/a/button[@class='sc-eXzmLu jSfUoM'][1]");
    this.signInByEmailBtn = page.locator("(//div/button[@role='button']/i)[1]");
    this.emailField = page.locator("//input[@name='email']");
    this.passField = page.locator("//input[@name='password']");
    this.submitBtn = page.locator("//button[@type='submit']");
    this.kaggleTitle = page.locator("//h1")/*[@class='sc-kFCroH sc-idnTxV ctlLBx SklmE']")*/
  }
  async login() {
    await this.page.goto(process.env.STAGE_URL as any);
    await this.signInBtn.click();
    await this.signInByEmailBtn.click();
    await this.emailField.fill(process.env.EMAIL as any);
    await this.passField.fill(process.env.PASSWORD as any);
    await this.submitBtn.click(); 
    await expect(this.kaggleTitle).toHaveText(`Welcome, Test Hillel!`)
    await expect(this.page).toHaveURL(process.env.STAGE_URL as any);
  }
}
