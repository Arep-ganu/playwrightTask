import { test, expect } from '../fixtures/fixtures'
import { LoginPage } from '../pom/login'
import { InventoryPage } from '../pom/inventory'

test('standard_user wrong password', async ({ loginPage }) => {
    await loginPage.goTo()
    await loginPage.accountLogin('standard_user', 'qwerty')
    await loginPage.expectError('Epic sadface: Username and password do not match any user in this service')
})

test('standard_user no password', async ({ loginPage }) => {
    await loginPage.goTo()
    await loginPage.accountLogin('standard_user', '')
    await loginPage.expectError('Epic sadface: Password is required')
})

test('locked_out_user account', async ({ loginPage }) => {
    await loginPage.goTo()
    await loginPage.accountLogin('locked_out_user', 'secret_sauce')
    await loginPage.expectError('Epic sadface: Sorry, this user has been locked out.')
})

test('performance_glitch_user', async ({ loginPage, inventoryPage }) => {
    test.fail()
    await loginPage.goTo()
    await loginPage.accountLogin('performance_glitch_user', 'secret_sauce')
    await loginPage.expectLoginSuccess()

    await inventoryPage.expectLoaded()
    await inventoryPage.sortLowtoHigh()
    await inventoryPage.sortZtoA()

    const startTime = Date.now()
    await inventoryPage.sortAtoZ()
    const duration = Date.now() - startTime

    expect(duration).toBeLessThan(1000)

})
