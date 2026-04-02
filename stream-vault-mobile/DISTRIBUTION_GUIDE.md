# Stream Vault - Quick Distribution Guide for Appilix

## Overview

This guide will help you quickly register and distribute Stream Vault on Appilix. The process typically takes 30-60 minutes.

---

## What You'll Need

1. **Your Appilix Account** — Already have one at https://appilix.com/account/
2. **App Files** — APK for Android (provided below)
3. **Screenshots** — 5-8 mobile app screenshots (9:16 aspect ratio)
4. **App Icon** — 1024x1024px PNG (already generated)
5. **App Description** — Copy-paste ready (see APPILIX_SUBMISSION.md)

---

## Quick Start (5 Steps)

### Step 1: Log Into Appilix
1. Go to https://appilix.com/account/
2. Sign in with your credentials
3. Navigate to the Developer Dashboard

### Step 2: Create New App
1. Click "Add New App" or "Create App"
2. Select "Android" as platform
3. Fill in basic info:
   - **App Name:** Stream Vault
   - **Package Name:** space.manus.stream.vault.mobile.t[timestamp]
   - **Category:** Entertainment / Streaming

### Step 3: Upload APK
1. Download the APK file (see "Getting the APK" section below)
2. Upload to Appilix
3. Wait for validation (usually instant)

### Step 4: Add App Details
1. **Short Description:** "Stream your favorite movies and shows anytime, anywhere."
2. **Full Description:** Copy from APPILIX_SUBMISSION.md
3. **Keywords:** streaming, movies, tv shows, entertainment, media player, video streaming, netflix alternative, watch movies, series, on-demand
4. **Content Rating:** PG-13
5. **Support Email:** Your email address

### Step 5: Upload Screenshots & Icon
1. Upload app icon (1024x1024px PNG)
2. Upload 5-8 screenshots (see "Screenshots" section below)
3. Review all information
4. Click "Submit for Review"

---

## Getting the APK

### Option A: Download Pre-Built APK (Easiest)

The APK is located at:
```
/home/ubuntu/stream-vault-mobile/android/app/build/outputs/apk/release/app-release.apk
```

### Option B: Build APK Yourself

```bash
# Navigate to project
cd /home/ubuntu/stream-vault-mobile

# Install dependencies (if not already done)
npm install
# or
pnpm install

# Build APK
eas build --platform android --release
```

---

## Screenshots to Capture

You need 5-8 screenshots showing:

1. **Home Screen** — Hero banner with featured content
2. **Trending Content** — Content rows with ratings
3. **Browse Categories** — Category grid
4. **Search Functionality** — Search results
5. **User Profile** — Watchlist and history
6. **Dark Theme** — Premium interface
7. **Content Details** — Information display
8. **Responsive Design** — Multiple screen sizes

### How to Capture Screenshots

**On Android:**
1. Open Stream Vault in Expo Go or on device
2. Press Power + Volume Down simultaneously
3. Screenshot saved to Photos

**On iOS:**
1. Open Stream Vault in Expo Go or on device
2. Press Side Button + Volume Up simultaneously
3. Screenshot saved to Photos

**On Web (for testing):**
1. Open the dev server: https://8081-in382slb1z6qq3n8nih9b-d8275d3f.us1.manus.computer
2. Take screenshots using your browser's developer tools or screenshot tool
3. Crop to 9:16 aspect ratio

### Screenshot Specifications

- **Dimensions:** 1080x1920px (or 9:16 aspect ratio)
- **Format:** PNG or JPG
- **File Size:** Under 5MB each
- **Quality:** High resolution, clear text

---

## App Icon

The app icon is already generated and located at:
```
/home/ubuntu/stream-vault-mobile/assets/images/icon.png
```

**Specifications:**
- **Size:** 1024x1024px
- **Format:** PNG
- **Design:** Vault door with red play button on dark background
- **No rounded corners** (Appilix will apply them automatically)

---

## App Description (Copy-Paste Ready)

### Short Description (60 characters)
```
Stream your favorite movies and shows anytime, anywhere.
```

