# Elitea Playwright Automation Framework 🎭

[![Playwright](https://img.shields.io/badge/Playwright-v1.40-45ba4b?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tests](https://img.shields.io/badge/Tests-Automated-green)](https://github.com/prajwal-hp00/Elitea_playwright)

**Professional-grade end-to-end testing framework** for web applications using Playwright and TypeScript with comprehensive reporting capabilities.

## 🎯 Project Overview

This repository contains automated test scripts for web application testing with a focus on:
- ✅ Reliable and maintainable test automation
- 📊 Multiple report formats (HTML, JSON, JUnit)
- 🎬 Visual debugging with screenshots and videos
- 🌐 Cross-browser testing support
- 📝 Detailed documentation and logging

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or higher
- npm or yarn package manager

### Installation & Execution

#### Option 1: Quick Run (Linux/Mac)
```bash
# Make script executable
chmod +x run-tests-and-reports.sh

# Run tests and generate reports
./run-tests-and-reports.sh
```

#### Option 2: Quick Run (Windows)
```cmd
# Run tests and generate reports
run-tests-and-reports.bat
```

#### Option 3: Manual Setup
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run tests
npm test

# View HTML report
npm run test:report
```

## 📊 Test Reports (Multi-Format Support)

This framework generates **4 types of comprehensive reports**:

### 1. 📈 HTML Report (Interactive)
- **Location**: `playwright-report/index.html`
- **Features**: 
  - Interactive web interface
  - Test execution timeline
  - Screenshots on failure
  - Video recordings
  - Trace viewer for debugging
  - Filtering and search capabilities

**View Command:**
```bash
npm run test:report
```

### 2. 📄 JSON Report (Machine-Readable)
- **Location**: `test-results/results.json`
- **Use Cases**:
  - CI/CD pipeline integration
  - Custom dashboards
  - Test analytics
  - Automated alerts

### 3. 📋 JUnit XML Report (CI/CD Integration)
- **Location**: `test-results/junit.xml`
- **Compatible With**:
  - Jenkins
  - GitLab CI
  - Azure DevOps
  - CircleCI
  - TeamCity

### 4. 🖥️ Console Reporter (Real-Time)
- **Output**: Terminal/Console
- **Shows**: Live test progress, pass/fail status, execution time

## 🧪 Test Coverage

### Current Test Suites

#### Homepage Verification Tests
- ✅ Verify main heading "Welcome to the-internet"
- ✅ Verify subheading "Available Examples"
- ✅ Validate page structure and layout
- ✅ Check examples list presence

**Test URL**: https://the-internet.herokuapp.com/

## 📁 Project Structure

```
elitea-playwright/
├── tests/
│   ├── homepage.spec.ts              # Homepage test scenarios
│   └── README.md                     # Test documentation
├── playwright-report/                # Generated HTML reports
│   └── index.html
├── test-results/                     # Test artifacts
│   ├── results.json                  # JSON test results
│   ├── junit.xml                     # JUnit XML report
│   ├── screenshots/                  # Failure screenshots
│   ├── videos/                       # Test execution videos
│   └── traces/                       # Debug traces
├── playwright.config.ts              # Playwright configuration
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── .gitignore                        # Git exclusions
├── run-tests-and-reports.sh          # Linux/Mac test runner
├── run-tests-and-reports.bat         # Windows test runner
├── TEST_EXECUTION_SUMMARY.md         # Detailed test documentation
└── README.md                         # This file
```

## 🎬 Available NPM Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:ui` | Run tests in interactive UI mode |
| `npm run test:report` | Open HTML test report |

## ⚙️ Configuration Highlights

### Playwright Config Features:
- ✅ **Multi-Browser Support**: Chromium, Firefox, WebKit
- ✅ **Parallel Execution**: Tests run concurrently
- ✅ **Auto-Retry**: Configurable retry on failure
- ✅ **Screenshots**: Captured on test failure
- ✅ **Videos**: Recorded on test failure
- ✅ **Traces**: Detailed execution traces
- ✅ **Multiple Reporters**: HTML, JSON, JUnit, Console

### Browser Support:
- 🌐 Chromium (Chrome, Edge)
- 🦊 Firefox
- 🧭 WebKit (Safari)

## 🎯 Test Execution Example

```bash
$ npm test

Running 2 tests using 1 worker

✅ Navigated to: https://the-internet.herokuapp.com/
🧪 Starting test: Verify homepage heading and available examples text
📄 Page Title: The Internet
✅ Assertion passed: Main heading "Welcome to the-internet" is visible
✅ Assertion passed: Subheading "Available Examples" is visible
📋 Total examples available: 44
✅ Assertion passed: Examples list is present with items
🎉 Test completed successfully!

  ✓ Homepage Verification Tests › Verify homepage heading (1.2s)
  ✓ Homepage Verification Tests › Verify homepage structure (0.8s)

  2 passed (2.1s)
```

## 🐛 Debugging Tools

### View Trace Files
```bash
npx playwright show-trace test-results/trace.zip
```

### Debug Mode
```bash
npx playwright test --debug
```

### Headed Mode with Slow Motion
```bash
npx playwright test --headed --slow-mo=1000
```

### Run Specific Test
```bash
npx playwright test tests/homepage.spec.ts
```

### Run on Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 📚 Documentation

- **[Test Execution Summary](./TEST_EXECUTION_SUMMARY.md)** - Comprehensive guide on test execution and reporting
- **[Tests README](./tests/README.md)** - Detailed test documentation
- **[Playwright Docs](https://playwright.dev/)** - Official Playwright documentation

## 🔗 Pull Request

Latest test implementation: [PR #4 - Homepage Verification Test](https://github.com/prajwal-hp00/Elitea_playwright/pull/4)

## 📊 **How to View Reports on GitHub**

**Important**: Reports are generated at runtime, not stored in the repository.

### ✅ **Quick Setup (5 minutes):**

1. **Create workflow file**: `.github/workflows/playwright-tests.yml`
2. **Copy content from**: `GITHUB_ACTIONS_WORKFLOW.yml` (in this repo)
3. **Commit and push**
4. **Go to Actions tab** on GitHub
5. **Download reports** from Artifacts section

📖 **Detailed Guides:**
- **[HOW_TO_VIEW_REPORTS_ON_GITHUB.md](./HOW_TO_VIEW_REPORTS_ON_GITHUB.md)** - Complete step-by-step instructions
- **[GITHUB_REPORTS_GUIDE.html](./GITHUB_REPORTS_GUIDE.html)** - Visual interactive guide

### 🚀 **After Setup:**
- ✅ Tests run automatically on push/PR
- ✅ All 4 report types generated (HTML, JSON, JUnit, Console)
- ✅ Downloadable from GitHub Actions artifacts
- ✅ Optional: Publish to GitHub Pages for easy sharing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-test`)
3. Commit your changes (`git commit -m 'Add new test'`)
4. Push to the branch (`git push origin feature/new-test`)
5. Open a Pull Request

## 📊 Report Examples

### After Test Execution:

**Terminal Output:**
```
✅ Test Summary:
   - Total Tests: 2
   - Passed: 2
   - Failed: 0
   - Duration: 2.1s

📈 Reports Generated:
   - HTML:  playwright-report/index.html
   - JSON:  test-results/results.json
   - JUnit: test-results/junit.xml
```

**HTML Report Features:**
- 📊 Visual test execution timeline
- 🖼️ Screenshots of failures
- 🎥 Video recordings of test runs
- 🔍 Detailed error traces
- 🔎 Search and filter capabilities
- 📈 Test duration analytics

## 🛠️ Tech Stack

- **Framework**: Playwright v1.40+
- **Language**: TypeScript 5.x
- **Runtime**: Node.js 18+
- **Reporters**: HTML, JSON, JUnit, Console
- **CI/CD Ready**: Yes

## ✅ Features Checklist

- [x] TypeScript implementation with type safety
- [x] Multi-browser support (Chromium, Firefox, WebKit)
- [x] Comprehensive HTML reporting
- [x] JSON report for CI/CD integration
- [x] JUnit XML report for build tools
- [x] Console logging with emojis
- [x] Automatic screenshots on failure
- [x] Video recording on failure
- [x] Trace capture for debugging
- [x] Parallel test execution
- [x] Retry mechanism for flaky tests
- [x] Cross-platform scripts (Windows/Linux/Mac)
- [x] Detailed documentation
- [x] Example test scenarios

## 📧 Support

For issues, questions, or contributions:
- Open an issue on [GitHub Issues](https://github.com/prajwal-hp00/Elitea_playwright/issues)
- Submit a pull request with improvements

---

**Maintained by**: Senior QA Automation Engineer  
**Framework**: Playwright with TypeScript  
**License**: ISC  
**Last Updated**: 2024

**Happy Testing! 🎭✨**
