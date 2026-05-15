import { test, expect } from '@playwright/test';

/**
 * Test Suite: Homepage Verification
 * Purpose: Verify the homepage elements of the-internet.herokuapp.com
 */
test.describe('Homepage Verification Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage before each test
    await page.goto('/');
    console.log('✅ Navigated to: https://the-internet.herokuapp.com/');
  });

  /**
   * Test Case: Verify Homepage Heading Text
   * Steps:
   *   1. Navigate to https://the-internet.herokuapp.com/
   *   2. Assert the presence of heading "Welcome to the-internet"
   *   3. Assert the presence of text "Available Examples"
   * Expected Result: Both texts should be visible on the page
   */
  test('Verify homepage heading "Welcome to the-internet" and "Available Examples"', async ({ page }) => {
    console.log('🧪 Starting test: Verify homepage heading and available examples text');
    
    // Get the page title for logging
    const pageTitle = await page.title();
    console.log(`📄 Page Title: ${pageTitle}`);
    
    // Assert the main heading "Welcome to the-internet"
    const mainHeading = page.locator('h1.heading');
    await expect(mainHeading).toBeVisible({
      timeout: 5000
    });
    await expect(mainHeading).toHaveText('Welcome to the-internet');
    console.log('✅ Assertion passed: Main heading "Welcome to the-internet" is visible');
    
    // Assert the "Available Examples" subheading
    const subHeading = page.locator('h2');
    await expect(subHeading).toBeVisible({
      timeout: 5000
    });
    await expect(subHeading).toHaveText('Available Examples');
    console.log('✅ Assertion passed: Subheading "Available Examples" is visible');
    
    // Additional verification: Check if examples list is present
    const examplesList = page.locator('ul li');
    const examplesCount = await examplesList.count();
    console.log(`📋 Total examples available: ${examplesCount}`);
    expect(examplesCount).toBeGreaterThan(0);
    console.log('✅ Assertion passed: Examples list is present with items');
    
    console.log('🎉 Test completed successfully!');
  });

  /**
   * Test Case: Verify Page Structure
   * Purpose: Ensure the page has proper structure
   */
  test('Verify homepage structure and layout', async ({ page }) => {
    console.log('🧪 Starting test: Verify homepage structure');
    
    // Verify main content container is present
    const contentDiv = page.locator('#content');
    await expect(contentDiv).toBeVisible();
    console.log('✅ Main content container is present');
    
    // Verify footer with attribution
    const footer = page.locator('#page-footer');
    await expect(footer).toBeVisible();
    console.log('✅ Footer is present');
    
    // Verify "Powered by" link
    const poweredByLink = page.locator('a[href="http://elementalselenium.com/"]');
    await expect(poweredByLink).toBeVisible();
    await expect(poweredByLink).toContainText('Elemental Selenium');
    console.log('✅ "Powered by Elemental Selenium" link is present');
    
    console.log('🎉 Homepage structure verification completed!');
  });

});
