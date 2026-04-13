# HTML Portfolio Website with Custom Domain

Your portfolio website is set up for GitHub Pages with the custom domain `vivek.in`.

## Files Included
- `index.html` - Home page
- `projects.html` - Projects page
- `CNAME` - Custom domain configuration

## Deploy to GitHub Pages

### Step 1: Install Git
Download and install Git from: https://git-scm.com/downloads

### Step 2: Initialize Git Repository
Open PowerShell and navigate to your portfolio folder:
```powershell
cd c:\Users\Vivek\python\portfolio
git init
git add .
git commit -m "Initial portfolio website"
```

### Step 3: Create GitHub Repository
1. Go to https://github.com and create a new repository named `portfolio` (or any name you prefer)
2. Copy the repository URL

### Step 4: Push to GitHub
```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "main" branch and "/ (root)" folder
5. Click "Save"

### Step 6: Configure Custom Domain
1. In the same Pages section, enter `vivek.in` in the "Custom domain" field
2. GitHub will automatically detect the `CNAME` file
3. Click "Save"

## DNS Configuration

Update your domain's DNS records at your registrar (where you bought vivek.in):

**For root domain (vivek.in):**
Add these A records:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For www subdomain (www.vivek.in):**
Add CNAME record:
- Name: `www`
- Value: `YOUR_USERNAME.github.io`

## Verification

After 24-48 hours, your website will be live at https://vivek.in

## Troubleshooting

- If the domain doesn't work immediately, wait for DNS propagation
- Check GitHub Pages status in repository settings
- Ensure CNAME file contains only `vivek.in` (no extra spaces or lines)

If you want `www.vivekkesarwani.in`, add a CNAME record:
- `www` → `your-github-username.github.io`

## Notes

- Your website files should remain in this folder root for GitHub Pages to serve them correctly.
- The `CNAME` file is already created for your custom domain.
