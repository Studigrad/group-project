import { test } from "../fixture/fixture";
import { LoginPage } from "../page-object/pages/LoginPage"
import { DatasetsPage } from "../page-object/pages/DatasetsPage";
import { expect } from "@playwright/test"




test.describe('Dataset tests',()=>{

test("Login to site", async ({ loginPage, page }) => {
  const login = new LoginPage(page);
  await login.login();
  // await page.getByRole('button', { name: 'Dismiss' }).click();
  // await page.waitForTimeout(500);
  await page.waitForLoadState();
  // await login.Navigation.newModel();
  // await login.Navigation.newOrganization();
  await login.Navigation.newCompetition();
  await login.Navigation.newDataset();
  // await login.Navigation.openKaggleX();
  // await login.Navigation.openDocumentation();
  // await login.Navigation.openProgression();
  await login.Navigation.openUserRankings();
  // await login.Navigation.openHostCompetition();
  // await login.Navigation.openSupportContact();
  // await login.Navigation.openTeam();
  // await login.Navigation.openTerms();
  await login.Navigation.openPrivacy();
  await page.pause();
});

test("Upvote test", async({page}) => {
    const login = new LoginPage(page);
    await login.login();
    const datasetPage = new DatasetsPage(page)
    await datasetPage.openDatasetsPageFromNav()
    // await page.pause();

    const upvoteNmbText = await datasetPage.datasetsUpvoteNmb.innerText();
    const nmb = (+upvoteNmbText.trim())+1

    console.log(nmb);
    

    await page.pause();
    
    await datasetPage.datasetsUpvoteBtn.click();
    
    
    await expect(datasetPage.datasetsUpvoteNmb).toContainText(String(nmb));
    await datasetPage.datasetsUpvoteBtn.click();
})

});