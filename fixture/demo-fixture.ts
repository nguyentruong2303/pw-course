import {test as base, Page} from "@playwright/test"

const test = base.extend<{dashboard: Page}>({
    dashboard: async ({ page }, use) => {
        //before each
        console.log("Login");

        //use
        await use(page);

        //after each
        console.log("Clean data");
    }
})
export {test}