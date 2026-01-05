import { Page, Locator, expect } from "@playwright/test"

export class ConfirmationPage {
    readonly page: Page
    readonly title: Locator
    readonly submitButton: Locator
    readonly successIcon: Locator
    readonly createNewBookingButton: Locator

    constructor(page: Page) {
        this.page = page
        this.title = page.getByText('Booking Summary')
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.successIcon = page.getByRole('img', { name: 'check-circle' })
        this.createNewBookingButton = page.getByRole('button', { name: 'Create New Booking' })
    }

    async expectLoaded() {
        await expect(this.title).toBeVisible()
    }

    async submitBooking() {
        await this.submitButton.click()
        await expect(this.successIcon).toBeVisible()

    }
}  
