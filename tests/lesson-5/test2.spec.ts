import {test, expect} from "@playwright/test"

test('Product page', async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[contains(text(),'Product page')]").click();

    await page.locator("//button[@data-product-id='1']").dblclick();
    await page.locator("//button[@data-product-id='2']").dblclick();
    await page.locator("//button[@data-product-id='2']").click();
    await page.locator("//button[@data-product-id='3']").click();

})