# Connecting basheer.diy (Namecheap) to GitHub Pages

Complete step-by-step guide to connect your Namecheap domain to your GitHub Pages site.

## Part 1: Configure GitHub Pages

### Step 1: Enable GitHub Pages
1. Go to https://github.com/basheerbk/portfolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**
6. Wait a moment - you'll see a message saying your site is ready

### Step 2: Add Custom Domain
1. Still in **Settings → Pages**
2. Under **Custom domain**, type: `basheer.diy`
3. Click **Save**
4. **Don't check "Enforce HTTPS" yet** - wait until DNS is configured

## Part 2: Configure Namecheap DNS

### Step 1: Log into Namecheap
1. Go to https://www.namecheap.com/
2. Sign in to your account
3. Click **Domain List** (left sidebar)
4. Find **basheer.diy** and click **Manage**

### Step 2: Access Advanced DNS Settings
1. Click the **Advanced DNS** tab
2. You'll see a list of DNS records

### Step 3: Delete Existing Records (if any)
- Delete any existing **A Records** or **CNAME Records** for `@` or `www`
- Keep only the Namecheap parking records if you want, or delete them too

### Step 4: Add GitHub Pages A Records

Click **Add New Record** and add these **4 A Records**:

**Record 1:**
```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic
```

**Record 2:**
```
Type: A Record
Host: @
Value: 185.199.109.153
TTL: Automatic
```

**Record 3:**
```
Type: A Record
Host: @
Value: 185.199.110.153
TTL: Automatic
```

**Record 4:**
```
Type: A Record
Host: @
Value: 185.199.111.153
TTL: Automatic
```

### Step 5: Add WWW CNAME Record (Optional but Recommended)

Click **Add New Record**:

```
Type: CNAME Record
Host: www
Value: basheerbk.github.io
TTL: Automatic
```

### Step 6: Save Changes
- Click the **green checkmark** ✓ next to each record to save
- Your DNS settings should now look like this:

```
Type        Host    Value                   TTL
A Record    @       185.199.108.153         Automatic
A Record    @       185.199.109.153         Automatic
A Record    @       185.199.110.153         Automatic
A Record    @       185.199.111.153         Automatic
CNAME       www     basheerbk.github.io     Automatic
```

## Part 3: Wait for DNS Propagation

### How Long?
- **Minimum**: 5-10 minutes
- **Maximum**: 24-48 hours (rare)
- **Usually**: 30 minutes to 2 hours

### Check DNS Propagation
Visit https://dnschecker.org/ and enter `basheer.diy` to see if DNS has propagated globally.

## Part 4: Enable HTTPS

### After DNS Propagates:
1. Go back to GitHub: **Settings → Pages**
2. Check the box **"Enforce HTTPS"**
3. Wait a few minutes for the SSL certificate to be issued

## Part 5: Test Your Site

Your site should now be accessible at:
- ✅ **https://basheer.diy**
- ✅ **https://www.basheer.diy**
- ✅ **https://basheerbk.github.io/portfolio/** (will redirect to basheer.diy)

## 🎯 Summary of What You Did

1. ✅ Enabled GitHub Pages on your repository
2. ✅ Added custom domain in GitHub settings
3. ✅ Configured 4 A Records in Namecheap pointing to GitHub's servers
4. ✅ Added CNAME record for www subdomain
5. ✅ Waited for DNS propagation
6. ✅ Enabled HTTPS for secure connection

## 🔧 Troubleshooting

### Site not loading?
- Wait longer - DNS can take time
- Check DNS records are exactly as shown above
- Clear your browser cache (Ctrl + Shift + Delete)

### "DNS check failed" in GitHub?
- Wait 30 minutes and try again
- Make sure you have all 4 A records
- Check that CNAME file exists in your repository

### HTTPS not available?
- Wait for DNS to fully propagate first
- It can take up to 24 hours for SSL certificate to be issued
- Try unchecking and re-checking "Enforce HTTPS"

## 📝 Need to Update Your Site?

Whenever you make changes:

```powershell
cd c:\Users\ASUS\portfolio
git add .
git commit -m "Your update message"
git push
```

Changes will appear on https://basheer.diy within seconds!

---

**Your portfolio will be live at basheer.diy! 🚀**
