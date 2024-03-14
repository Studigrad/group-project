import { test as baseTest, expect, chromium, Page } from "@playwright/test";


type TestType = {
    additionalBaseUrl: string
};

export const test = baseTest.extend<TestType>({
    additionalBaseUrl: async ({ }, use) => {
        use("kaggle")
  },
  
});