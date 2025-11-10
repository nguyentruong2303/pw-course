import { test, expect, request} from "@playwright/test"

test('Register', async ({request}) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users', {
        data : {user: {email: "kk979797@gmail.com", password: "kkk@979797", username: "kk979797"}}
    });

    const responseBody = await response.json();
    console.log(responseBody);
});

test(' Login and Create Article', async ({ request }) => {

    const responseLogin = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data : {user: {email: "kk979797@gmail.com", password: "kkk@979797"}}
    });

    const responseLoginBody = await responseLogin.json();
    const accessToken = responseLoginBody.user.token;

    const responseArticle = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data: {article: {title: "API in playwright", description: "How to use Playwright to create article", body: "How to use Playwright to create article", tagList: ["Playwright", "pw", "pw-k6"]}},
        headers: {
            Authorization: `Token ${accessToken}`
        }
    });
    const responseBody = await responseArticle.json();
    console.log(responseBody)

})

test(' Post comment in Article', async ({ request }) => {
    const responseLogin = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data : {user: {email: "kk979797@gmail.com", password: "kkk@979797"}}
    });

    const responseLoginBody = await responseLogin.json();
    const accessToken = responseLoginBody.user.token;

    for( let i = 1; i <= 5; i++) {
    const responseComment = await request.post('https://conduit-api.bondaracademy.com/api/articles/API-in-playwright-38444/comments', {
        data: {comment: {body: `Comment 0${i}`}},
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
    }
})

test(' Delete comment in Article', async ({request}) => {
    const responseLogin = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data : {user: {email: "kk979797@gmail.com", password: "kkk@979797"}}
    });

    const responseLoginBody = await responseLogin.json();
    const accessToken = responseLoginBody.user.token;

    const responseDeleteComment1 = await request.delete('https://conduit-api.bondaracademy.com/api/articles/API-in-playwright-38444/comments/96869', {
        headers: {
                Authorization: `Token ${accessToken}`
        }
    })

    const responseDeleteComment3 = await request.delete('https://conduit-api.bondaracademy.com/api/articles/API-in-playwright-38444/comments/96870', {
        headers: {
                Authorization: `Token ${accessToken}`
        }
    })

})

test('Update article', async ({request}) => {
    const responseLogin = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data : {user: {email: "kk979797@gmail.com", password: "kkk@979797"}}
    });

    const responseLoginBody = await responseLogin.json();
    const accessToken = responseLoginBody.user.token;

    const responseUpdateArticle = await request.put('https://conduit-api.bondaracademy.com/api/articles/API-in-playwright-38444', {
        data: {article: {title: "API in Playwright - updated", description: "How to use Playwright to create article and update article", body: "How to use Playwright to create article", tagList: ["Playwright", "pw", "pw-k6"]}},
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })

})

test('Delete article', async ({request}) => {
        const responseLogin = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data : {user: {email: "kk979797@gmail.com", password: "kkk@979797"}}
    });

    const responseLoginBody = await responseLogin.json();
    const accessToken = responseLoginBody.user.token;

    const responseDeleteArticle = await request.delete('https://conduit-api.bondaracademy.com/api/articles/API-in-Playwright-updated-38444', {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    })
})