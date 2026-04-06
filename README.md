# Vivek Kesarwani Portfolio

This folder contains your GitHub Pages website:
- `index.html`
- `projects.html`
- `CNAME`

## Publish on GitHub Pages

1. Install Git on your Windows machine:
   - https://git-scm.com/downloads

2. Open PowerShell and go to this folder:
   ```powershell
   cd c:\Users\Vivek\python\portfolio
   ```

3. Initialize Git and commit:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio website"
   ```

4. Create a GitHub repository named `portfolio` (or another name).
   - If you use GitHub CLI: `gh repo create vivek-portfolio --public --source=. --remote=origin`
   - Or create it on github.com and add the remote:
     ```powershell
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git branch -M main
     git push -u origin main
     ```

5. Enable GitHub Pages in the repository settings:
   - Go to `Settings` → `Pages`
   - Source: `main` branch and `/ (root)`
   - Save

6. Set your custom domain:
   - `vivekkesarwani.in`
   - GitHub will detect the `CNAME` file automatically.

## DNS settings for `vivekkesarwani.in`

If you want the root domain, add these A records in your domain registrar:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

If you want `www.vivekkesarwani.in`, add a CNAME record:
- `www` → `your-github-username.github.io`

## Notes

- Your website files should remain in this folder root for GitHub Pages to serve them correctly.
- The `CNAME` file is already created for your custom domain.
