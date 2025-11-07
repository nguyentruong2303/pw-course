import {test, expect} from "@playwright/test";
import { BasePage } from "../../pages/base-page";
import { PersonalNotePage } from "../../pages/personal-note-page";

test('Add note and search', async ({page}) => {

    const url = "https://material.playwrightvn.com/";
    const title1 = "Cách Steve Jobs 'ép' Corning làm kính cường lực cho iPhone";
    const content1 = "Khi Steve Jobs cần kính cường lực cho iPhone 2G năm 2007, ông đặt hàng Corning nhưng kèm theo.";
    const title2 = "Sinh viên Việt phát triển giải pháp phát hiện prompt độc hại";
    const content2 = "Nhóm sinh viên năm hai trường RMIT tối ưu hoá mô hình AI để phát hiện câu lệnh độc hại và giành giải nhất cuộc thi hackathon giữa 30 trường đại học.";
    

    const basePage = new BasePage(page);
    const personalNotePage = new PersonalNotePage(page);

    await test.step('Navigate to home page and personal page', async () => {
        await basePage.navigateTo(url);
        await personalNotePage.navigateToPersonalNotePage();
    })

    await test.step('Add note and search', async () => {
        await personalNotePage.fillTitle(title1);
        await personalNotePage.fillContent(content1);
        await personalNotePage.clickAddNoteButton();

        await personalNotePage.fillTitle(title2);
        await personalNotePage.fillContent(content2);
        await personalNotePage.clickAddNoteButton();

        await personalNotePage.fillTitle(title2);
        await personalNotePage.fillContent(content2);
        await personalNotePage.clickAddNoteButton();

        await personalNotePage.fillSearch(title1);
        await personalNotePage.fillSearch(title2);
        let expectTotalNotes = await personalNotePage.getTotalNotes();
        expect(expectTotalNotes).toContain("2");
    })
})