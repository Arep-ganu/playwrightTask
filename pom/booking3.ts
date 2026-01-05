import { Page, Locator, expect } from '@playwright/test'

type BookingInformationData = {
    billingCustomer: 'PERSONAL CUSTOMER' | 'BUSINESS CUSTOMER',
    bookingType: 'LTL - Less than Truck Load' | 'FTL - Full Truck Load',
    references: string,
    customerSo: string,
    custRefs: string,
    commodity: string,
    shipperRequiredDate: 'NOW' | string,
    truckType: string,
}

export class BookingInformation {
    readonly page: Page
    readonly shipperRequiredDate: Locator
    readonly truckTypeSelect: Locator
    readonly billingCustomerSelect: Locator
    readonly bookingTypeSelect: Locator
    readonly referencesInput: Locator
    readonly customerSoInput: Locator
    readonly custRefsInput: Locator
    readonly commodityInput: Locator
    readonly nextButton: Locator
    readonly successCheck: Locator
    readonly title: Locator

    constructor(page: Page) {
        this.page = page
        this.shipperRequiredDate = page.getByRole('textbox', { name: '* Shipper Required Date :' })
        this.truckTypeSelect = page.getByRole('combobox', { name: '* Truck Type :' })
        this.billingCustomerSelect = page.getByRole('main').getByText('- PERSONAL CUSTOMER')
        this.bookingTypeSelect = page.getByRole('main').getByTitle('LTL - Less than Truck Load')
        this.referencesInput = page.getByRole('textbox', { name: 'References :' })
        this.customerSoInput = page.getByRole('textbox', { name: 'Customer So :' })
        this.custRefsInput = page.getByRole('textbox', { name: 'Cust Refs :' })
        this.commodityInput = page.getByRole('textbox', { name: 'Commodity :' })
        this.nextButton = page.getByRole('button', { name: 'Next' })
        this.successCheck = page.getByRole('img', { name: 'check' })
        this.title = page.getByRole('heading', { name: 'Total Jobs :' })
    }

    async goTo() {
        await this.page.goto('https://ant-design-form-test.harith-610.workers.dev/')
    }

    async bruteForceInvalidInputs() {
        await this.shipperRequiredDate.clear()
        await this.shipperRequiredDate.fill('qwerty')
        await this.shipperRequiredDate.blur()
        await expect(this.shipperRequiredDate).not.toHaveValue('qwerty')
        await expect(this.shipperRequiredDate).toHaveAttribute('placeholder', /select date/i)

        await this.truckTypeSelect.click()
        await this.truckTypeSelect.type('qwerty12345')
        await this.truckTypeSelect.blur()
        await expect(this.truckTypeSelect).not.toContainText(/qwerty12345/i)

    }

    async fillValidInputs(data: BookingInformationData) {
        await this.billingCustomerSelect.click()
        await this.page.getByText('- BUSINESS CUSTOMER').nth(1).click()
        await this.bookingTypeSelect.click()
        await this.page.getByText('FTL - Full Truck Load').nth(1).click()
        await this.referencesInput.fill(data.references)
        await this.customerSoInput.fill(data.customerSo)
        await this.custRefsInput.fill(data.custRefs)
        await this.commodityInput.fill(data.commodity)
        await this.shipperRequiredDate.fill(data.shipperRequiredDate)
        await expect(this.page.getByRole('row', { name: 'Su Mo Tu We Th Fr Sa' })).toBeVisible()
        await this.page.getByText('Now').click()
        await this.truckTypeSelect.click()
        await this.page.getByText('-Footer').nth(2).click()

        await this.nextButton.click()
    }

}
