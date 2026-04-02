# Stream Vault 🎬

A sleek, Netflix-inspired media streaming mobile application built with Expo, React Native, and TailwindCSS.

![Stream Vault Logo](https://d2xsxph8kpxj0f.cloudfront.net/310519663434410908/NqwjyYKXW4SaANyTTtkohB/icon-mcU8eGLj5ui3rvttXmpbKH.png)

---

## 🌟 Features

### Core Features
- **Home Screen** — Discover trending content, new releases, and continue watching with one-tap resume
- **Browse Categories** — Explore content by genre (Action, Drama, Comedy, Horror, Sci-Fi, Romance, Thriller, Documentary)
- **Advanced Search** — Real-time search with recent searches and trending recommendations
- **User Profile** — Manage watchlist, view history, and customize preferences
- **Dark Theme** — Premium dark interface optimized for extended viewing
- **Responsive Design** — Seamless experience on all mobile devices

### Technical Features
- Built with **Expo 54** and **React Native 0.81**
- **TailwindCSS (NativeWind)** for styling
- **Expo Router** for navigation
- **TypeScript** for type safety
- **Dark/Light mode** support
- **Responsive** design for all screen sizes

---

## 📱 Screens

### 1. Home Screen
- Hero banner with featured content
- Trending Now row
- New Releases row
- Continue Watching row with progress indicators
- Play and Info buttons

### 2. Browse Screen
- Category grid (8 genres)
- Category-specific content grid
- Back navigation

### 3. Search Screen
- Search bar with real-time filtering
- Recent searches
- Trending searches
- Search results grid

### 4. Profile Screen
- User profile header
- Watchlist tab
- Viewing history tab
- Settings menu

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

```bash
# Clone the repository
git clone https://github.com/productionsgclef-debug/stream-vault-mobile.git
cd stream-vault-mobile

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

### Running on Device

#### iOS
```bash
pnpm ios
```

#### Android
```bash
pnpm android
```

#### Web
```bash
pnpm dev:metro
```

#### Expo Go (Recommended for Testing)
1. Install Expo Go on your device
2. Scan the QR code from the dev server
3. App opens in Expo Go

---

## 📁 Project Structure

```
stream-vault-mobile/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Tab navigation setup
│   │   ├── index.tsx            # Home screen
│   │   ├── browse.tsx           # Browse screen
│   │   ├── search.tsx           # Search screen
│   │   └── profile.tsx          # Profile screen
│   ├── _layout.tsx              # Root layout
│   └── oauth/                   # OAuth callback
├── components/
│   ├── screen-container.tsx     # SafeArea wrapper
│   ├── themed-view.tsx          # Theme-aware view
│   ├── haptic-tab.tsx           # Haptic feedback
│   └── ui/
│       └── icon-symbol.tsx      # Icon mapping
├── hooks/
│   ├── use-colors.ts            # Theme colors hook
│   ├── use-color-scheme.ts      # Dark/light mode
│   └── use-auth.ts              # Auth state
├── lib/
│   ├── utils.ts                 # Utility functions
│   ├── theme-provider.tsx       # Theme context
│   └── trpc.ts                  # API client
├── constants/
│   └── theme.ts                 # Theme configuration
├── assets/
│   └── images/                  # App icons and splash
├── app.config.ts                # Expo configuration
├── tailwind.config.js           # Tailwind configuration
├── theme.config.js              # Theme tokens
├── package.json                 # Dependencies
└── README.md                    # This file
```

---

## 🎨 Customization

### Theme Colors

Edit `theme.config.js` to customize colors:

```javascript
const themeColors = {
  primary: { light: '#e50914', dark: '#e50914' },
  background: { light: '#ffffff', dark: '#0f0f0f' },
  surface: { light: '#f5f5f5', dark: '#1a1a1a' },
  // ... more colors
};
```

### App Branding

Edit `app.config.ts` to customize app details:

```typescript
const env = {
  appName: "Stream Vault",
  appSlug: "stream-vault-mobile",
  logoUrl: "https://...", // S3 URL of logo
  // ...
};
```

---

## 📦 Building for Distribution

### Generate APK (Android)

```bash
# Using EAS Build (recommended)
eas build --platform android --release

# Or local build
npx expo prebuild --clean
cd android
./gradlew assembleRelease
```

### Generate IPA (iOS)

```bash
# Using EAS Build (recommended)
eas build --platform ios --release

# Or local build (requires Mac)
npx expo prebuild --clean
cd ios
xcodebuild -workspace YourApp.xcworkspace -scheme YourApp -configuration Release
```

---

## 🌐 Distribution

Stream Vault is ready for submission to multiple platforms:

- ✅ **Appilix** — Free distribution
- ✅ **Amazon Appstore** — Free distribution
- ✅ **Google Play Store** — $25 one-time fee
- ✅ **Apple App Store** — $99/year
- ✅ **Samsung Galaxy Store** — Free distribution
- ✅ **Huawei AppGallery** — Free distribution
- ✅ **F-Droid** — Free open-source repository

See `MULTI_PLATFORM_SUBMISSION.md` for detailed submission guides.

---

## 📚 Documentation

- **[APPILIX_SUBMISSION.md](./APPILIX_SUBMISSION.md)** — Appilix submission guide
- **[DISTRIBUTION_GUIDE.md](./DISTRIBUTION_GUIDE.md)** — Quick distribution guide
- **[MULTI_PLATFORM_SUBMISSION.md](./MULTI_PLATFORM_SUBMISSION.md)** — Multi-platform submission guide
- **[design.md](./design.md)** — App design and features
- **[todo.md](./todo.md)** — Development roadmap

---

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev                    # Start dev server
pnpm dev:server            # Start backend server
pnpm dev:metro             # Start Metro bundler

# Building
pnpm build                 # Build for production
pnpm check                 # TypeScript type check
pnpm lint                  # Run ESLint
pnpm format                # Format code with Prettier

# Testing
pnpm test                  # Run tests with Vitest

# Database
pnpm db:push               # Push database schema

# Native
pnpm ios                   # Run on iOS simulator
pnpm android               # Run on Android emulator
pnpm qr                    # Generate QR code for Expo Go
```

---

## 🎯 Roadmap

### Version 1.0 (Current)
- ✅ Core UI screens (Home, Browse, Search, Profile)
- ✅ Navigation and routing
- ✅ Dark theme with Netflix-inspired colors
- ✅ Custom app logo and branding

### Version 1.1 (Planned)
- [ ] Video player with playback controls
- [ ] Quality selector (480p, 720p, 1080p)
- [ ] Subtitle support
- [ ] Skip intro/outro buttons

### Version 1.2 (Planned)
- [ ] Real content API integration
- [ ] User authentication
- [ ] Cloud sync for watchlist
- [ ] Viewing history persistence

### Version 2.0 (Future)
- [ ] Offline download capability
- [ ] Social features (watch parties, sharing)
- [ ] Advanced recommendations
- [ ] Multiple user profiles

---

## 🛠️ Tech Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **Styling:** TailwindCSS (NativeWind)
- **Navigation:** Expo Router
- **State Management:** React Context + AsyncStorage
- **API:** tRPC (for future backend integration)
- **Database:** PostgreSQL + Drizzle ORM (optional)
- **Testing:** Vitest

---

## 📋 System Requirements

### Minimum
- **iOS:** 13.0+
- **Android:** 8.0+ (API 26)
- **Node.js:** 18+

### Recommended
- **iOS:** 15.0+
- **Android:** 12.0+ (API 31)
- **Node.js:** 20+

---

## 🔐 Privacy & Security

- **Local Storage:** All data stored locally on device
- **No Tracking:** No analytics or tracking enabled
- **Open Source:** Code is transparent and auditable
- **Permissions:** Minimal permissions requested

See `APPILIX_SUBMISSION.md` for detailed privacy policy.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions:
- **GitHub Issues:** [Open an issue](https://github.com/productionsgclef-debug/stream-vault-mobile/issues)
- **Email:** support@streamvault.app (optional)
- **Documentation:** See docs folder for detailed guides

---

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Expo Symbols](https://docs.expo.dev/guides/icons/)
- Inspired by Netflix's design language

---

## 📊 Project Stats

- **Lines of Code:** ~2,000+
- **Components:** 20+
- **Screens:** 4 main screens
- **Platforms:** iOS, Android, Web
- **Development Time:** ~1 week
- **Status:** ✅ Ready for distribution

---

## 🚀 Getting Started with Distribution

Ready to launch Stream Vault? Follow these steps:

1. **Read the guides:**
   - Start with `DISTRIBUTION_GUIDE.md` for quick overview
   - Check `MULTI_PLATFORM_SUBMISSION.md` for all platforms

2. **Prepare assets:**
   - Generate APK build
   - Capture screenshots
   - Prepare descriptions

3. **Submit to platforms:**
   - Start with free platforms (Appilix, Amazon, Samsung)
   - Then paid platforms (Google Play, Apple App Store)

4. **Monitor submissions:**
   - Check dashboard for approval status
   - Respond to any feedback
   - Plan updates

---

**Made with ❤️ by Stream Vault Team**

Last Updated: March 18, 2026
