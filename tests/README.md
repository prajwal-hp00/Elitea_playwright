# Playwright Automation Tests - The Internet App

This repository contains automated test scripts for testing [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) using Playwright with TypeScript.

## 📋 Test Coverage

### Homepage Verification Tests
- ✅ Verify homepage heading "Welcome to the-internet"
- ✅ Verify "Available Examples" subheading
- ✅ Verify page structure and layout

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests with UI mode (interactive)
```bash
npm run test:ui
```

### Run specific test file
```bash
npx playwright test tests/homepage.spec.ts
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 📊 Test Reports

This project generates multiple types of reports:

### 1. HTML Report (Primary)
After running tests, view the HTML report:
```bash
npm run test:report
```
Or manually open: `playwright-report/index.html`

**Features:**
- Interactive UI with test results
- Screenshots on failure
- Video recordings on failure
- Trace files for debugging
- Detailed test execution timeline

### 2. JSON Report
Located at: `test-results/results.json`
- Machine-readable format
- Useful for CI/CD integration
- Contains detailed test metrics

### 3. JUnit Report
Located at: `test-results/junit.xml`
- Standard XML format
- Compatible with CI/CD tools (Jenkins, GitLab, etc.)
- Test execution statistics

### 4. Console Reporter (List)
- Real-time test execution output in terminal
- Shows pass/fail status
- Execution time per test

## 📁 Project Structure

```
elitea-playwright/
├── tests/
│   └── homepage.spec.ts          # Homepage verification tests
├── playwright-report/             # HTML test reports (generated)
├── test-results/                  # JSON & JUnit reports (generated)
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## ⚙️ Configuration

The `playwright.config.ts` file includes:
- **Multiple Reporters**: HTML, JSON, JUnit, List
- **Browser Support**: Chromium, Firefox, WebKit
- **Base URL**: https://the-internet.herokuapp.com/
- **Screenshots**: Captured on failure
- **Videos**: Recorded on failure
- **Traces**: Captured on retry
- **Parallel Execution**: Enabled
- **Retry Logic**: 2 retries on CI

## 🎯 Test Execution Details

### Homepage Test Script Features:
1. **Navigation**: Automatically navigates to base URL
2. **Console Logging**: Detailed logs for each step
3. **Assertions**:
   - Main heading visibility and text verification
   - Subheading visibility and text verification
   - Examples list presence validation
4. **Error Handling**: Timeouts and retry mechanisms
5. **Reporting**: Automatic report generation with screenshots/videos on failure

## 📝 Test Output Example

```
✅ Navigated to: https://the-internet.herokuapp.com/
🧪 Starting test: Verify homepage heading and available examples text
📄 Page Title: The Internet
✅ Assertion passed: Main heading "Welcome to the-internet" is visible
✅ Assertion passed: Subheading "Available Examples" is visible
📋 Total examples available: 44
✅ Assertion passed: Examples list is present with items
🎉 Test completed successfully!
```

## 🐛 Debugging

### View test traces
```bash
npx playwright show-trace test-results/trace.zip
```

### Debug mode
```bash
npx playwright test --debug
```

### Headed mode with slow motion
```bash
npx playwright test --headed --slow-mo=1000
```

## 🔧 CI/CD Integration

The test configuration is CI-ready:
- Automatic retry on failure (2 retries)
- Multiple report formats
- Screenshot and video capture
- Configurable via environment variables

## 📈 Report Locations After Test Execution

| Report Type | Location | Purpose |
|------------|----------|---------|
| HTML Report | `playwright-report/index.html` | Interactive web report |
| JSON Report | `test-results/results.json` | Machine-readable results |
| JUnit XML | `test-results/junit.xml` | CI/CD integration |
| Screenshots | `test-results/` | Failure debugging |
| Videos | `test-results/` | Test execution recording |
| Traces | `test-results/` | Detailed debugging info |

## 📊 **Viewing Reports on GitHub**

**Important**: Reports are generated at runtime, not stored in the repository.

### ✅ **To See Reports on GitHub:**

1. **Set up GitHub Actions** (5 minutes):
   - Copy content from `GITHUB_ACTIONS_WORKFLOW.yml`
   - Create file: `.github/workflows/playwright-tests.yml`
   - Commit and push

2. **Access Reports**:
   - Go to **Actions** tab on GitHub
   - Click on workflow run
   - Download from **Artifacts** section

3. **Detailed Guides**:
   - 📖 [HOW_TO_VIEW_REPORTS_ON_GITHUB.md](../HOW_TO_VIEW_REPORTS_ON_GITHUB.md)
   - 🎯 [QUICK_START_GITHUB_ACTIONS.md](../QUICK_START_GITHUB_ACTIONS.md)
   - 🌐 [GITHUB_REPORTS_GUIDE.html](../GITHUB_REPORTS_GUIDE.html)

## 📞 Support

For issues or questions, please refer to:
- [Playwright Documentation](https://playwright.dev/)
- [Repository Issues](https://github.com/prajwal-hp00/Elitea_playwright/issues)
- [GitHub Actions Guide](../HOW_TO_VIEW_REPORTS_ON_GITHUB.md)

---

**Author**: Senior QA Automation Engineer  
**Framework**: Playwright with TypeScript  
**Last Updated**: 2024
