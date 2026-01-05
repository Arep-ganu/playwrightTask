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

### Part 1 – Saucedemo (Shopping Cart & Checkout)
- Login with `standard_user` credentials
- Add 3 items to cart (T-Shirt, Fleece Jacket, Onesie)
- Cart badge validation
- Checkout form validation (empty form error handling)
- Order overview verification (item total, tax, final total)
- Success page confirmation

### Part 2 – Saucedemo (Authentication & Sorting)
- Login validation with invalid credentials (wrong password, empty password)
- `locked_out_user` error message verification
- `performance_glitch_user` login and product sorting tests
- Sort validation: Price (Low to High), Name (Z to A), Name (A to Z)
- Performance assertion test (expected to fail as edge case)

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

## 🌐 Test URLs

- **Part 1 & 2:** https://saucedemo.com
- **Part 3:** https://ant-design-form-test.harith-610.workers.dev

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
SAUCEDEMO_USERNAME=standard_user
SAUCEDEMO_PASSWORD=secret_sauce
```

## ✅ Key Requirements

- ✅ Playwright with TypeScript
- ✅ Page Object Model (POM) architecture
- ✅ Fixtures for reusability
- ✅ Role and ID-based locators (no `testId`)
- ✅ Proper `playwright.config.ts` configuration
- ✅ All tests runnable with single command

## ✅ Test Results

All tests are designed to pass in both headed and headless modes with proper wait strategies and timeout configurations.

---

**Author:** Arep-ganu  
**Last Updated:** January 2026
