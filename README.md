# Elitea Playwright Automation Framework

## Overview
This repository contains automated test scripts using Playwright with TypeScript for testing the EPAM website.

## Test Scenario
The automated test covers the following steps:
1. **Navigate** to https://www.epam.com/
2. **Select** "Services" from the header menu
3. **Click** the "Explore Our Client Work" link
4. **Verify** that the "Client Work" text is visible on the page

## Project Structure
```
├── tests/
│   └── epam-client-work.spec.ts    # Main test file
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Node dependencies
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Elitea_playwright
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests on specific browser
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### Run mobile tests
```bash
npm run test:mobile
```

## Test Report
After running tests, view the HTML report:
```bash
npm run report
```

## Test Script Details

### Test File: `tests/epam-client-work.spec.ts`

The test suite includes:

1. **Main Test Case**: `should navigate to Client Work page via Services menu`
   - Navigates to EPAM homepage
   - Clicks on "Services" in the header menu
   - Clicks on "Explore Our Client Work" link
   - Verifies "Client Work" text is visible
   - Additional URL validation

2. **Helper Test Case**: `should verify Services menu is accessible`
   - Validates that Services menu is accessible on homepage

### Key Features
- ✅ TypeScript for type safety
- ✅ Page Object Model ready structure
- ✅ Console logging for test steps
- ✅ Multiple browser support (Chromium, Firefox, WebKit)
- ✅ Mobile browser testing
- ✅ Screenshot on failure
- ✅ Video recording on failure
- ✅ Trace collection for debugging
- ✅ HTML and JUnit reporting

## Configuration

The `playwright.config.ts` includes:
- **Parallel execution** for faster test runs
- **Retry mechanism** for flaky tests (CI only)
- **Multiple reporters**: HTML, List, JUnit
- **Screenshot** and **video** capture on failures
- **Trace collection** on first retry
- **Timeout configurations** for actions and navigation

## CI/CD Integration

The tests are CI/CD ready with:
- JUnit XML output for CI systems
- Configurable retry logic
- Optimized worker configuration for CI environments

## Troubleshooting

### Browser not found
If you encounter browser installation issues:
```bash
npx playwright install chrome
npx playwright install firefox
npx playwright install webkit
```

### Test timeouts
Increase timeout values in `playwright.config.ts`:
```typescript
use: {
  actionTimeout: 15000,
  navigationTimeout: 45000,
}
```

## Contributing
1. Create a feature branch
2. Make your changes
3. Run tests to ensure they pass
4. Submit a pull request

## License
ISC
