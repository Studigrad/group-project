import { expect } from "@playwright/test";
import { test } from "../../fixture/fixture"; 
import { 
    filterInputLocator, 
    filterButtonLocator, 
    filterOptionsLocator, 
    csvButtonLocator, 
    applyButtonLocator, 
    filteredResultsLocator 
} from '../../locators/locators';


test.describe("Kaggle datasets page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.kaggle.com/datasets');
    });

    test('Check filter field', async ({ page }) => {

        const filterInput = await page.$(filterInputLocator);
        expect(filterInput).not.toBeNull();

        await filterInput?.type('Machine Learning');

        await page.waitForSelector(filteredResultsLocator);

        const filteredResults = await page.$$(filteredResultsLocator);
        expect(filteredResults.length).toBeGreaterThan(0);
    });

    test('Check filter button', async ({ page }) => {

        const filterButton = await page.$(filterButtonLocator);
        expect(filterButton).not.toBeNull();

        await filterButton?.click();

        await page.waitForSelector(filterOptionsLocator);

        const filterOptions = await page.$(filterOptionsLocator);
        expect(filterOptions).not.toBeNull();

        const csvButton = await page.$(csvButtonLocator);
        expect(csvButton).not.toBeNull();
        await csvButton?.click();

        await page.click(applyButtonLocator);

        const filteredResults = await page.$$(filteredResultsLocator);
        expect(filteredResults).not.toBeNull();
    });
});
