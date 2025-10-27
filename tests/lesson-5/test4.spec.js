import { test } from "@playwright/test"

test('Personal notes', async ({ page }) => {

    await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe");

    const title1 = await page.locator("//h4[@class='title-news']//a[contains(@href,'jobs')]").textContent();
    let title_1 = title1.trim()
    const content1 = await page.locator("//p[@class='description']/a[contains(@href,'jobs')]").textContent();


    const title2 = await page.locator("//h4[@class='title-news']//a[contains(@href,'sieu-tiet-kiem')]").textContent();
    let title_2 = title2.trim()

    const content2 = await page.locator("//p[@class='description']/a[contains(@href,'sieu-tiet-kiem')]").textContent();


    const title3 = await page.locator("//h4[@class='title-news']//a[contains(@href,'windows-10')]").textContent();
    let title_3 = title3.trim()

    const content3 = await page.locator("//p[@class='description']/a[contains(@href,'windows-10')]").textContent();


    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[contains(text(),'Personal notes')]").click();

    await page.locator("//input[@id='note-title']").fill(title1);
    await page.locator("//textarea[@id='note-content']").fill(content1);
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='note-title']").fill(title2);
    await page.locator("//textarea[@id='note-content']").fill(content2);
    await page.locator("//button[@id='add-note']").click();


    await page.locator("//input[@id='note-title']").fill(title3);
    await page.locator("//textarea[@id='note-content']").fill(content3);
    await page.locator("//button[@id='add-note']").click();

    await page.locator("//input[@id='search']").fill(title_1);
    await page.locator("//input[@id='search']").fill("");

    await page.locator("//input[@id='search']").fill(title_2);
    await page.locator("//input[@id='search']").fill("");

    await page.locator("//input[@id='search']").fill(title_3);

})