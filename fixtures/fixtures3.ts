import { test as base } from '@playwright/test'
import { ConfirmationPage } from '../pom/confirmation3'
import { JobInformation } from '../pom/job3'
import { BookingInformation } from '../pom/booking3'

type MyFixtures = {
    bookingInformation: BookingInformation,
    jobInformation: JobInformation,
    confirmationPage: ConfirmationPage,
}

export const test = base.extend<MyFixtures>({
    bookingInformation: async ({ page }, use) => {
        const bookingInformation = new BookingInformation(page)
        await use(bookingInformation)
    },

    jobInformation: async ({ page }, use) => {
        const jobInformation = new JobInformation(page)
        await use(jobInformation)
    },

    confirmationPage: async ({ page }, use) => {
        const confirmationPage = new ConfirmationPage(page)
        await use(confirmationPage)
    },

})