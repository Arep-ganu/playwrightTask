import { test } from '../fixtures/fixtures1'
import { LoginPage } from '../pom/login1'
import { InventoryPage } from '../pom/inventory1'
import { CartPage } from '../pom/cart1'
import { CheckoutPage } from '../pom/checkout1'

test('Part 1 Assessment', async ({ inventoryPage, cartPage, checkoutPage }) => {
    await inventoryPage.expectLoaded()
    await inventoryPage.addProductToCart()
    await inventoryPage.expectCartBadge(3)
    await inventoryPage.goToCart()

    await cartPage.expectLoaded()
    await cartPage.expectItemInCart('Sauce Labs Fleece Jacket')
    await cartPage.expectItemInCart('Sauce Labs Bolt T-Shirt')
    await cartPage.expectItemInCart('Sauce Labs Onesie')
    await cartPage.checkoutInfo()

    await checkoutPage.expectLoaded()
    await checkoutPage.expectErrorMessage()
    await checkoutPage.checkoutInfo()
    await checkoutPage.checkoutOverview()
    await checkoutPage.expectComplete()
})