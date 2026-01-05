import { Page, Locator, expect } from "@playwright/test"

export class LoginPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly errorText: Locator
    readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.errorText = page.locator('.error-message-container')
        this.title = page.locator('.title')
    }

    async goTo() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async accountLogin(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }

    async expectLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory.html/)
        await expect(this.title).toHaveText('Products')
    }

    async expectError(text: string) {
        await expect(this.errorText).toBeVisible()
        await expect(this.errorText).toHaveText(text)
    }
}   