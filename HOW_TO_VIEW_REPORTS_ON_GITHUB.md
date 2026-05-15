# 🎭 How to View Test Reports on GitHub

## 📋 **Problem**
You want to see test execution reports directly on GitHub, not just the test scripts.

## ✅ **Solution: 3 Options**

---

## **🚀 Option 1: GitHub Actions (RECOMMENDED)**

This automatically runs tests and generates reports on every push/PR.

### Step-by-Step Setup:

#### 1️⃣ **Create GitHub Actions Workflow**

**Method A: Through GitHub UI**
1. Go to your repository: https://github.com/prajwal-hp00/Elitea_playwright
2. Click on **"Add file"** → **"Create new file"**
3. Type the path: `.github/workflows/playwright-tests.yml`
4. Copy the content from `GITHUB_ACTIONS_WORKFLOW.yml` file (in this repo)
5. Click **"Commit changes"**

**Method B: Through Git Command Line**
```bash
# Clone your repo
git clone https://github.com/prajwal-hp00/Elitea_playwright.git
cd Elitea_playwright

# Create workflow directory
mkdir -p .github/workflows

# Copy the workflow file
# (Copy content from GITHUB_ACTIONS_WORKFLOW.yml)
nano .github/workflows/playwright-tests.yml
# Paste the content and save

# Commit and push
git add .github/workflows/playwright-tests.yml
git commit -m "Add GitHub Actions workflow for test execution"
git push origin feature/homepage-assertion-test
```

#### 2️⃣ **Trigger the Workflow**

**Automatic Triggers:**
- ✅ Push to `main`, `feature/*`, or `test/*` branches
- ✅ Pull request to `main` branch

**Manual Trigger:**
1. Go to **Actions** tab in your repo
2. Click **"Playwright Tests with Reports"**
3. Click **"Run workflow"** button
4. Select branch and click **"Run workflow"**

#### 3️⃣ **View Reports on GitHub**

Once workflow completes:

1. Go to **Actions** tab
2. Click on the workflow run
3. Scroll down to **Artifacts** section
4. Download the reports:
   - 📊 `playwright-html-report` - Interactive HTML report
   - 📋 `playwright-json-report` - JSON results
   - 📄 `playwright-junit-report` - JUnit XML
   - 📸 `test-screenshots` - Failure screenshots
   - 🎬 `test-videos` - Test videos

#### 4️⃣ **View HTML Report**

After downloading the HTML report artifact:
```bash
# Extract the ZIP file
unzip playwright-html-report.zip

# Open in browser
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### 📸 **What You'll See:**

**In GitHub Actions:**
- ✅ Real-time test execution logs
- ✅ Test summary in workflow summary page
- ✅ Downloadable artifacts (reports)
- ✅ PR comments with report links

**In HTML Report:**
- ✅ Interactive test results
- ✅ Screenshots of failures
- ✅ Video recordings
- ✅ Execution timeline
- ✅ Filter and search capabilities

---

## **💻 Option 2: Run Tests Locally & Commit Reports**

If you want to commit actual report files to the repository:

### Step 1: Run Tests Locally

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run tests
npm test
```

### Step 2: Commit Reports to Git

First, modify `.gitignore` to allow report commits:

```bash
# Edit .gitignore and comment out these lines:
# playwright-report/
# test-results/
```

Then commit reports:

```bash
# Add reports to git
git add playwright-report/
git add test-results/

# Commit
git commit -m "Add test execution reports"

# Push
git push origin feature/homepage-assertion-test
```

**⚠️ WARNING**: This is NOT recommended because:
- Report files are large and binary
- They bloat the repository
- They change on every test run
- Better to generate them on-demand

---

## **🌐 Option 3: GitHub Pages (Best for Sharing)**

Publish HTML reports to GitHub Pages for easy sharing:

### Step 1: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in sidebar
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Click **Save**

### Step 2: Add Deployment to Workflow

The workflow file already includes GitHub Pages deployment (see the `GITHUB_ACTIONS_WORKFLOW.yml` file).

When you push to `main` branch, reports will be automatically published to:
```
https://prajwal-hp00.github.io/Elitea_playwright/
```

### Benefits:
- ✅ Live URL to share reports
- ✅ No download required
- ✅ Always shows latest test results
- ✅ Professional presentation

---

## **📊 Comparison of Options**

| Feature | GitHub Actions | Commit Reports | GitHub Pages |
|---------|---------------|----------------|--------------|
| **Automatic** | ✅ Yes | ❌ Manual | ✅ Yes |
| **Easy Sharing** | ⚠️ Download Required | ❌ Hard | ✅ URL Link |
| **Repository Size** | ✅ No bloat | ❌ Large files | ✅ No bloat |
| **Always Updated** | ✅ Yes | ❌ Manual | ✅ Yes |
| **CI/CD Friendly** | ✅ Perfect | ❌ No | ✅ Good |
| **Setup Complexity** | ⚠️ Medium | ✅ Easy | ⚠️ Medium |

---

## **🎯 RECOMMENDED APPROACH**

**Best Practice:**
1. ✅ Use **GitHub Actions** for automated test execution
2. ✅ Use **GitHub Pages** for sharing reports with stakeholders
3. ❌ **Don't commit** report files to the repository

### Quick Setup:

1. **Add the workflow file** (from `GITHUB_ACTIONS_WORKFLOW.yml`)
2. **Push to GitHub**
3. **Enable GitHub Pages** in settings
4. **Done!** Reports will be generated automatically

---

## **📁 File Locations After Setup**

```
your-repo/
├── .github/
│   └── workflows/
│       └── playwright-tests.yml  ← Create this
├── tests/
│   └── homepage.spec.ts          ← Already exists
├── playwright.config.ts          ← Already exists
├── package.json                  ← Already exists
└── README.md                     ← Already exists
```

---

## **🔍 Troubleshooting**

### "I don't see the Actions tab"
- Go to repository **Settings** → **Actions** → **General**
- Enable **"Allow all actions and reusable workflows"**

### "Workflow is not running"
- Check if workflow file is in `.github/workflows/`
- Verify file name ends with `.yml` or `.yaml`
- Check branch name matches trigger patterns

### "Reports are not generated"
- Check workflow logs in Actions tab
- Verify tests are running: `npm test`
- Check if `playwright.config.ts` has reporters configured

### "Can't download artifacts"
- Artifacts expire after 30 days (configurable)
- You must be logged in to GitHub
- Check if workflow completed successfully

---

## **📧 Need Help?**

If reports still don't show up:

1. Check **Actions** tab for workflow errors
2. Review **workflow logs** for detailed output
3. Verify **branch name** matches trigger pattern
4. Ensure **Node.js** and **npm** versions are correct

---

## **🎉 Success Checklist**

- [ ] Workflow file created at `.github/workflows/playwright-tests.yml`
- [ ] Workflow is enabled in repository
- [ ] First workflow run completed successfully
- [ ] Artifacts visible in workflow run page
- [ ] HTML report downloaded and opened
- [ ] Reports show test execution results
- [ ] (Optional) GitHub Pages enabled and working

---

**Happy Testing! 🎭✨**

Once set up, you'll see reports automatically generated for every commit and pull request!
