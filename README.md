# Learn Playwright Fundamentals

This repository contains beginner Playwright examples written in TypeScript.

## What is Playwright?

Playwright is an open-source browser automation and end-to-end testing framework from Microsoft. It can control Chromium, Firefox, and WebKit, and provides a single API for actions such as navigating, clicking, filling forms, taking screenshots, and asserting page behavior.

Playwright is useful for:

- End-to-end and regression testing
- Cross-browser testing
- API testing
- Test generation with Codegen
- Screenshots, videos, traces, and HTML reports

## Windows setup

Open PowerShell in this folder and run:

```powershell
npm install
npx playwright install
```

Create a new Playwright project from an empty folder with:

```powershell
npm init playwright@latest
```

Global installation is optional. The project-local package is recommended:

```powershell
npm install --global playwright
```

## Common commands

Run all tests:

```powershell
npx playwright test
```

Run one test file:

```powershell
npx playwright test tests/01_Basics/216_example.spec.ts
```

Run tests in headed mode:

```powershell
npx playwright test --headed
```

Run a specific browser project:

```powershell
npx playwright test --project=chromium
```

Open the HTML report:

```powershell
npx playwright show-report
```

Debug a test:

```powershell
npx playwright test --debug
```

The VS Code Code Runner button uses `.vscode/run-playwright.ps1`: Playwright files ending in `.spec.ts` or `.test.ts` run with the Playwright Test runner, while standalone TypeScript files run with `tsx`.

Update Playwright and its browsers:

```powershell
npm install -D @playwright/test@latest
npx playwright install
```

## Playwright Codegen

Codegen opens a browser and records interactions, then generates Playwright code. It is useful for discovering locators and creating a first draft of a test.

```powershell
npx playwright codegen https://playwright.dev
```

The generated code should be reviewed and cleaned up before committing. Prefer accessible locators such as `getByRole`, `getByLabel`, and `getByText` where they are stable.

## Locators

The examples in `tests/03_Locators` demonstrate locating page elements with roles, labels, text, and CSS selectors. Prefer user-facing locators such as `getByRole` when they accurately identify the control:

```typescript
await page.getByRole('textbox', { name: 'Email' }).fill(email);
await page.getByRole('button', { name: 'Sign in' }).click();
```

The Wingify login example uses the button's `js-login-btn` ID from the page markup:

```typescript
await page.locator('#js-login-btn').click();
```

If the accessible role/name locator does not match the live page, inspect its accessible name and use a stable ID or test ID as a fallback.

Run the locator examples with:

```powershell
npx playwright test tests/03_Locators
```

## Saving an authenticated session

The session-storage example is a Playwright test, so Code Runner and the Playwright test runner can discover and execute it:

```powershell
npx playwright test tests/04_Session_Storage/233_SessionStorage.spec.ts --headed
```

Set `VWO_USER` and `VWO_PASS` in the root `.env` file before running it. After a successful login, the test writes browser storage state to `user-session.json`. This file contains authentication data, is ignored by Git, and should be kept private.

## CLI

The Playwright CLI is the `npx playwright` command. It manages test execution, browser installation, reports, traces, screenshots, and code generation. Run this to see all available commands:

```powershell
npx playwright --help
npx playwright test --help
```

## MCP

MCP, or Model Context Protocol, is a standard that lets an AI client use tools exposed by an MCP server. A Playwright MCP server can give an AI assistant browser capabilities such as navigating pages, inspecting the accessibility tree, clicking elements, filling forms, and taking screenshots.

MCP is a tool connection layer; it does not replace Playwright tests. Use it for interactive exploration and debugging, then keep repeatable checks as version-controlled Playwright test code.

## AI agents and Playwright

An AI agent can use Playwright to observe a page, choose an action, execute it, and inspect the result. A typical workflow is:

1. Navigate to the target page.
2. Inspect the page or accessibility tree.
3. Select a stable locator.
4. Perform an action such as click or fill.
5. Verify the resulting state.
6. Save the repeatable workflow as a test.

AI-generated tests still need human review. Check the locator quality, assertions, test data, permissions, and whether the test exposes credentials or personal information.

## Playwright architecture

The main layers are:

```text
Test file (.spec.ts)
        |
        v
Playwright Test runner
        |
        +--> Fixtures: browser, context, page
        |
        +--> Assertions, retries, workers, reporters
        |
        v
Playwright browser automation API
        |
        v
Browser process: Chromium, Firefox, or WebKit
        |
        v
Web application
```

- **Test runner:** Discovers tests, schedules workers, handles retries, and produces reports.
- **Browser:** A Playwright-managed browser engine such as Chromium, Firefox, or WebKit.
- **Browser context:** An isolated session with its own cookies, storage, permissions, and settings.
- **Page:** A browser tab where navigation and user actions occur.
- **Locators:** Resilient queries used to find elements, ideally based on user-facing semantics.
- **Assertions:** Checks that confirm the application reached the expected state.

## Login example configuration

Login examples that require an account read credentials from `TEST_EMAIL` and `TEST_PASSWORD`. Set them in the current PowerShell session before running the relevant test. Use credentials for the site being tested; never commit real credentials.

For example:

```powershell
$env:TEST_EMAIL = "your-email@example.com"
$env:TEST_PASSWORD = "your-password"
npx playwright test tests/03_Locators/232_getByRole.spec.ts --headed
```

## Project structure

```text
tests/01_Basics/       Playwright basics and login examples
tests/02_TestAnnotations/ Test annotation examples
tests/03_Locators/     Locator examples, including getByRole
playwright.config.ts   Test runner and browser configuration
package.json           npm scripts and dependencies
```