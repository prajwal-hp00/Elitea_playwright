# EPAM Strategy Page Test

## 🎯 Test Overview

This automated test verifies the navigation flow to the EPAM Strategy page through the Services hover menu.

---

## 📋 Test Scenario

### Test Steps:
1. **Navigate** to https://www.epam.com/
2. **Hover** over "Services" in the header menu
3. **Click** "Strategy" link from the revealed dropdown
4. **Verify** "Strategy" text is visible on the page

### Expected Results:
- ✅ Services menu is visible and hoverable
- ✅ Hover action reveals dropdown menu with options
- ✅ Strategy link is clickable in the dropdown
- ✅ Strategy page loads successfully
- ✅ "Strategy" text is visible on the landing page
- ✅ URL contains "strategy"

---

## 🎨 Key Technical Features

### Hover Interaction
```typescript
// Hover over Services menu to reveal dropdown
await servicesSelector.hover();

// Wait for dropdown animation
await page.waitForTimeout(1000);
```

### Multiple Selector Strategies
The test uses fallback selectors to ensure robustness:

**Services Menu:**
- `a[href*="services"]` - Link containing "services"
- `button:has-text("Services")` - Button with "Services" text
- `nav a:has-text("Services")` - Navigation link

**Strategy Link:**
- `a[href*="strategy"]:visible` - Visible link with "strategy" in href
- `a:has-text("Strategy"):visible` - Visible link with "Strategy" text
- `.dropdown a:has-text("Strategy")` - Dropdown menu item
- `[class*="menu"] a:has-text("Strategy")` - Menu item
- `[class*="dropdown"] a:has-text("Strategy")` - Alternative dropdown

**Strategy Text Verification:**
- `h1:has-text("Strategy")` - H1 heading
- `h2:has-text("Strategy")` - H2 heading
- `[class*="title"]:has-text("Strategy")` - Title elements
- `[class*="heading"]:has-text("Strategy")` - Heading elements
- `getByText('Strategy')` - Generic text search

---

## 🚀 Running the Test

### Run All Tests
```bash
npm test
```

### Run Only Strategy Test
```bash
npx playwright test epam-strategy
```

### Run with Visible Browser
```bash
npx playwright test epam-strategy --headed
```

### Debug Mode (Step-by-Step)
```bash
npx playwright test epam-strategy --debug
```

### Run on Specific Browser
```bash
# Chromium
npx playwright test epam-strategy --project=chromium

# Firefox
npx playwright test epam-strategy --project=firefox

# WebKit (Safari)
npx playwright test epam-strategy --project=webkit
```

---

## 📊 Test Structure

### Main Test
- **Name:** `should navigate to Strategy page via Services hover menu`
- **Purpose:** End-to-end test of the complete user flow
- **Timeout:** 60 seconds
- **Validations:** 
  - Element visibility
  - URL validation
  - Text content verification
  - Page title capture

### Helper Tests

#### Test 1: Services Menu Accessibility
- **Name:** `should verify Services menu is accessible on homepage`
- **Purpose:** Verify Services menu is present and visible
- **Quick Check:** Isolated test for menu presence

#### Test 2: Dropdown Menu Visibility
- **Name:** `should verify hover on Services reveals dropdown menu`
- **Purpose:** Verify hover action reveals menu items
- **Validation:** Counts visible dropdown items

---

## 🎬 Console Output

When running the test, you'll see detailed logging:

```
Step 1: Navigating to EPAM homepage
✓ Homepage loaded successfully
Step 2: Hovering over Services in header menu
✓ Hovered over Services menu
Step 3: Clicking on Strategy link from dropdown
✓ Clicked on Strategy link
Step 4: Verifying Strategy text is visible on the page
✓ Strategy text is visible on the page
Additional validations: Checking page URL and title
✓ URL contains "strategy"
✓ Page title: "Strategy & Consulting Services | EPAM"
Test completed successfully!
```

---

## 🔧 Configuration

The test uses the global Playwright configuration from `playwright.config.ts`:

- **Browsers:** Chromium, Firefox, WebKit
- **Mobile:** Pixel 5, iPhone 12
- **Screenshots:** On failure
- **Video:** On failure
- **Retry:** 2 attempts on failure
- **Timeout:** 30 seconds per action

---

## 🐛 Troubleshooting

### Test Fails at Step 2 (Hover)
**Possible Causes:**
- Services menu selector changed
- Page loaded with different layout
- Cookie consent blocking interaction

**Solutions:**
```bash
# Run with headed browser to see what's happening
npx playwright test epam-strategy --headed

# Run in debug mode
npx playwright test epam-strategy --debug
```

### Test Fails at Step 3 (Click Strategy)
**Possible Causes:**
- Hover didn't reveal dropdown
- Strategy link selector changed
- Animation timeout too short

**Solutions:**
- Increase wait timeout in code
- Check if dropdown menu appears on hover
- Verify Strategy link text matches exactly

### Test Fails at Step 4 (Verify Text)
**Possible Causes:**
- Page layout changed
- "Strategy" text not in expected elements
- Page redirected unexpectedly

**Solutions:**
- Check actual page URL in test output
- Verify page title contains expected text
- Update text selectors if needed

---

## 📈 Test Results

After running, view the HTML report:

```bash
npm run report
```

The report includes:
- ✅ Pass/Fail status
- ⏱️ Execution time
- 📸 Screenshots (on failure)
- 🎥 Video recording (on failure)
- 📋 Step-by-step trace

---

## 🔄 Continuous Integration

This test is ready for CI/CD pipelines:

### GitHub Actions Example
```yaml
- name: Run Strategy Test
  run: npx playwright test epam-strategy
  
- name: Upload Results
  uses: actions/upload-artifact@v3
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
```

### Jenkins Example
```groovy
stage('Run Strategy Test') {
  steps {
    sh 'npx playwright test epam-strategy'
  }
}
```

---

## 📝 Test Maintenance

### When to Update Selectors
- EPAM website redesign
- Menu structure changes
- New navigation patterns

### How to Update
1. Run test in debug mode
2. Use Playwright Inspector to find new selectors
3. Update selectors in `tests/epam-strategy.spec.ts`
4. Re-run test to verify

### Best Practices
- Keep multiple fallback selectors
- Use data-testid attributes when possible
- Document selector changes in commits
- Run tests regularly to catch breakages early

---

## 🎓 Learning Resources

- [Playwright Hover Documentation](https://playwright.dev/docs/input#hover)
- [Playwright Selectors Guide](https://playwright.dev/docs/selectors)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging Tests](https://playwright.dev/docs/debug)

---

**Test File:** `tests/epam-strategy.spec.ts`
**Created:** 2024
**Language:** TypeScript
**Framework:** Playwright

---

Happy Testing! 🚀
