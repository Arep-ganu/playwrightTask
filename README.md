# Playwright Technical Assessment

This repository contains a Playwright + TypeScript automation assessment consisting of three parts, designed to demonstrate UI test automation using Page Object Model (POM), fixtures, and robust locators (role/id).

All tests are runnable using a single command.

## 🛠️ Tech Stack

- **Playwright** - Modern end-to-end testing framework
- **TypeScript** - Type-safe test development
- **Page Object Model (POM)** - Maintainable test architecture
- **Playwright Fixtures** - Reusable test setup
- **Node.js** - Runtime environment

## 📋 Assessment Coverage

### Part 1 – Saucedemo (Authentication)
- Login validation with valid and invalid credentials
- Error message assertions
- Role- and ID-based locators (no `testId` usage)

### Part 2 – Saucedemo (Inventory, Cart & Checkout)
- Product sorting validation (A–Z, Z–A, price)
- Add-to-cart and cart verification
- Checkout flow (information → overview → success)
- Assertions on UI state and order completion
- Performance-related assertion included as an edge case

### Part 3 – Ant Design Form Validation
- Required field validation (invalid submission)
- Valid form submission flow
- Summary page verification
- Success confirmation assertion

## 📁 Project Structure

```
├── tests/              # Test specifications for all three parts
├── pom/                # Page Object Models encapsulating UI interactions
├── fixtures/           # Shared fixtures for test setup and reuse
└── playwright.config.ts # Centralised Playwright configuration
```

Tests are independent and do not rely on execution order.

## 🚀 How to Run

### Prerequisites
- Node.js (LTS version recommended)

### Installation & Execution

Run all tests with a single command:

```bash
npm test
```

This command will:
1. Install all dependencies
2. Install Playwright browsers
3. Execute all test suites

### Individual Test Execution

```bash
# Run specific test file
npx playwright test part1.spec.ts
npx playwright test part2.spec.ts
npx playwright test part3.spec.ts

# Run in headed mode
npx playwright test --headed

# Run in debug mode
npx playwright test --debug
```

### View Test Reports

```bash
npx playwright show-report
```

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
SAUCEDEMO_USERNAME=your_username
SAUCEDEMO_PASSWORD=your_password
```

## ✅ Test Results

All tests are designed to pass in both headed and headless modes with proper wait strategies and timeout configurations.

---

**Author:** Arep-ganu  
**Last Updated:** January 2026
