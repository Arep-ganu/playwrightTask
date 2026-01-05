import { expect, Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page
    readonly title: Locator
    readonly cartItemName: Locator
    readonly checkoutButton: Locator

    constructor(page: Page) {
        this.page = page
        this.title = page.locator('.title')
        this.cartItemName = page.locator('.inventory_item_name')
        this.checkoutButton = page.locator('#checkout')
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL(/cart.html/)
        await expect(this.title).toHaveText('Your Cart')
        await expect(this.checkoutButton).toBeVisible()
    }

    async expectItemInCart(itemName: string) {
        await expect(this.page.locator('.inventory_item_name').filter({ hasText: itemName })).toBeVisible()
    }

    async checkoutInfo() {
        await this.checkoutButton.click()
        await expect(this.page).toHaveURL(/checkout-step-one.html/)
    }
}