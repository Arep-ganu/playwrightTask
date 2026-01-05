import { test as base } from '@playwright/test'
import { InventoryPage } from '../pom/inventory'
import { LoginPage } from '../pom/login'
export { expect } from '@playwright/test'

type MyFixtures = {
    inventoryPage: InventoryPage
    loginPage: LoginPage
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },

    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page)
        await use(inventoryPage)
    },

})
