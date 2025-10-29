import {test, expect} from "@playwright/test";
import { BasePage } from "../../pages/base-page";
import { ToDoPage } from "../../pages/todo-page";

test('Add todo and action after', async ({page}) => {
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
        const isInViewport = await todoPage.checkToDoInViewport(90);
        expect(isInViewport).toBe(true); // Todo 91 should NOT be in viewport (likely deleted)
    })

    await test.step('Check todo 21 is not in DOM', async () => {
        const isNotInDOM = await todoPage.checkToDoNotInDOM(21);
        expect(isNotInDOM).toBe(true); // Todo 21 should be hidden/deleted (not in DOM)
    })


})