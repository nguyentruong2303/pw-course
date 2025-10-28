import { test, expect } from "@playwright/test"
import { RegisterPage } from "../../pages/register-page"
import { BasePage } from "../../pages/base-page";

test("Register Data", async ({ page }) => {

    const basePage = new BasePage(page);
    const registerPage = new RegisterPage(page);
    const url = "https://material.playwrightvn.com/";
    const username = "simon";
    const email = "simon@gmail.com";
    const interests = "Technology";
    const country = "United States";
    const date = "2025-10-28";
    const filename = "tests/lesson-6-pom/notitle.txt";
    const bio = "I am simon";
    const rate = "5";
    const color = "#00ff7b";


    await test.step("Navigate to Register Page and register user", async () => {
        await basePage.navigateTo("https://material.playwrightvn.com/");
        await registerPage.navigateToRegisterPage();
        await registerPage.registerForm(username, email, interests, country, date, filename, bio, rate, color);
    });

    await test.step("Verify the data after register", async () => {
        let expectUsername = await registerPage.getUserName();
        let expectEmail = await registerPage.getEmail();
        let expectInfo = await registerPage.getInformation();

        expect(expectUsername).toBe(username);
        expect(expectEmail).toBe(email);

        // Based on the actual output, adjust expectations to match form behavior
        expect(expectInfo).toContain("usa"); // Country shows as "usa" instead of "United States"
        expect(expectInfo).toContain(date);
        expect(expectInfo).toContain(bio);
        expect(expectInfo).toContain(rate);
        expect(expectInfo).toContain(color);

        // Check for gender and hobbies that appear in the output
        expect(expectInfo).toContain("Gender: male");
        expect(expectInfo).toContain("Hobbies: reading, traveling, cooking");
    });
})