import { test, expect } from '@playwright/test';

/**
 * Test Suite: The Internet Homepage Verification
 * Description: Verifies that the homepage displays the correct heading and subheading
 * URL: https://the-internet.herokuapp.com/
 */

test.describe('The Internet Homepage Tests', () => {
  
  test('Verify homepage heading and available examples text', async ({ page }) => {
    // Test Step 1: Navigate to the website
    console.log('Navigating to: https://the-internet.herokuapp.com/');
    await page.goto('https://the-internet.herokuapp.com/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    console.log('Page loaded successfully');
    
    // Assertion 1: Verify the heading text "Welcome to the-internet" is displayed
    console.log('Asserting heading text: "Welcome to the-internet"');
    const headingLocator = page.locator('h1.heading');
    await expect(headingLocator).toBeVisible();
    await expect(headingLocator).toHaveText('Welcome to the-internet');
    console.log('✓ Heading "Welcome to the-internet" is displayed correctly');
    
    // Assertion 2: Verify the "Available Examples" text is displayed
    console.log('Asserting text: "Available Examples"');
    const availableExamplesLocator = page.locator('h2');
    await expect(availableExamplesLocator).toBeVisible();
    await expect(availableExamplesLocator).toHaveText('Available Examples');
    console.log('✓ "Available Examples" text is displayed correctly');
    
    console.log('All assertions passed successfully!');
  });
  
});
