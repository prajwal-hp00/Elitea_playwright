#!/bin/bash

# Playwright Test Execution and Report Generation Script
# This script runs tests and opens all available reports

echo "🚀 Starting Playwright Test Execution..."
echo "========================================="

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
fi

# Install Playwright browsers if needed
echo "🌐 Checking Playwright browsers..."
npx playwright install chromium
echo "✅ Browsers ready"

# Run the tests
echo ""
echo "🧪 Running Playwright Tests..."
echo "========================================="
npm test

# Check test exit code
TEST_EXIT_CODE=$?

echo ""
echo "========================================="
echo "📊 Test Execution Complete!"
echo "========================================="

# Display report locations
echo ""
echo "📈 Generated Reports:"
echo "-------------------"

if [ -f "playwright-report/index.html" ]; then
    echo "✅ HTML Report: playwright-report/index.html"
else
    echo "❌ HTML Report: Not found"
fi

if [ -f "test-results/results.json" ]; then
    echo "✅ JSON Report: test-results/results.json"
else
    echo "❌ JSON Report: Not found"
fi

if [ -f "test-results/junit.xml" ]; then
    echo "✅ JUnit Report: test-results/junit.xml"
else
    echo "❌ JUnit Report: Not found"
fi

echo ""
echo "========================================="
echo "📖 How to View Reports:"
echo "========================================="
echo "1. HTML Report (Interactive):"
echo "   npm run test:report"
echo ""
echo "2. JSON Report (View in editor):"
echo "   cat test-results/results.json | jq"
echo ""
echo "3. JUnit Report (View in editor):"
echo "   cat test-results/junit.xml"
echo ""

# Ask user if they want to open HTML report
echo "Would you like to open the HTML report now? (y/n)"
read -r response

if [ "$response" = "y" ] || [ "$response" = "Y" ]; then
    echo "🌐 Opening HTML Report..."
    npm run test:report
else
    echo "ℹ️  You can open the HTML report later with: npm run test:report"
fi

echo ""
echo "========================================="
echo "✨ Test Report Summary"
echo "========================================="

# Display summary from test execution
if [ $TEST_EXIT_CODE -eq 0 ]; then
    echo "🎉 Status: ALL TESTS PASSED"
else
    echo "⚠️  Status: SOME TESTS FAILED (Check reports for details)"
fi

echo ""
echo "📍 Report Locations:"
echo "   - HTML:  ./playwright-report/index.html"
echo "   - JSON:  ./test-results/results.json"
echo "   - JUnit: ./test-results/junit.xml"
echo ""
echo "🔗 GitHub PR: https://github.com/prajwal-hp00/Elitea_playwright/pull/4"
echo ""
echo "Done! 🎊"