### Full Description
```
Stream Vault is a sleek, modern media streaming application designed to bring entertainment to your fingertips. With a Netflix-inspired interface and intuitive navigation, Stream Vault offers a premium streaming experience on mobile devices.

Key Features:

- Home Screen — Discover trending content, new releases, and continue watching your favorite shows with one-tap resume functionality
- Browse Categories — Explore content by genre including Action, Drama, Comedy, Horror, Sci-Fi, Romance, Thriller, and Documentary
- Advanced Search — Find exactly what you're looking for with real-time search, recent searches, and trending recommendations
- User Profile — Manage your watchlist, view your watching history, and customize playback preferences
- Dark Theme — Easy on the eyes with a premium dark interface optimized for extended viewing sessions
- Responsive Design — Seamless experience on phones of all sizes with portrait and landscape support

Why Choose Stream Vault?

Stream Vault combines the best of modern streaming platforms with a focus on user experience. Whether you're into action-packed thrillers, emotional dramas, or light-hearted comedies, Stream Vault has something for everyone. The intuitive interface makes it easy to discover new content and pick up right where you left off.

Perfect For:
- Movie enthusiasts
- TV series fans
- Entertainment lovers
- Anyone seeking a premium streaming experience
```

### Keywords
```
streaming, movies, tv shows, entertainment, media player, video streaming, netflix alternative, watch movies, series, on-demand
```

---

## Submission Checklist

Before clicking "Submit for Review", verify:

- [ ] App name is "Stream Vault"
- [ ] APK file uploaded and validated
- [ ] Short description added
- [ ] Full description added
- [ ] All 10 keywords added
- [ ] Category set to "Entertainment / Streaming"
- [ ] Content rating set to "PG-13"
- [ ] Support email provided
- [ ] App icon uploaded (1024x1024px PNG)
- [ ] 5-8 screenshots uploaded (9:16 aspect ratio)
- [ ] All information reviewed and correct
- [ ] Terms and conditions accepted

---

## After Submission

### Review Timeline
- **Submission:** Immediate
- **Review:** 24-48 hours typically
- **Approval:** App will be published automatically
- **Visibility:** Available in Appilix store within 1-2 hours

### What to Expect
1. Appilix will validate the APK
2. They'll review app information and screenshots
3. They'll check for compliance with their policies
4. You'll receive approval or feedback via email

### If Rejected
- Check your email for rejection reason
- Make necessary changes
- Resubmit (usually instant re-review)

---

## Post-Launch

### Monitor Performance
- Check Appilix dashboard for downloads
- Monitor user ratings and reviews
- Track crash reports

### Respond to Reviews
- Reply to user feedback
- Address bugs promptly
- Plan updates based on feedback

### Plan Updates
- Version 1.1: Video player functionality
- Version 1.2: Real content API integration
- Version 1.3: User authentication
- Version 2.0: Advanced features

---

## Troubleshooting

### APK Upload Fails
- Ensure APK is properly signed
- Check file size (should be 45-50MB)
- Try re-downloading and uploading

### Screenshots Rejected
- Ensure 9:16 aspect ratio (1080x1920px)
- Check image quality (high resolution)
- Verify file format (PNG or JPG)

### Description Issues
- Keep under 4000 characters
- Use clear, professional language
- Avoid special characters that may not render

### Icon Issues
- Must be 1024x1024px
- PNG format required
- No rounded corners (Appilix adds them)
- Ensure good contrast on dark background

---

## Support

For Appilix-specific issues:
- Visit: https://appilix.com/support/
- Email: support@appilix.com
- Documentation: https://appilix.com/docs/

For Stream Vault app issues:
- Check APPILIX_SUBMISSION.md for detailed information
- Review the app's design.md for feature details

---

## Next Steps

1. ✅ Read this guide completely
2. ✅ Gather all required files (APK, screenshots, icon)
3. ✅ Log into your Appilix account
4. ✅ Follow the 5 Quick Start steps above
5. ✅ Submit for review
6. ✅ Monitor your email for approval
7. ✅ Celebrate! 🎉

---

**Ready to distribute?** Start with the 5 Quick Start steps above!

**Questions?** Refer to APPILIX_SUBMISSION.md for detailed information.

**Last Updated:** March 18, 2026
