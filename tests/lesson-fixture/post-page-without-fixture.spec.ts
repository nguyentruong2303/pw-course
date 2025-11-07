import {test} from "@playwright/test"

test.beforeEach(async () => {
    console.log("Before Each");
});

test.afterEach(async () => {
    console.log("After each");
})

test("Start test", async () => {
    console.log("Click on Menu");
    console.log("Click on Post page");
});