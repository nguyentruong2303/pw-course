import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class PersonalNotePage extends BasePage {

    xpathPersonalNote = "//a[@href='04-xpath-personal-notes.html']";
    xpathInputTitle = "//input[@id='note-title']";
    xpathInputContent = "//textarea[@id='note-content']";
    xpathInputSearch = "//input[@id='search']";
    xpathAddNoteButton = "//button[@id='add-note']";
    xpathTotalNotes = "//div[@id='note-count']";


    constructor(page: Page) {
        super(page);
    }

    async navigateToPersonalNotePage() {
        await this.page.locator(this.xpathPersonalNote).click();
    }

    async fillTitle(title: string) {
        await this.page.locator(this.xpathInputTitle).fill(title);
    }

    async fillContent(content: string) {
        await this.page.locator(this.xpathInputContent).fill(content);
    }

    async clickAddNoteButton() {
        await this.page.locator(this.xpathAddNoteButton).click();
    }

    async fillSearch(key : string) {
        await this.page.locator(this.xpathInputSearch).fill(key);
    } 

    async getTotalNotes() {
        return this.page.locator(this.xpathTotalNotes).textContent();
    }
}