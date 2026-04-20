import { test, expect } from '@playwright/test';

/**
 * Test Suite: EPAM Client Work Navigation
 * Description: Verifies navigation to Client Work section through Services menu
 */
test.describe('EPAM Client Work Navigation Tests', () => {
  
  test('should navigate to Client Work page via Services menu', async ({ page }) => {
    // Test Step 1: Navigate to EPAM homepage
    console.log('Step 1: Navigating to EPAM homepage');
    await page.goto('https://www.epam.com/');
    await page.waitForLoadState('domcontentloaded');
    
    // Test Step 2: Select "Services" from the header menu
    console.log('Step 2: Clicking on Services in header menu');
    const servicesMenu = page.locator('header').getByRole('link', { name: 'Services' });
    await servicesMenu.click();
    await page.waitForLoadState('networkidle');
    
    // Test Step 3: Click the "Explore Our Client Work" link
    console.log('Step 3: Clicking on Explore Our Client Work link');
    const clientWorkLink = page.getByRole('link', { name: /Explore Our Client Work/i });
    await clientWorkLink.click();
    await page.waitForLoadState('domcontentloaded');
    
    // Test Step 4: Verify that "Client Work" text is visible on the page
    console.log('Step 4: Verifying Client Work text is visible');
    const clientWorkText = page.getByText('Client Work');
    await expect(clientWorkText).toBeVisible();
    
    // Additional assertions for robust test validation
    console.log('Additional validations: Checking page URL and title');
    await expect(page).toHaveURL(/.*client.*work.*/i);
    
    console.log('Test completed successfully!');
  });

  test('should verify Services menu is accessible', async ({ page }) => {
    // Navigate to homepage
    await page.goto('https://www.epam.com/');
    
    // Verify Services menu exists in header
    const servicesMenu = page.locator('header').getByRole('link', { name: 'Services' });
    await expect(servicesMenu).toBeVisible();
    
    console.log('Services menu is accessible');
  });
});
