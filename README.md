# Playwright Automation Test Suite

## Overview
This repository contains automated test scripts using Playwright with TypeScript for testing web applications.

## Project Structure
```
.
├── tests/                          # Test files directory
│   └── homepage-verification.spec.ts  # Homepage verification test
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Node.js dependencies
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

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

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### View test report
```bash
npm run test:report
```

## Test Scenarios

### 1. Homepage Verification Test
**File:** `tests/homepage-verification.spec.ts`

**Description:** Verifies that The Internet homepage loads correctly and displays expected content.

**Test Steps:**
1. Navigate to https://the-internet.herokuapp.com/
2. Wait for page to load completely
3. Verify heading "Welcome to the-internet" is displayed
4. Verify "Available Examples" text is displayed

**Assertions:**
- ✓ Main heading "Welcome to the-internet" is visible
- ✓ Main heading contains correct text
- ✓ "Available Examples" text is visible
- ✓ "Available Examples" contains correct text
- ✓ Page title is "The Internet"

## Test Output
The test script provides detailed console output for each step:
- Navigation confirmation
- Element visibility verification
- Text content validation
- Screenshot capture
- Final assertion summary

## Configuration

### Browser Configuration
The test suite is configured to run on:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)

You can modify browser settings in `playwright.config.ts`.

### Test Settings
- **Base URL:** https://the-internet.herokuapp.com/
- **Retries:** 2 on CI, 0 locally
- **Screenshots:** On failure only
- **Video:** Retained on failure
- **Trace:** On first retry

## Contributing
1. Create a new branch for your test scenario
2. Write test scripts following the existing pattern
3. Ensure all tests pass locally
4. Create a pull request

## Test Best Practices
- Use descriptive test names
- Add console logs for test steps
- Include assertions for all critical elements
- Capture screenshots for visual verification
- Use proper selectors (prefer test IDs over CSS selectors)
- Handle async operations properly with awaits

## Support
For issues or questions, please create an issue in the repository.

## License
ISC
