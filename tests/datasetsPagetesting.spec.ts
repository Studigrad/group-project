import { expect } from "@playwright/test";
import { Browser, BrowserContext, chromium } from 'playwright';
import { test } from "../fixture/fixture";
import { LoginPage } from "../page-object/pages/LoginPage";
import { DatasetsPage } from "../page-object/pages/DatasetsPage";
import { deleteFile } from "../helpers/helpers";
import fs from 'fs';


test('Notebook opening', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();
  const datasetsPage = new DatasetsPage(page);
  await page.waitForLoadState();
  await datasetsPage.openDatasetsPage();
  const searchInputLocator = page.locator('Search datasets');
  await page.getByPlaceholder('Search datasets').click();
  await page.getByPlaceholder('Search datasets').fill('grand-theft-auto-v');
  await page.locator("(//div[@class='sc-jbicFF hIvzur'])[1]").click();
  await datasetsPage.newNotebookButton.click();

  const element = await page.locator('//div[contains(@class, "sc-dBnJEZ")]');
  await page.waitForSelector('//div[contains(@class, "sc-dBnJEZ")]');
  expect(element).toBeTruthy();
});



test('Set file downloading', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();
  const datasetsPage = new DatasetsPage(page);
  await datasetsPage.openDatasetsPage();
  const searchInputLocator = page.locator('Search datasets');
  await page.getByPlaceholder('Search datasets').click();
  await page.getByPlaceholder('Search datasets').fill('grand-theft-auto-v');
  await page.locator("(//div[@class='sc-jbicFF hIvzur'])[1]").click();
  const downloadPromise = page.waitForEvent('download');
  await datasetsPage.downloadButton.click();
  const download = await downloadPromise;
  const path = `./downloads/${download.suggestedFilename()}`;
  await download.saveAs(path);

  if (fs.statSync(path).size === 0) {
    console.error('File is empty');
    deleteFile(path);
    return;
  }
  deleteFile(path);
});

test('Upvoting', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();
  const datasetsPage = new DatasetsPage(page);
  await page.waitForLoadState();
  await datasetsPage.openDatasetsPage();
  const searchInputLocator = page.locator('Search datasets');
  await page.getByPlaceholder('Search datasets').click();
  await page.getByPlaceholder('Search datasets').fill('grand-theft-auto-v');
  await page.locator("(//div[@class='sc-jbicFF hIvzur'])[1]").click();
  const upvoteButtonLocator = '//button[@class="sc-hSWyVn sc-eFzpJt iJoZbm hPXpRk"]';
  const updatedCountElement = await page.locator(upvoteButtonLocator);

  const initialCount = await updatedCountElement.innerText();
  await datasetsPage.Upvote();
  await page.waitForTimeout(2000);
  const updatedCount = await updatedCountElement.innerText();
  console.log('Initial Count:', initialCount);
  console.log('Updated Count:', updatedCount);

  expect(parseInt(updatedCount)).toBe(parseInt(initialCount) + 1);
});
