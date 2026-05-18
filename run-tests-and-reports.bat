@echo off
REM Playwright Test Execution and Report Generation Script for Windows
REM This script runs tests and opens all available reports

echo.
echo ========================================
echo   Playwright Test Execution
echo ========================================
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo Dependencies installed successfully!
    echo.
)

REM Install Playwright browsers
echo Checking Playwright browsers...
call npx playwright install chromium
echo Browsers ready!
echo.

REM Run the tests
echo ========================================
echo   Running Playwright Tests...
echo ========================================
echo.
call npm test

REM Store the exit code
set TEST_EXIT_CODE=%ERRORLEVEL%

echo.
echo ========================================
echo   Test Execution Complete!
echo ========================================
echo.

REM Display report locations
echo.
echo Generated Reports:
echo -------------------

if exist "playwright-report\index.html" (
    echo [OK] HTML Report: playwright-report\index.html
) else (
    echo [X] HTML Report: Not found
)

if exist "test-results\results.json" (
    echo [OK] JSON Report: test-results\results.json
) else (
    echo [X] JSON Report: Not found
)

if exist "test-results\junit.xml" (
    echo [OK] JUnit Report: test-results\junit.xml
) else (
    echo [X] JUnit Report: Not found
)

echo.
echo ========================================
echo   How to View Reports:
echo ========================================
echo 1. HTML Report (Interactive):
echo    npm run test:report
echo.
echo 2. JSON Report (View in editor):
echo    type test-results\results.json
echo.
echo 3. JUnit Report (View in editor):
echo    type test-results\junit.xml
echo.

REM Ask user if they want to open HTML report
set /p "OPEN_REPORT=Would you like to open the HTML report now? (Y/N): "

if /i "%OPEN_REPORT%"=="Y" (
    echo.
    echo Opening HTML Report...
    call npm run test:report
) else (
    echo.
    echo You can open the HTML report later with: npm run test:report
)

echo.
echo ========================================
echo   Test Report Summary
echo ========================================

REM Display summary
if %TEST_EXIT_CODE% EQU 0 (
    echo Status: ALL TESTS PASSED
    echo.
) else (
    echo Status: SOME TESTS FAILED
    echo Check reports for details
    echo.
)

echo Report Locations:
echo   - HTML:  .\playwright-report\index.html
echo   - JSON:  .\test-results\results.json
echo   - JUnit: .\test-results\junit.xml
echo.
echo GitHub PR: https://github.com/prajwal-hp00/Elitea_playwright/pull/4
echo.
echo Done!
echo.

pause
