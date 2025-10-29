import { Page } from "@playwright/test"

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    // Set up dialog handler with optional action parameter - can be used by any page
    async setupDialogHandler(action: 'accept' | 'dismiss' = 'accept') {
        this.page.on('dialog', async dialog => {
            if (action === 'accept') {
                await dialog.accept();
            } else {
                await dialog.dismiss();
            }
        });
    }
}
