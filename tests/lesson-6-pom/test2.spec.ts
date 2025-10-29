import { test, expect} from "@playwright/test";
import { BasePage } from "../../pages/base-page";
import { ProductPage } from "../../pages/product-page";

test('Add Product and Total price', async ({page}) => {
    const basePage = new BasePage(page);
    const productPage = new ProductPage(page);
    const url = "https://material.playwrightvn.com/";

    await test.step('Navigate to Home page and then to Product page', async () => {
        await basePage.navigateTo(url);
        await productPage.navigateToProductPage();

    });

    await test.step(' Add Product', async () => {
        await productPage.addProduct1();
        await productPage.addProduct1();

        await productPage.addProduct2();
        await productPage.addProduct2();
        await productPage.addProduct2();

        await productPage.addProduct3();
    
    });

    await test.step(' Verify the quantity after add product', async () => {
        let expectQuantityProduct1 = await productPage.getQuantityProduct1();
        let expectQuantityProduct2 = await productPage.getQuantityProduct2();
        let expectQuantityProduct3 = await productPage.getQuantityProduct3();

        // Convert quantity strings to numbers (quantities don't have $ symbols)
        let quantity1 = parseFloat(expectQuantityProduct1 || '0');
        let quantity2 = parseFloat(expectQuantityProduct2 || '0');
        let quantity3 = parseFloat(expectQuantityProduct3 || '0');

        await expect(quantity1).toEqual(2);
        await expect(quantity2).toEqual(3);
        await expect(quantity3).toEqual(1);

        
        // Get prices
        let expectPriceProduct1 = await productPage.getPriceProduct1();
        let expectPriceProduct2 = await productPage.getPriceProduct2();
        let expectPriceProduct3 = await productPage.getPriceProduct3();

        console.log(`Product 1: Quantity ${expectQuantityProduct1}, Price ${expectPriceProduct1}`);
        console.log(`Product 2: Quantity ${expectQuantityProduct2}, Price ${expectPriceProduct2}`);
        console.log(`Product 3: Quantity ${expectQuantityProduct3}, Price ${expectPriceProduct3}`);

        
        let price1 = parseFloat(expectPriceProduct1?.replace('$', '') || '0');
        let price2 = parseFloat(expectPriceProduct2?.replace('$', '') || '0');
        let price3 = parseFloat(expectPriceProduct3?.replace('$', '') || '0');

        // Calculate total: quantity × unit price for each product
        let calculatedTotal = (quantity1 * price1) + (quantity2 * price2) + (quantity3 * price3);
        
        console.log(`Calculated total: (${quantity1} × $${price1}) + (${quantity2} × $${price2}) + (${quantity3} × $${price3}) = $${calculatedTotal.toFixed(2)}`);
        
        // Get the actual total from the page
        let actualTotal = await productPage.getTotalPrice();
        let actualTotalNumber = parseFloat(actualTotal?.replace('$', '') || '0');
        
        console.log(`Actual total from page: ${actualTotal}`);
        
        // Verify the calculated total matches the page total
        expect(calculatedTotal).toEqual(actualTotalNumber);
    })
})