import { test, expect } from "@playwright/test";

test('register page',async ({page}) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.locator("//a[contains(text(),'Register Page')]").click();

    await page.locator("//input[@id='username']").fill('test123');   
    await page.locator("//input[@id='email']").fill('test123@gmail.com');   
    await page.locator("//input[@id='male']").click();  
    await page.locator("//input[@id='reading']").check();  
    await page.locator("//input[@id='traveling']").check();  
    await page.locator("//input[@id='cooking']").check();  
    await page.locator("//select[@id='interests']").selectOption("Technology");  
    await page.locator("//select[@id='interests']").selectOption("Music");  
    await page.locator("//select[@id='interests']").selectOption("Sports");  
    await page.locator("//select[@id='interests']").selectOption("Science");  
    await page.locator("//select[@id='country']").selectOption("Australia");  
    await page.locator("//input[@id='dob']").fill("2025-10-27");  
    await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/notitle.txt"); 
    await page.locator("//textarea[@id='bio']").fill("Test User Registration"); 
    await page.locator("//input[@id='rating']").fill("3"); 
    await page.locator("//input[@id='favcolor']").fill("#00fffb"); 
    await page.locator("//div[@class='tooltip']").hover(); 
    //await page.locator("//input[@id='toggleOption']").check(); 
    //await page.locator("//div[@id='starRating']").fill("3"); 
    await page.locator("//button[text()='Register']").click(); 

})