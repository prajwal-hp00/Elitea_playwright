import { test, expect } from '@playwright/test';

/**
 * Test Suite: EPAM Strategy Navigation Tests
 * Purpose: Verify navigation to Strategy page via Services hover menu
 */
test.describe('EPAM Strategy Navigation Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Set timeout for navigation
    test.setTimeout(60000);
  });

  /**
   * Main Test: Navigate to Strategy page via Services hover menu
   * Steps:
   * 1. Navigate to EPAM homepage
   * 2. Hover over Services menu in header
   * 3. Click on Strategy link from dropdown
   * 4. Verify Strategy text is visible on the page
   */
  test('should navigate to Strategy page via Services hover menu', async ({ page }) => {
    console.log('Step 1: Navigating to EPAM homepage');
    await page.goto('https://www.epam.com/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    console.log('✓ Homepage loaded successfully');

    console.log('Step 2: Hovering over Services in header menu');
    
    // Multiple selector strategies for Services menu
    const servicesSelector = page.locator('a[href*="services"], button:has-text("Services"), nav a:has-text("Services")').first();
    
    // Ensure the Services menu is visible
    await expect(servicesSelector).toBeVisible({ timeout: 10000 });
    
    // Hover over Services menu to reveal dropdown
    await servicesSelector.hover();
    console.log('✓ Hovered over Services menu');
    
    // Wait a moment for dropdown animation
    await page.waitForTimeout(1000);

    console.log('Step 3: Clicking on Strategy link from dropdown');
    
    // Multiple selector strategies for Strategy link
    const strategySelector = page.locator(
      'a[href*="strategy"]:visible, ' +
      'a:has-text("Strategy"):visible, ' +
      '.dropdown a:has-text("Strategy"), ' +
      '[class*="menu"] a:has-text("Strategy"), ' +
      '[class*="dropdown"] a:has-text("Strategy")'
    ).first();
    
    // Wait for Strategy link to be visible after hover
    await expect(strategySelector).toBeVisible({ timeout: 5000 });
    
    // Click on Strategy link
    await strategySelector.click();
    console.log('✓ Clicked on Strategy link');
    
    // Wait for navigation to complete
    await page.waitForLoadState('networkidle');

    console.log('Step 4: Verifying Strategy text is visible on the page');
    
    // Multiple verification strategies
    const strategyTextLocators = [
      page.locator('h1:has-text("Strategy")'),
      page.locator('h2:has-text("Strategy")'),
      page.locator('[class*="title"]:has-text("Strategy")'),
      page.locator('[class*="heading"]:has-text("Strategy")'),
      page.getByText('Strategy', { exact: false })
    ];
    
    // Try to find Strategy text using any of the locators
    let strategyTextFound = false;
    for (const locator of strategyTextLocators) {
      try {
        await expect(locator.first()).toBeVisible({ timeout: 5000 });
        strategyTextFound = true;
        console.log('✓ Strategy text is visible on the page');
        break;
      } catch (e) {
        // Try next locator
        continue;
      }
    }
    
    // If none of the locators worked, fail the test
    if (!strategyTextFound) {
      throw new Error('Strategy text not found on the page');
    }

    console.log('Additional validations: Checking page URL and title');
    
    // Verify URL contains 'strategy'
    expect(page.url().toLowerCase()).toContain('strategy');
    console.log('✓ URL contains "strategy"');
    
    // Verify page title
    const pageTitle = await page.title();
    console.log(`✓ Page title: "${pageTitle}"`);
    
    console.log('Test completed successfully!');
  });

  /**
   * Helper Test: Verify Services menu is accessible
   */
  test('should verify Services menu is accessible on homepage', async ({ page }) => {
    console.log('Verifying Services menu accessibility');
    
    await page.goto('https://www.epam.com/');
    await page.waitForLoadState('networkidle');
    
    const servicesMenu = page.locator('a[href*="services"], button:has-text("Services"), nav a:has-text("Services")').first();
    
    await expect(servicesMenu).toBeVisible();
    console.log('✓ Services menu is visible and accessible');
  });

  /**
   * Helper Test: Verify hover reveals dropdown menu
   */
  test('should verify hover on Services reveals dropdown menu', async ({ page }) => {
    console.log('Verifying Services dropdown menu on hover');
    
    await page.goto('https://www.epam.com/');
    await page.waitForLoadState('networkidle');
    
    const servicesMenu = page.locator('a[href*="services"], button:has-text("Services"), nav a:has-text("Services")').first();
    
    // Hover over Services
    await servicesMenu.hover();
    await page.waitForTimeout(1000);
    
    // Check if dropdown/menu items are visible
    const dropdownItems = page.locator('[class*="dropdown"]:visible, [class*="menu"]:visible a');
    const count = await dropdownItems.count();
    
    expect(count).toBeGreaterThan(0);
    console.log(`✓ Dropdown menu revealed with ${count} items`);
  });
});
