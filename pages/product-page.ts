import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductPage extends BasePage {

    xpathProductPage = "//a[@href='02-xpath-product-page.html']";
    xpathAddCartProduct1 = "//button[@data-product-id='1']";
    xpathAddCartProduct2 = "//button[@data-product-id='2']";
    xpathAddCartProduct3 = "//button[@data-product-id='3']";

    xpathQuantityProduct1 = "//td[text()='Product 1']//following-sibling::td[2]";
    xpathQuantityProduct2 = "//td[text()='Product 2']//following-sibling::td[2]";
    xpathQuantityProduct3 = "//td[text()='Product 3']//following-sibling::td[2]";

    xpathPriceProduct1 = "//td[text()='Product 1']//following-sibling::td[1]"
    xpathPriceProduct2 = "//td[text()='Product 2']//following-sibling::td[1]"
    xpathPriceProduct3 = "//td[text()='Product 3']//following-sibling::td[1]"

    xpathTotalPrice = "//td[@class='total-price']";

    constructor(page: Page) {
        super(page);
    }

    async navigateToProductPage() {
        await this.page.locator(this.xpathProductPage).click();
    }

    async addProduct1() {
        await this.page.locator(this.xpathAddCartProduct1).click();
    }

    async addProduct2() {
        await this.page.locator(this.xpathAddCartProduct2).click();
    }

    async addProduct3() {
        await this.page.locator(this.xpathAddCartProduct3).click();
    }

    async getQuantityProduct1() {
        return this.page.locator(this.xpathQuantityProduct1).textContent();
    }

    async getQuantityProduct2() {
        return this.page.locator(this.xpathQuantityProduct2).textContent();
    }

    async getQuantityProduct3() {
        return this.page.locator(this.xpathQuantityProduct3).textContent();
    }

    async getPriceProduct1() {
        return this.page.locator(this.xpathPriceProduct1).textContent();
    }

    async getPriceProduct2() {
        return this.page.locator(this.xpathPriceProduct2).textContent();
    }

    async getPriceProduct3() {
        return this.page.locator(this.xpathPriceProduct3).textContent();
    }

    async getTotalPrice() {
        return this.page.locator(this.xpathTotalPrice).textContent();
    }


}