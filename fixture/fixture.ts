import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../page-object/pages/LoginPage";
import { DatasetsPage } from "../page-object/pages/DatasetsPage";
import { SearchPage } from "../page-object/pages/SearchPage";
import { 
  filterInputLocator, 
  filterButtonLocator, 
  filterOptionsLocator, 
  csvButtonLocator, 
  applyButtonLocator, 
  filteredResultsLocator 
} from '../locators/locators';

type TestType = {
  loginPage: LoginPage;
  datasetsPage: DatasetsPage;
  searchPage: SearchPage;
  filterInputLocator: string; 
  filterButtonLocator: string;
  filterOptionsLocator: string;
  csvButtonLocator: string; 
  applyButtonLocator: string; 
  filteredResultsLocator: string;
};

export const test = baseTest.extend<TestType>({
  loginPage: async ({ page }, use, testInfo) => {
    let loginPage = new LoginPage(page);
    await use(loginPage);
  },
  datasetsPage: async ({page}, use) =>{
    let datasetsPage = new DatasetsPage(page);
    await use(datasetsPage);
  },
  searchPage: async ({page}, use) =>{
    let searchPage = new SearchPage(page);
    await use(searchPage);
  },

  filterInputLocator: async ({ page }, use) => {
    await use(filterInputLocator);
  },
  filterButtonLocator: async ({ page }, use) => {
    await use(filterButtonLocator);
  },
  filterOptionsLocator: async ({ page }, use) => {
    await use(filterOptionsLocator);
  },
  csvButtonLocator: async ({ page }, use) => {
    await use(csvButtonLocator);
  },
  applyButtonLocator: async ({ page }, use) => {
    await use(applyButtonLocator);
  },
  filteredResultsLocator: async ({ page }, use) => {
    await use(filteredResultsLocator);
  }
});
