import { test } from '../fixtures/fixtures3'
import { BookingInformation } from '../pom/booking3'
import { JobInformation } from '../pom/job3'
import { ConfirmationPage } from '../pom/confirmation3'

test('test', async ({ page, bookingInformation, jobInformation, confirmationPage }) => {
    await bookingInformation.goTo()
    await bookingInformation.bruteForceInvalidInputs()
    await bookingInformation.fillValidInputs({
        billingCustomer: 'BUSINESS CUSTOMER',
        bookingType: 'FTL - Full Truck Load',
        references: 'Warehouse delivery',
        customerSo: 'SO12345',
        custRefs: 'Client bookings',
        commodity: 'Goods',
        shipperRequiredDate: 'NOW',
        truckType: '-Footer'
    })
    await jobInformation.expectLoaded()
    await jobInformation.fillJobInformation({
        jobType: 'FTL',
        tripOrder: 'Same Start',
        jobRemarks: 'warehouse',
        fromCompany: 'Metro Freight',
        toCompany: 'Distribution Partners',
        fromAddress: 'Customer Warehouse A',
        toAddress: 'PNMB Logistics Sdn. Bhd.',
        unitMeasure: 'asd',
        quantity: '123',
        option: 'Option 1',
        tripRemarks: 'house'
    })
    await jobInformation.expectErrors()
    await jobInformation.fillTripInformation()

    await confirmationPage.expectLoaded()
    await confirmationPage.submitBooking()

})

