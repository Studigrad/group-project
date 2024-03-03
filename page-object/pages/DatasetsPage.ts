import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class DatasetsPage extends BasePage{
    datasetsPageLocator: any;
    datasetsUpvoteBtn: any;
    datasetsUpvoteNmb: any;
    datasetsPageLocatorNav: any;

    constructor(page){
        super(page);
        this.datasetsPageLocator = page.locator("//a[@data-click-log-id='nav-con-datasets']");
        this.datasetsPageLocatorNav = page.locator(`//a[@data-click-log-id="datasets"]`);
        this.datasetsUpvoteBtn = page.locator(`(//button[@data-testid="upvotebutton__upvote"])[1]`)
        this.datasetsUpvoteNmb = page.locator(`(//span[@class="sc-bBkKde sc-fccqSk epgXIi kpoHlg"])[1]`)
    }
    
    async openDatasetsPage(){
        await super.openMainPage();
        await this.datasetsPageLocator.click();
    }
    
    
    async openDatasetsPageFromNav(){
        await super.openMainPage();
        await this.datasetsPageLocatorNav.click();
    }
}