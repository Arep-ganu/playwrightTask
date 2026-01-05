Playwright Technical Assessment

This repository contains a Playwright + TypeScript automation assessment consisting of three parts, designed to demonstrate UI test automation using Page Object Model (POM), fixtures, and robust locators (role/id).

All tests are runnable using a single command.

Tech Stack

Playwright

TypeScript

Page Object Model (POM)

Playwright Fixtures

Node.js

Assessment Coverage
Part 1 – Saucedemo (Authentication)

Login validation with valid and invalid credentials

Error message assertions

Role- and ID-based locators (no testId usage)

Part 2 – Saucedemo (Inventory, Cart & Checkout)

Product sorting validation (A–Z, Z–A, price)

Add-to-cart and cart verification

Checkout flow (information → overview → success)

Assertions on UI state and order completion

Performance-related assertion included as an edge case

Part 3 – Ant Design Form Validation

Required field validation (invalid submission)

Valid form submission flow

Summary page verification

Success confirmation assertion

Project Structure

tests/ – Test specifications for all three parts

pages/ – Page Object Models encapsulating UI interactions

fixtures/ – Shared fixtures for test setup and reuse

playwright.config.ts – Centralised Playwright configuration

Tests are independent and do not rely on execution order.

How to Run
Prerequisites

Node.js (LTS)
