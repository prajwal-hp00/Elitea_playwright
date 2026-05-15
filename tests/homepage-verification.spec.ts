import { test, expect, type Page } from '@playwright/test';

/**
 * Test Suite: The Internet Homepage Verification
 * Description: Verifies that the homepage loads correctly and displays expected heading texts
 * URL: https://the-internet.herokuapp.com/
 */

test.describe('The Internet - Homepage Verification', () => {
  
  /**
   * Test Case: Verify homepage heading and subheading are displayed
   * 
   * Steps:
   * 1. Navigate to https://the-internet.herokuapp.com/
   * 2. Wait for page to load completely
   * 3. Assert heading "Welcome to the-internet" is visible
   * 4. Assert text "Available Examples" is visible
   */
  test('should display welcome heading and available examples text', async ({ page }) => {
    
    // Step 1: Navigate to the website
    console.log('Step 1: Navigating to https://the-internet.herokuapp.com/');
    await page.goto('https://the-internet.herokuapp.com/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    console.log('✓ Page loaded successfully');
    
    // Step 2: Verify the main heading "Welcome to the-internet" is visible
    console.log('Step 2: Verifying main heading "Welcome to the-internet"');
    const mainHeading = page.locator('h1.heading');
    
    // Assert heading is visible
    await expect(mainHeading).toBeVisible();
    console.log('✓ Main heading element is visible');
    
    // Assert heading contains correct text
    await expect(mainHeading).toHaveText('Welcome to the-internet');
    console.log('✓ Main heading text verified: "Welcome to the-internet"');
    
    // Step 3: Verify "Available Examples" text is displayed
    console.log('Step 3: Verifying "Available Examples" text');
    const availableExamplesText = page.locator('h2');
    
    // Assert the text is visible
    await expect(availableExamplesText).toBeVisible();
    console.log('✓ Available Examples element is visible');
    
    // Assert the text content
    await expect(availableExamplesText).toHaveText('Available Examples');
    console.log('✓ Available Examples text verified: "Available Examples"');
    
    // Additional verification: Take a screenshot for visual confirmation
    await page.screenshot({ path: 'test-results/homepage-verification.png', fullPage: true });
    console.log('✓ Screenshot captured for verification');
    
    console.log('\n✅ All assertions passed successfully!');
  });
  
  /**
   * Test Case: Verify page title
   * Additional test to verify the page title is correct
   */
  test('should have correct page title', async ({ page }) => {
    
    console.log('Test: Verifying page title');
    await page.goto('https://the-internet.herokuapp.com/');
    
    // Verify page title
    await expect(page).toHaveTitle('The Internet');
    console.log('✓ Page title verified: "The Internet"');
  });
  
});
