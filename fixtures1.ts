import { test as base } from '@playwright/test'
import { InventoryPage } from '../pom/inventory1'
import { CartPage } from '../pom/cart1'
import { CheckoutPage } from '../pom/checkout1'
import { LoginPage } from '../pom/login1'

type MyFixtures = {
    inventoryPage: InventoryPage
    cartPage: CartPage
    checkoutPage: CheckoutPage
}
export const test = base.extend<MyFixtures>({
    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        const inventoryPage = new InventoryPage(page)

        const username = process.env.SAUCEDEMO_USERNAME!
        const password = process.env.SAUCEDEMO_PASSWORD!

        await loginPage.goTo()
        await loginPage.accountLogin(username, password)
        await loginPage.expectLoginSuccess()

        await use(inventoryPage)
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page)

        await use(cartPage)
    },

    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page)

        await use(checkoutPage)
    }
})