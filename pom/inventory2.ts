import { Page, Locator, expect } from "@playwright/test"

export class InventoryPage {
    readonly page: Page
    readonly title: Locator
    readonly productPrices: Locator
    readonly productName: Locator
    readonly productContainer: Locator

    constructor(page: Page) {
        this.page = page
        this.title = page.locator('.title')
        this.productPrices = page.locator('.inventory_item_price')
        this.productName = page.locator('.inventory_item_name')
        this.productContainer = page.locator('.product_sort_container')
    }

    async expectLoaded() {
        await expect(this.page).toHaveURL(/inventory.html/)
        await expect(this.title).toHaveText('Products')
    }

    async sortLowtoHigh() {
        await this.productContainer.selectOption({ value: 'lohi' })
        const pricesText = await this.productPrices.allTextContents()
        const prices = pricesText.map((prices => parseFloat(prices.replace('$', ''))))
        const sortedPrices = [...prices].sort((a, b) => a - b)
        expect(prices).toEqual(sortedPrices)
    }
    async sortZtoA() {
        await this.productContainer.selectOption({ value: 'za' })
        const itemNameDescend = await this.productName.allTextContents()
        const sortedNamesDescend = [...itemNameDescend].sort((a, b) => b.localeCompare(a))
        expect(itemNameDescend).toEqual(sortedNamesDescend)
    }

    async sortAtoZ() {
        await this.productContainer.selectOption({ value: 'az' })
        const itemNameAscend = await this.productName.allTextContents()
        const sortedNamesAscend = [...itemNameAscend].sort((a, b) => a.localeCompare(b))
        expect(itemNameAscend).toEqual(sortedNamesAscend)
    }
}