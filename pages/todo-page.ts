import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ToDoPage extends BasePage {

    xpathToDoPage = "//a[@href='03-xpath-todo-list.html']";
    xpathInputNameToDo = "//input[@id='new-task']";
    xpathAddTaskButton = "//button[@id='add-task']";

    constructor(page: Page) {
        super(page);
    }

    // Method to get dynamic delete button selector for a specific todo ID
    getDynamicDeleteTaskButton(todoId: number): string {
        return `//button[@id='todo-${todoId}-delete']`;
    }

    getDynamicToDo(todoName : string) {
         return `//span[text()='${todoName}']//parent::li`;
    }

    async navigateToDoPage() {
        await this.page.locator(this.xpathToDoPage).click();
    }

    async inputNameToDo(nameToDo : string) {
        await this.page.locator(this.xpathInputNameToDo).fill(nameToDo);
    }

    async clickAddToDoButton() {
        await this.page.locator(this.xpathAddTaskButton).click();
    }

    async clickDeleteToDo(todoId: number) {
        await this.page.locator(this.getDynamicDeleteTaskButton(todoId)).click();
    }

    // Method to delete todo with dialog handling (using inherited setupDialogHandler from BasePage)
    async deleteTodoWithDialog(todoId: number) {
        // Set up dialog handler first (inherited from BasePage)
        await this.setupDialogHandler('accept');
        
        // Then click delete button which will trigger the dialog
        await this.clickDeleteToDo(todoId);
    }

    async addSingleToDo(nameToDo : string) {
        await this.inputNameToDo(nameToDo);
        await this.clickAddToDoButton();
    }

    async addMultipleToDo(nameToDo: string, count: number) {
        for(let i = 1; i <= count; i++) {
            // Add number to make each todo unique
            const todoWithNumber = `${nameToDo} ${i}`;
            await this.inputNameToDo(todoWithNumber);
            await this.clickAddToDoButton();
        }
    }

    async deleteToDoWithCondition(todoId: number, count: number) {
        
        await this.setupDialogHandler('accept');

        for(todoId = 1; todoId <= count; todoId += 2 ) {
            await this.clickDeleteToDo(todoId);
        }
    }

    async getLocatorTask(content: string) {
        return this.page.locator(`//span[text()='${content}']`);
    }

    async checkToDoStillInDOM(nameToDo : string) {
        await this.page.locator(this.getDynamicToDo(nameToDo)).isVisible();
    }

    async checkToDoInViewport(todoNumber: number): Promise<boolean> {
        const todoName = `ToDo ${todoNumber}`;  // Match the format used in addMultipleToDo
        const locator = this.page.locator(this.getDynamicToDo(todoName));


        
        // First check if element exists
        if (!(await locator.isVisible())) {
            return false;
        }
        
        // Check if element is actually in viewport using JavaScript
        return await locator.evaluate((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;
            
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= windowHeight &&
                rect.right <= windowWidth
            );
        });
    }

    async checkToDoNotInDOM(todoNumber: number): Promise<boolean> {
        const todoName = `ToDo ${todoNumber}`;
        const locator = this.page.locator(this.getDynamicToDo(todoName));
        
        // Check if element is NOT visible/present in DOM
        // This will return true if element is hidden or doesn't exist
        return !(await locator.isVisible());
    }



  


}