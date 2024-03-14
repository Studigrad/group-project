import { expect } from "playwright-elements";
import { test } from "../fixture/testFixture";
import {LoginPage} from "../page-object/pages/LoginPage"

test.describe.only("Tests",()=>{

    test("Login to site", async ({baseURL}) => {
        console.log(baseURL)
    });
})

