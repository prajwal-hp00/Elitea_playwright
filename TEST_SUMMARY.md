# Test Automation Summary

## 📦 Project: EPAM Website Test Automation

This repository contains automated test scripts for the EPAM website using Playwright and TypeScript.

---

## 🎯 Test Scenarios

### Test #1: Client Work Navigation
**File:** `tests/epam-client-work.spec.ts`  
**PR:** [#1](https://github.com/prajwal-hp00/Elitea_playwright/pull/1)

**Steps:**
1. Navigate to https://www.epam.com/
2. Click "Services" from header menu
3. Click "Explore Our Client Work" link
4. Verify "Client Work" text is visible

**Status:** ✅ Ready to test

---

### Test #2: Strategy Page Navigation (Hover)
**File:** `tests/epam-strategy.spec.ts`  
**PR:** [#2](https://github.com/prajwal-hp00/Elitea_playwright/pull/2)  
**Documentation:** `docs/EPAM_STRATEGY_TEST.md`

**Steps:**
1. Navigate to https://www.epam.com/
2. **Hover** over "Services" from header menu
3. Click "Strategy" link from dropdown
4. Verify "Strategy" text is visible

**Status:** ✅ Ready to test

**Key Features:**
- Implements hover interaction
- Multiple fallback selectors
- Comprehensive validation
- Helper tests for isolation

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/prajwal-hp00/Elitea_playwright.git
cd Elitea_playwright
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install chromium
```

### 4. Run Tests
```bash
# Run all tests
npm test

# Run specific test
npx playwright test epam-client-work
npx playwright test epam-strategy

# Run with visible browser
npm run test:headed

# Debug mode
npm run test:debug
```

### 5. View Reports
```bash
npm run report
```

---

## 📁 Project Structure

```
Elitea_playwright/
├── tests/
│   ├── epam-client-work.spec.ts    # Test #1: Client Work navigation
│   └── epam-strategy.spec.ts       # Test #2: Strategy hover navigation
├── docs/
│   └── EPAM_STRATEGY_TEST.md       # Detailed documentation for Test #2
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Main documentation
```

---

## 🎨 Technical Stack

- **Language:** TypeScript
- **Framework:** Playwright
- **Test Runner:** Playwright Test
- **Browsers:** Chromium, Firefox, WebKit
- **Mobile:** Pixel 5, iPhone 12
- **Reporting:** HTML, JUnit, Console

---

## 📊 Test Features

### ✅ Implemented Features

- **Multiple Browser Support** - Chrome, Firefox, Safari
- **Mobile Testing** - Pixel 5, iPhone 12 emulation
- **Parallel Execution** - Run tests simultaneously
- **Retry Mechanism** - 2 retries on failure
- **Screenshot on Failure** - Automatic capture
- **Video Recording** - On failure only
- **Trace Collection** - Full debugging traces
- **HTML Reports** - Interactive test results
- **Console Logging** - Step-by-step output
- **Robust Selectors** - Multiple fallback strategies
- **Timeout Handling** - Configurable timeouts

### 🎯 Test Interactions

- **Navigation** - `page.goto()`
- **Clicking** - `element.click()`
- **Hovering** - `element.hover()` ⭐ NEW
- **Waiting** - `waitForLoadState()`, `waitForTimeout()`
- **Assertions** - `expect().toBeVisible()`, URL validation
- **Text Verification** - Multiple locator strategies

---

## 🔧 Configuration

### Browser Configuration
```typescript
// playwright.config.ts
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } }
]
```

### Test Timeout
- Action timeout: 30 seconds
- Navigation timeout: 60 seconds
- Test timeout: 60 seconds

### Retry Strategy
- Retries: 2 attempts
- Only on CI: No (retries enabled locally)

---

## 🎬 Running Tests

### Basic Commands
```bash
# Run all tests
npm test

# Run specific file
npx playwright test epam-strategy

# Run specific test
npx playwright test -g "should navigate to Strategy"
```

### Browser Selection
```bash
# Run on Chromium only
npx playwright test --project=chromium

# Run on Firefox
npx playwright test --project=firefox

# Run on mobile
npx playwright test --project="Mobile Chrome"
```

### Debug & Development
```bash
# Headed mode (visible browser)
npx playwright test --headed

# Debug mode (step-through)
npx playwright test --debug

# UI mode (interactive)
npx playwright test --ui

# Show browser console
npx playwright test --headed --debug
```

### Reporting
```bash
# Generate and open HTML report
npm run report

# View existing report
npx playwright show-report
```

---

## 🐛 Troubleshooting

### Issue: Browser not installed
**Solution:**
```bash
npx playwright install chromium
```

### Issue: Test times out
**Solutions:**
- Increase timeout in test file
- Check network connectivity
- Run with `--headed` to see what's happening

### Issue: Element not found
**Solutions:**
- Run in debug mode: `--debug`
- Check element selector using browser DevTools
- Update selectors in test file

### Issue: Screenshots/videos not generated
**Check:**
- Failures occurred (screenshots only on fail)
- `playwright-report/` directory permissions
- Configuration in `playwright.config.ts`

---

## 📈 Test Results

After running tests, check:

1. **Console Output** - Pass/fail status
2. **HTML Report** - `playwright-report/index.html`
3. **Screenshots** - `playwright-report/` (on failure)
4. **Videos** - `playwright-report/` (on failure)
5. **Traces** - `playwright-report/` (for debugging)

---

## 🔄 CI/CD Integration

### GitHub Actions (Example)
```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 📝 Adding New Tests

### Step-by-Step Guide

1. **Create test file** in `tests/` directory:
```typescript
// tests/my-new-test.spec.ts
import { test, expect } from '@playwright/test';

test.describe('My Test Suite', () => {
  test('should do something', async ({ page }) => {
    await page.goto('https://example.com');
    // Add test steps...
  });
});
```

2. **Run the test:**
```bash
npx playwright test my-new-test
```

3. **Create documentation** in `docs/`:
```bash
# Create docs/MY_NEW_TEST.md
```

4. **Create branch and PR:**
```bash
git checkout -b feature/my-new-test
git add .
git commit -m "Add new test for XYZ feature"
git push origin feature/my-new-test
```

---

## 🎓 Learning Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Best Practices](https://playwright.dev/docs/best-practices)

---

## 📞 Support

### Documentation
- Main README: `README.md`
- Strategy Test: `docs/EPAM_STRATEGY_TEST.md`

### Pull Requests
- PR #1: Client Work Test
- PR #2: Strategy Test (with hover)

---

## ✅ Test Status

| Test | File | Status | Documentation |
|------|------|--------|---------------|
| Client Work Navigation | `epam-client-work.spec.ts` | ✅ Ready | README.md |
| Strategy Navigation (Hover) | `epam-strategy.spec.ts` | ✅ Ready | EPAM_STRATEGY_TEST.md |

---

## 🎯 Next Steps

1. ✅ **Review Pull Requests**
   - PR #1: Client Work Test
   - PR #2: Strategy Test

2. ✅ **Merge to Main**
   ```bash
   # After review, merge the PRs
   ```

3. ✅ **Run Tests Locally**
   ```bash
   npm install
   npx playwright install chromium
   npm test
   ```

4. ✅ **View Results**
   ```bash
   npm run report
   ```

5. ✅ **Add More Tests** (if needed)
   - Follow the guide above
   - Create new PRs

---

**Repository:** https://github.com/prajwal-hp00/Elitea_playwright  
**Last Updated:** 2024  
**Maintainer:** Test Automation Team

---

Happy Testing! 🚀
