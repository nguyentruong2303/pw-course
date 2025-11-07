import {test} from "@playwright/test"

test.beforeEach(async () => {
    console.log("Before each");
})

test.afterEach(async () => {
    console.log("After each");
})

test("Tag page", async () => {
    console.log("Click on Menu");
    console.log("Click on Tag page");
})