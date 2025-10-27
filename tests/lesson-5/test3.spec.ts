import { test } from "@playwright/test"

test('Todo Page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[contains(text(),'Todo page')]").click();

    for (let i = 0; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`Todo <${i}>`);
        await page.locator("//button[@id='add-task']").click();

    }

    // Phần xử lý dialog phải để riêng và xử lý trước khi nhấn delete
    page.on('dialog', async dialog => {
        dialog.accept();
    });

    for (let i = 1; i <= 100; i += 2) {
        let toDoSelect = `//button[@id='todo-${i}--delete']`;
        await page.locator(toDoSelect).click();
    }

})