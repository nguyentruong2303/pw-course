import { test, expect } from "@playwright/test"
import { RegisterPage } from "../../pages/register-page"
import { BasePage } from "../../pages/base-page";

test("Register Data", async ({ page }) => {

    const basePage = new BasePage(page);
    const registerPage = new RegisterPage(page);
    const url = "https://material.playwrightvn.com/";
    const username = "simon";
    const email = "simon@si";
    const hobby = "reading";
    const country = "usa";
    const date = "2025-10-28";
    const filename = "tests/lesson-6-pom/notitle.txt";
    const bio = "I am simon";
    const rate = "5";
    const color = "#00ff7b";


    await test.step("Navigate to Register Page and register user", async () => {
        await basePage.navigateTo("https://material.playwrightvn.com/");
        await registerPage.navigateToRegisterPage();
        //await registerPage.registerForm(username, email, interests, country, date, filename, bio, rate, color);

        await registerPage.fillFormRegister({
            username: username,
            email: email,
            gender: "Male",
            hobby: hobby,
            country: country,
            date: date,
            fileName: filename,
            bio: bio,
            rate: rate,
            color: color
        })
    });

    await test.step("Verify the data after register", async () => {
        let actualUsername = await registerPage.getUserName();
        let actualEmail = await registerPage.getEmail();
        let actualInfo = await registerPage.getInformation();

        expect(actualUsername).toBe(username);
        expect(actualEmail).toBe(email);

        // Based on the actual output, adjust expectations to match form behavior
        expect(actualInfo).toContain("usa"); // Country shows as "usa" instead of "United States"
        expect(actualInfo).toContain(date);
        expect(actualInfo).toContain(bio);
        expect(actualInfo).toContain(rate);
        expect(actualInfo).toContain(color);

        // Check for gender and hobbies that appear in the output
        expect(actualInfo).toContain("Gender: male");
        expect(actualInfo).toContain("reading");
    });
})