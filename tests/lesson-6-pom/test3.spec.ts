import { test, expect } from "@playwright/test";
import { BasePage } from "../../pages/base-page";
import { ToDoPage } from "../../pages/todo-page";

test('Add todo and action after', async ({ page }) => {
    const basePage = new BasePage(page);
    const todoPage = new ToDoPage(page);
    const nameToDo = "ToDo";
    const url = "https://material.playwrightvn.com/";

    await test.step('Navigate to home page & todo page', async () => {
        await basePage.navigateTo(url);
        await todoPage.navigateToDoPage();
    })

    await test.step('Add todo and delete todo', async () => {
        await todoPage.addMultipleToDo(nameToDo, 100);
        await todoPage.deleteToDoWithCondition(0, 100);
    })

    await test.step(' Check todo 90 is viewport', async () => {
        const locatorTodo90 = await todoPage.getLocatorTask("ToDo 90");
        await expect(locatorTodo90).toBeInViewport();
    })

    await test.step('Check todo 21 is not in DOM', async () => {
        const locatorToDo21 = await todoPage.getLocatorTask("Todo 21");
        await expect(locatorToDo21).not.toBeAttached();
    })


})