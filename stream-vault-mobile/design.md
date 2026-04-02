# Stream Vault - Mobile App Design Plan

## Overview

Stream Vault is a Netflix-inspired media streaming application with a sleek dark UI, featuring hero banners, content rows, browsing capabilities, and seamless video playback. The app is optimized for mobile portrait orientation (9:16) and one-handed usage following Apple Human Interface Guidelines.

---

## Screen List

1. **Home Screen** — Hero banner with featured content, multiple content rows (trending, new releases, continue watching)
2. **Browse Screen** — Category/genre browsing with grid layout, search functionality
3. **Search Screen** — Full-text search with results and suggestions
4. **Video Player Screen** — Full-screen video playback with controls and playback options
5. **Detail Screen** — Content details (title, description, cast, rating, related content)
6. **Profile Screen** — User profile, watchlist, viewing history, settings
7. **Settings Screen** — App preferences, playback quality, notifications, account settings

---

## Primary Content and Functionality

### Home Screen
- **Hero Banner**: Large featured content with play button and info button
- **Content Rows**: 
  - Trending Now (horizontal scrollable list)
  - New Releases (horizontal scrollable list)
  - Continue Watching (horizontal scrollable list with progress indicators)
  - Recommended For You (horizontal scrollable list)
- **Navigation**: Tab bar at bottom for Home, Browse, Search, Profile

### Browse Screen
- **Category Grid**: Multiple genre/category cards in 2-column grid
- **Genre Content**: When category is selected, show content in that category
- **Filtering**: Sort by popularity, rating, release date
- **Infinite Scroll**: Load more content as user scrolls

### Search Screen
- **Search Bar**: Top search input with clear button
- **Search Results**: Grid layout of matching content
- **Suggestions**: Recent searches and trending searches
- **Filter Options**: Filter by type (movie, series), genre, rating

### Video Player Screen
- **Full-Screen Video**: Centered video player with controls
- **Playback Controls**: Play/pause, progress bar, volume, fullscreen toggle
- **Quality Selector**: Resolution options (480p, 720p, 1080p)
- **Skip Buttons**: Skip intro (if available), skip to next episode
- **Subtitle Support**: Toggle subtitles, language selection
- **Back Button**: Return to detail or home screen

### Detail Screen
- **Header Image**: Large poster/thumbnail image
- **Content Info**: Title, rating, year, duration, description
- **Metadata**: Cast, director, genre tags
- **Action Buttons**: Play, Add to Watchlist, Share
- **Related Content**: Similar movies/series below
- **Episodes** (if series): List of episodes with thumbnails and descriptions

### Profile Screen
- **User Avatar**: Profile picture placeholder
- **User Name**: Display name
- **Watchlist**: Saved content for later
- **Viewing History**: Recently watched content
- **Settings Button**: Link to settings screen

### Settings Screen
- **Playback Settings**: Quality preference, autoplay toggle
- **Notification Settings**: Enable/disable notifications
- **Account Settings**: Profile info, password, logout
- **App Info**: Version, about, help

---

## Key User Flows

### Flow 1: Browse and Watch Content
1. User opens app → Home screen displays
2. User scrolls through trending content
3. User taps on content card → Detail screen opens
4. User taps "Play" → Video player opens
5. Video plays with controls available
6. User can skip, adjust quality, or return to detail

### Flow 2: Search for Content
1. User taps Search tab → Search screen opens
2. User enters search query → Results display in real-time
3. User taps on result → Detail screen opens
4. User taps "Play" → Video player opens

### Flow 3: Save to Watchlist
1. User on Detail screen
2. User taps "Add to Watchlist" button
3. Item saved and button changes to "Remove from Watchlist"
4. User can access watchlist from Profile screen

### Flow 4: Continue Watching
1. User on Home screen
2. "Continue Watching" row shows previously watched content with progress
3. User taps on content → Video player opens at saved timestamp
4. Video resumes from where user left off

---

## Color Choices

**Stream Vault Brand Colors** (Dark Theme - Primary):

| Element | Color | Usage |
|---------|-------|-------|
| Background | `#0f0f0f` | Main screen background |
| Surface | `#1a1a1a` | Cards, modals, elevated surfaces |
| Primary | `#e50914` | Buttons, highlights, accents (Netflix-inspired red) |
| Foreground | `#ffffff` | Primary text |
| Muted | `#b3b3b3` | Secondary text, descriptions |
| Border | `#333333` | Dividers, card borders |
| Success | `#4ade80` | Success states, checkmarks |
| Warning | `#fbbf24` | Warnings, cautions |
| Error | `#f87171` | Errors, destructive actions |

**Light Theme** (Secondary - for accessibility):

| Element | Color | Usage |
|---------|-------|-------|
| Background | `#ffffff` | Main screen background |
| Surface | `#f5f5f5` | Cards, modals, elevated surfaces |
| Primary | `#e50914` | Buttons, highlights, accents |
| Foreground | `#0f0f0f` | Primary text |
| Muted | `#666666` | Secondary text, descriptions |
| Border | `#e5e5e5` | Dividers, card borders |

---

## Typography & Spacing

- **Display**: 32px bold (screen titles)
- **Heading**: 24px semibold (section titles)
- **Subheading**: 18px semibold (card titles)
- **Body**: 16px regular (descriptions, content)
- **Caption**: 12px regular (metadata, timestamps)
- **Spacing**: 4px, 8px, 12px, 16px, 24px, 32px (multiples of 4)

---

## Component Library

### Reusable Components
- **ContentCard**: Poster/thumbnail with title, rating, play button overlay
- **HorizontalScroll**: Scrollable row of content cards
- **PlayButton**: Large play button with hover state
- **ProgressBar**: Video playback progress indicator
- **RatingBadge**: Star rating or score display
- **TagChip**: Genre/category tag
- **SearchBar**: Input with clear button
- **TabBar**: Bottom navigation with 4 tabs

---

## Interaction Patterns

- **Press Feedback**: Cards scale to 0.97 on press with light haptic
- **Loading States**: Skeleton screens for content rows, spinner for video loading
- **Empty States**: Friendly message when no content found
- **Error Handling**: Toast notifications for errors, retry buttons
- **Animations**: Subtle fade-in for content rows, smooth transitions between screens

---

## Technical Considerations

- **Video Playback**: Use `expo-video` for native video player
- **Image Caching**: Use `expo-image` for efficient image loading
- **State Management**: React Context + AsyncStorage for local data (watchlist, history)
- **Performance**: FlatList for content grids, memoization for cards
- **Responsive**: Adapt to different screen sizes (phone, tablet)
- **Dark Mode**: Automatic theme switching based on system preference

---

## Future Enhancements

- User authentication and cloud sync
- Personalized recommendations using ML
- Social features (watch parties, sharing)
- Offline download capability
- Multiple user profiles
- Advanced filtering and sorting
- Content ratings and reviews
