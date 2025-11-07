import {test as base, Page} from "@playwright/test"

const test = base.extend<{dashboard1: Page}>({
    dashboard1: async ({ page }, use) => {
        //before each
        console.log("Login");

        //use
        await use(page);

        //after each
        console.log("Clean data");
    }
})
export {test}