import { expect, Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page
    readonly title: Locator
    readonly addCartTShirt: Locator
    readonly removeCartTShirt: Locator
    readonly addFleeceCartJacket: Locator
    readonly removeCartFleeceJacket: Locator
    readonly addCartOnesie: Locator
    readonly removeCartOnesie: Locator
    readonly cartLink: Locator
    readonly cartBadge: Locator

    constructor(page: Page) {
        this.page = page
        this.title = page.locator('.title')

        this.addCartTShirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.removeCartTShirt = page.locator('#remove-sauce-labs-bolt-t-shirt')

        this.addFleeceCartJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket')
        this.removeCartFleeceJacket = page.locator('#remove-sauce-labs-fleece-jacket')

        this.addCartOnesie = page.locator('#add-to-cart-sauce-labs-onesie')
        this.removeCartOnesie = page.locator('#remove-sauce-labs-onesie')

        this.cartBadge = page.locator('.shopping_cart_badge')
        this.cartLink = page.locator('.shopping_cart_link')
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL(/inventory.html/)
        await expect(this.title).toHaveText('Products')
    }

    async addProductToCart() {
        await this.addCartTShirt.click()
        await expect(this.removeCartTShirt).toBeVisible()

        await this.addFleeceCartJacket.click()
        await expect(this.removeCartFleeceJacket).toBeVisible()

        await this.addCartOnesie.click()
        await expect(this.removeCartOnesie).toBeVisible()
    }

    async expectCartBadge(count: number) {
        await expect(this.cartBadge).toHaveText(String(count))
    }

    async goToCart(){
        await this.cartLink.click()
        await expect(this.page).toHaveURL(/cart.html/)
    }
}