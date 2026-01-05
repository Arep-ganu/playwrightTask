import { expect, Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page
    readonly title: Locator
    readonly usernameTextbox: Locator
    readonly passwordTextbox: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.title = page.locator('.title')
        this.usernameTextbox = page.locator('#user-name')
        this.passwordTextbox = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

    async goTo() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async accountLogin(username: string, password: string) {
        await this.usernameTextbox.fill(username)
        await this.passwordTextbox.fill(password)
        await this.loginButton.click()
    }
    async expectLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory.html/)
        await expect(this.title).toHaveText('Products')
    }
}