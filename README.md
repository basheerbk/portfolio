# basheer.diy Portfolio

A minimal "under construction" landing page with an interactive circuit diagram.

## 🚀 Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository: `basheer.diy` (or any name you prefer)
4. Make it **Public**
5. **Don't** initialize with README (we already have files)
6. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open PowerShell in your portfolio folder and run these commands:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit your files
git commit -m "Initial commit: Under construction page with interactive circuit"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/basheer.diy.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"main"** branch
5. Keep the folder as **"/ (root)"**
6. Click **"Save"**

Your site will be live at: `https://YOUR_USERNAME.github.io/basheer.diy/`

### Step 4: Connect Your Custom Domain (basheer.diy)

#### A. Configure DNS Settings

Go to your domain registrar (where you bought basheer.diy) and add these DNS records:

**For apex domain (basheer.diy):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain (optional):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

#### B. Configure GitHub Pages

1. In your repository settings → Pages
2. Under **"Custom domain"**, enter: `basheer.diy`
3. Click **"Save"**
4. Wait a few minutes for DNS to propagate
5. Check **"Enforce HTTPS"** once it's available

### Step 5: Add CNAME File

Create a file named `CNAME` (no extension) in your portfolio folder:

```
basheer.diy
```

Then commit and push:

```powershell
git add CNAME
git commit -m "Add custom domain"
git push
```

## 🎯 Your Site Will Be Live!

After DNS propagation (5-30 minutes), your site will be accessible at:
- **https://basheer.diy** ✨
- **https://www.basheer.diy** (if you set up www)

## 📝 Making Updates

Whenever you want to update your site:

```powershell
# Make your changes to the files
# Then:
git add .
git commit -m "Description of your changes"
git push
```

Changes will appear on your live site within a few seconds!

## 🔧 Features

- Interactive circuit with light bulb
- Scramble text animation
- Social media links
- Responsive design
- Dark theme with animated grid background

---

Built with ⚡ and passion for making!
