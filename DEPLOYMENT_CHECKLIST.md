# 🚀 Deployment Checklist

## Pre-Launch Essentials

### 1. Calendly Integration (CRITICAL)
- [ ] Create a Calendly account at https://calendly.com
- [ ] Set up a 15-minute "Roadmap Review" event type
- [ ] Copy your Calendly booking link
- [ ] Replace `https://calendly.com/your-link` in `index.html` (line 167)
- [ ] Test the Calendly link works

**Search for**: `calendly.com/your-link` in index.html

### 2. Personal Information
- [ ] Update your name throughout (currently "Menem Ragab")
- [ ] Update GitHub username in README.md
- [ ] Customize metrics in Social Proof section (lines 133-149 in index.html)

### 3. Content Customization
- [ ] Review and adjust the hero headline if needed
- [ ] Update tool badges with your actual expertise (Linear, Jira, etc.)
- [ ] Verify FAQ answers match your service offering
- [ ] Adjust "8 Weeks" timeline if your process differs

## GitHub Pages Deployment

### Step 1: Initialize Repository
```bash
cd /Users/menemragab/Documents/Developer/Fractional-PM
git init
git add .
git commit -m "Initial commit: Fractional PM landing page"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `fractional-pm` (or your preferred name)
3. Keep it **Public**
4. Do NOT initialize with README (you already have one)
5. Click "Create repository"

### Step 3: Push to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/fractional-pm.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes for deployment

Your site will be live at:
```
https://YOUR_USERNAME.github.io/fractional-pm/
```

## Post-Launch Verification

### Page Load Test
- [ ] Visit your live URL
- [ ] Test on mobile device (or Chrome DevTools mobile view)
- [ ] Verify sticky CTA appears on mobile scroll
- [ ] Click all CTAs to ensure they scroll/link correctly
- [ ] Test Calendly booking flow end-to-end

### Performance Check
- [ ] Run PageSpeed Insights: https://pagespeed.web.dev/
  - Target: LCP < 2.5s
  - Target: CLS < 0.1
- [ ] Test on slow 3G connection (Chrome DevTools → Network → Slow 3G)

### Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Safari (especially on iPhone)
- [ ] Firefox

### Accessibility Check
- [ ] Run WAVE: https://wave.webaim.org/
- [ ] Verify all CTAs have sufficient contrast
- [ ] Test keyboard navigation (Tab through all buttons)

## Optional Enhancements

### Custom Domain (Recommended)
1. Buy domain (e.g., `yourname.com` from Namecheap, Google Domains)
2. In GitHub Pages settings, add custom domain
3. Configure DNS:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
   - GitHub will auto-provision SSL certificate

### Analytics Setup
- [ ] Google Analytics 4 (free)
- [ ] Plausible Analytics (privacy-friendly, $9/month)
- [ ] Microsoft Clarity (free heatmaps)

**Track these events:**
- CTA clicks ("Book a Roadmap Review")
- Scroll depth (% who reach FAQ)
- Time on page
- Exit rate

### A/B Testing (After 100+ visitors)
Test variants of:
1. Hero headline
2. CTA button copy
3. Social proof positioning
4. Benefit ordering

Use: Google Optimize (free) or VWO

## Conversion Optimization Timeline

### Week 1: Launch
- Deploy page
- Set up analytics
- Share on LinkedIn
- Monitor for errors

### Week 2-4: Gather Data
- Collect 50-100 sessions minimum
- Note where users drop off
- Read Calendly conversion rate

### Month 2: First Optimization
- Run one A/B test
- Update social proof if you land clients
- Adjust copy based on actual objections heard on calls

## Troubleshooting

### "Page Not Found" on GitHub Pages
- Check Settings → Pages is enabled
- Verify repository is Public
- Wait 5 minutes and clear cache

### Calendly Link Not Working
- Ensure link is HTTPS
- Test link in incognito window
- Verify event type is active in Calendly

### Mobile Layout Broken
- Check viewport meta tag is present (line 5 in index.html)
- Clear mobile browser cache
- Test in Chrome DevTools responsive mode

### Fonts Not Loading
- Check Google Fonts link is correct (lines 10-12 in index.html)
- Verify internet connection
- Fonts will fallback to system fonts if Google Fonts fails

## Success Metrics (First 90 Days)

Track these KPIs:

1. **Traffic**: Visitors per week
2. **Engagement**: Avg. time on page (target: >60 seconds)
3. **Scroll**: % who reach FAQ (target: >40%)
4. **Conversion**: Calendly booking rate (target: 2-5% of visitors)
5. **Quality**: % of booked calls that show up (target: >70%)

## Next Steps After Launch

1. Share URL on LinkedIn with a post about your services
2. Add link to email signature
3. Use in cold outreach: "See my approach: [link]"
4. A/B test different traffic sources (LinkedIn vs Twitter vs email)
5. Create variant pages for different segments (early-stage vs growth-stage)

---

**Remember**: The best landing page is a launched landing page. Ship it, then iterate based on real visitor behavior.
