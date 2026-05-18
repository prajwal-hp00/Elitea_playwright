# 🎭 GitHub Actions Quick Reference

## ⚡ **5-Minute Setup**

```bash
# 1. Create the workflow directory
mkdir -p .github/workflows

# 2. Create the workflow file
# Copy content from GITHUB_ACTIONS_WORKFLOW.yml

# 3. Commit and push
git add .github/workflows/playwright-tests.yml
git commit -m "Add GitHub Actions for automated testing"
git push
```

## 📊 **Access Reports**

### Method 1: GitHub UI (Recommended)
1. Go to **GitHub.com** → Your Repository
2. Click **"Add file"** → **"Create new file"**
3. Type path: `.github/workflows/playwright-tests.yml`
4. Copy content from `GITHUB_ACTIONS_WORKFLOW.yml`
5. Click **"Commit changes"**

### Method 2: Command Line
```bash
# Clone or navigate to your repo
cd Elitea_playwright

# Create workflow directory
mkdir -p .github/workflows

# Copy the workflow content
cp GITHUB_ACTIONS_WORKFLOW.yml .github/workflows/playwright-tests.yml

# Commit and push
git add .github/workflows/
git commit -m "Enable automated test reports"
git push origin feature/homepage-assertion-test
```

## 🔄 **Workflow Triggers**

| Event | When |
|-------|------|
| **Push** | Any commit to `main`, `feature/*`, or `test/*` |
| **Pull Request** | PR targeting `main` branch |
| **Manual** | Click "Run workflow" in Actions tab |

## 📦 **Download Reports**

1. **Go to**: Repository → **Actions** tab
2. **Click**: Latest workflow run
3. **Scroll**: To **Artifacts** section
4. **Download**:
   - `playwright-html-report` - Interactive HTML
   - `playwright-json-report` - JSON data
   - `playwright-junit-report` - JUnit XML
   - `test-screenshots` - Failure images
   - `test-videos` - Test recordings

## 🌐 **View HTML Report**

```bash
# After downloading playwright-html-report.zip
unzip playwright-html-report.zip
open index.html
```

## 🎯 **What You Get**

✅ **Automatic test execution** on every push  
✅ **4 report types** (HTML, JSON, JUnit, Console)  
✅ **Downloadable artifacts** from GitHub  
✅ **PR comments** with report links  
✅ **Screenshots** on test failures  
✅ **Videos** of test execution  
✅ **Test traces** for debugging  

## 🔍 **Find Your Reports**

| Report Type | Location | Use For |
|-------------|----------|---------|
| **HTML** | Artifacts → playwright-html-report | Visual review, debugging |
| **JSON** | Artifacts → playwright-json-report | Analytics, dashboards |
| **JUnit** | Artifacts → playwright-junit-report | CI/CD integration |
| **Console** | Workflow logs | Quick status check |

## 💡 **Pro Tips**

### View Specific Test Results
```bash
# Download JSON report
cat results.json | jq '.suites[0].specs'
```

### Check Test Summary
```bash
# View in GitHub Actions
# Go to: Actions → Workflow run → Summary tab
```

### Share Reports with Team
```bash
# Enable GitHub Pages:
# Settings → Pages → Source: GitHub Actions
# Reports will be at: https://username.github.io/repo-name/
```

## 🐛 **Troubleshooting**

### Workflow not appearing?
```bash
# Check if file is in correct location:
ls -la .github/workflows/playwright-tests.yml

# Verify file extension is .yml or .yaml
```

### Tests failing?
```bash
# Check workflow logs:
# Actions → Failed run → Click on job → View logs

# Run locally first:
npm test
```

### Artifacts not available?
- Artifacts expire after 30 days (configurable in workflow)
- Must be logged in to GitHub to download
- Check workflow completed successfully

## 📚 **Additional Resources**

- **Detailed Guide**: [HOW_TO_VIEW_REPORTS_ON_GITHUB.md](./HOW_TO_VIEW_REPORTS_ON_GITHUB.md)
- **Visual Guide**: [GITHUB_REPORTS_GUIDE.html](./GITHUB_REPORTS_GUIDE.html)
- **Workflow Template**: [GITHUB_ACTIONS_WORKFLOW.yml](./GITHUB_ACTIONS_WORKFLOW.yml)

## ⚙️ **Workflow Configuration**

Located at: `.github/workflows/playwright-tests.yml`

```yaml
Key settings:
- Triggers: push, pull_request, workflow_dispatch
- Browsers: chromium, firefox, webkit
- Reports: HTML, JSON, JUnit
- Artifacts: Retained for 30 days
- Parallel execution: Yes
- Retry on failure: Yes
```

## 🎉 **Success Checklist**

- [ ] Workflow file created
- [ ] First run completed
- [ ] Artifacts visible
- [ ] HTML report downloaded
- [ ] Reports show test results
- [ ] Team can access reports

## 🚀 **Next Steps**

1. ✅ Set up workflow (done with this guide)
2. ✅ Run first test automatically
3. ✅ Download and review reports
4. ⚠️ Configure notifications (optional)
5. ⚠️ Set up GitHub Pages (optional)
6. ⚠️ Integrate with CI/CD (optional)

---

**Need Help?**
- Open an issue in the repository
- Check [GitHub Actions documentation](https://docs.github.com/en/actions)
- Review workflow logs for errors

**🎭 Happy Testing!**
