import { Locator, Page, expect } from "@playwright/test";

type JobInformationData = {
    jobType: 'LTL' | 'FTL',
    tripOrder: 'Same Start' | 'Different Start',
    jobRemarks: string,
    fromCompany: string,
    toCompany: string,
    fromAddress: string,
    toAddress: string,
    unitMeasure: string,
    quantity: string,
    option: 'Option 1' | 'Option 2',
    tripRemarks: string,
}

export class JobInformation {
    readonly page: Page
    readonly jobTypeSelect: Locator
    readonly tripOrderSelect: Locator
    readonly jobRemarksInput: Locator
    readonly fromCompanySelect: Locator
    readonly toCompanySelect: Locator
    readonly fromAddressSelect: Locator
    readonly toAddressSelect: Locator
    readonly unitMeasureInput: Locator
    readonly quantityInput: Locator
    readonly optionSelect: Locator
    readonly tripRemarksInput: Locator
    readonly nextButton: Locator

    readonly fromCompanyError: Locator
    readonly toCompanyError: Locator
    readonly fromAddressError: Locator
    readonly toAddressError: Locator

    readonly successCheckmark: Locator

    constructor(page: Page) {

        this.page = page
        this.jobTypeSelect = page.getByRole('main').getByText('LTL')
        this.tripOrderSelect = page.getByRole('main').getByText('Same Start')
        this.jobRemarksInput = page.getByPlaceholder('Enter job remarks...')
        this.fromCompanySelect = page.getByRole('combobox', { name: 'From Company :' })
        this.toCompanySelect = page.getByRole('combobox', { name: 'To Company :' })
        this.fromAddressSelect = page.getByRole('combobox', { name: 'From Address :' })
        this.toAddressSelect = page.getByRole('combobox', { name: 'To Address :' })
        this.unitMeasureInput = page.getByRole('textbox', { name: 'Uom :' })
        this.quantityInput = page.getByRole('textbox', { name: 'Quantity :' })
        this.optionSelect = page.getByRole('combobox', { name: 'Options :' })
        this.tripRemarksInput = page.getByPlaceholder('Enter trip #1 remarks...')
        this.nextButton = page.getByRole('button', { name: 'Next' })

        this.fromCompanyError = page.locator('#fromCompany_help')
        this.toCompanyError = page.locator('#toCompany_help')
        this.fromAddressError = page.locator('#fromAddress_help')
        this.toAddressError = page.locator('#toAddress_help')

        this.successCheckmark = page.getByRole('img', { name: 'check' })
    }

    async expectLoaded() {
        await expect(this.successCheckmark).toBeVisible()
    }

    async fillJobInformation(data: JobInformationData) {
        await this.jobTypeSelect.click()
        await this.page.getByTitle(data.jobType).click()

        await this.tripOrderSelect.click()
        await this.page.getByText(data.tripOrder).nth(2).click()

        await this.jobRemarksInput.fill(data.jobRemarks)

        await this.unitMeasureInput.fill(data.unitMeasure)
        await this.quantityInput.fill(data.quantity)

        await this.optionSelect.click()
        await this.page.getByText(data.option).click()

        await this.tripRemarksInput.fill(data.tripRemarks)

        await this.nextButton.click()
    }

    async expectErrors() {

        await expect(this.fromCompanyError).toContainText('Please select from company')
        await expect(this.toCompanyError).toContainText('Please select to company')
        await expect(this.fromAddressError).toContainText('Please select from address')
        await expect(this.toAddressError).toContainText('Please select to address')
    }

    async fillTripInformation() {
        await this.fromCompanySelect.fill('metro')
        await this.page.getByText('- Metro Freight').nth(1).click()

        await this.fromAddressSelect.fill('warehouse A')
        await this.page.getByText('Customer Warehouse A').nth(1).click()

        await this.toAddressSelect.fill('pnmb')
        await this.page.getByText('PNMB Logistics Sdn. Bhd.').nth(1).click()

        await this.toCompanySelect.fill('0006')
        await this.page.getByText('- Distribution Partners').nth(1).click()

        await this.nextButton.click()
    }

}






