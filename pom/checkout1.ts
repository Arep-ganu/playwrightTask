import { expect, Page, Locator } from '@playwright/test';


export class CheckoutPage {
    readonly page: Page
    readonly titleInfo: Locator
    readonly firstnameTextbox: Locator
    readonly lastnameTextbox: Locator
    readonly postalcodeTextbox: Locator
    readonly errorMessage: Locator
    readonly continueButton: Locator

    readonly titleOverview: Locator
    readonly subTotalLabel: Locator
    readonly taxLabel: Locator
    readonly totalLabel: Locator
    readonly finishButton: Locator

    readonly titleComplete: Locator

    constructor(page: Page) {
        this.page = page
        this.titleInfo = page.locator('.title')
        this.firstnameTextbox = page.locator('#first-name')
        this.lastnameTextbox = page.locator('#last-name')
        this.postalcodeTextbox = page.locator('#postal-code')
        this.errorMessage = page.locator('.error_button')
        this.continueButton = page.locator('#continue')

        this.titleOverview = page.locator('.title')
        this.subTotalLabel = page.locator('.summary_subtotal_label')
        this.taxLabel = page.locator('.summary_tax_label')
        this.totalLabel = page.locator('.summary_total_label')
        this.finishButton = page.locator('#finish')

        this.titleComplete = page.locator('.title')
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL(/checkout-step-one.html/)
        await expect(this.titleInfo).toHaveText('Checkout: Your Information')
    }

    async expectErrorMessage() {
        await this.continueButton.click()
        await expect(this.errorMessage).toBeHidden()
    }

    async checkoutInfo() {
        await this.firstnameTextbox.fill('Ricardo')
        await this.lastnameTextbox.fill('Milos')
        await this.postalcodeTextbox.fill('45400')
        await this.continueButton.click()
    }

    async checkoutOverview() {
        await expect(this.page).toHaveURL(/checkout-step-two.html/)
        await expect(this.titleOverview).toHaveText('Checkout: Overview')
        await expect(this.subTotalLabel).toHaveText('Item total: $73.97')
        await expect(this.taxLabel).toHaveText('Tax: $5.92')
        await expect(this.totalLabel).toHaveText('Total: $79.89')
    }

    async expectComplete() {
        await this.finishButton.click()
        await expect(this.page).toHaveURL(/checkout-complete.html/)
        await expect(this.titleComplete).toHaveText('Checkout: Complete!')
    }
}