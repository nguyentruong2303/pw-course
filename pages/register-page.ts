import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class RegisterPage extends BasePage {

    xpathRegisterPage = "//a[contains(text(),'Register Page')]";
    xpathUsername = "//input[@id='username']";
    xpathEmail = "//input[@id='email']";
    xpathMale = "//input[@id='male']";
    xpathFemale = "//input[@id='female']";
    xpathReading = "//input[@id='reading']";
    xpathTraveling = "//input[@id='traveling']";
    xpathCooking = "//input[@id='cooking']";
    xpathInterests = "//select[@id='interests']";
    xpathCountry = "//select[@id='country']";
    xpathDateOfBirth = "//input[@id='dob']";
    xpathProfilePicture = "//input[@id='profile']";
    xpathBio = "//textarea[@id='bio']";
    xpathRating = "//input[@id='rating']";
    xpathFavcolor = "//input[@id='favcolor']";
    xpathNewsLetter = "//input[@id='newsletter']";
    xpathRegisterButton = "//button[text()='Register']";

    xpathGetUsername = "//th[text()='Username']//ancestor::thead//following-sibling::tbody//td[2]";
    xpathGetEmail = "//th[text()='Username']//ancestor::thead//following-sibling::tbody//td[3]";
    xpathGetInfo = "//th[text()='Information']//ancestor::thead//following-sibling::tbody//td[4]";

    constructor(page: Page) {
        super(page);
    }

    async navigateToRegisterPage() {
        await this.page.locator(this.xpathRegisterPage).click();
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async selectGenderMale() {
        await this.page.locator(this.xpathMale).click();
    }

    async selectGenderFemale() {
        await this.page.locator(this.xpathFemale).click();
    }

    async selectHobbies() {
        await this.page.locator(this.xpathReading).check();
        await this.page.locator(this.xpathTraveling).check();
        await this.page.locator(this.xpathCooking).check();
    }

    async selectInterests(value: string) {
        await this.page.locator(this.xpathInterests).selectOption(value);
    }

    async selectCountry(country: string) {
        await this.page.locator(this.xpathCountry).selectOption(country);
    }

    async selectDateOfBirth(date: string) {
        await this.page.locator(this.xpathDateOfBirth).fill(date);
    }

    async addProfilePicture(fileName: string) {
        await this.page.locator(this.xpathProfilePicture).setInputFiles(fileName);
    }

    async fillBiography(bio: string) {
        await this.page.locator(this.xpathBio).fill(bio);
    }

    async selectRating(rate: string) {
        await this.page.locator(this.xpathRating).fill(rate);
    }

    async selectFavColor(color: string) {
        await this.page.locator(this.xpathFavcolor).fill(color);
    }

    async checkOnNewLetter() {
        await this.page.locator(this.xpathNewsLetter).check();
    }

    async clickOnRegister() {
        await this.page.locator(this.xpathRegisterButton).click();
    }

    async registerForm(username: string, email: string, interests: string, country: string, dob: string, fileName: string, bio: string, rate: string, color: string) {
        await this.fillUsername(username);
        await this.fillEmail(email);
        await this.selectGenderMale();
        await this.selectHobbies();
        await this.selectInterests(interests);
        await this.selectCountry(country);
        await this.selectDateOfBirth(dob);
        await this.addProfilePicture(fileName);
        await this.fillBiography(bio);
        await this.selectRating(rate);
        await this.selectFavColor(color);
        await this.checkOnNewLetter();
        await this.clickOnRegister();
    }

    async getUserName() {
        return await this.page.locator(this.xpathGetUsername).textContent();
    }

    async getEmail() {
        return await this.page.locator(this.xpathGetEmail).textContent();
    }

    async getInformation() {
        return await this.page.locator(this.xpathGetInfo).textContent();
    }

}