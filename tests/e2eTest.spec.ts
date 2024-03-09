import { test } from "../fixture/fixture";
import {LoginPage} from "../page-object/pages/LoginPage"

test.only("Login to site", async ({ loginPage, page }) => {
    // const login = new LoginPage(page);
    // await login.login();
    await page.waitForLoadState();
    await loginPage.Navigation.newNotebook();
    await loginPage.Navigation.newModel();
    await loginPage.Navigation.newOrganization();
    await loginPage.Navigation.newCompetition();
    await loginPage.Navigation.newDataset();
    await loginPage.Navigation.openUserRankings();
    await loginPage.Navigation.goHome();
    await loginPage.Navigation.openPrivacy();
    await page.pause();
});
