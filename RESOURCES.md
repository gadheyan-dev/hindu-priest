# Royalty-Free Resources Guide

This guide contains links to download royalty-free/Creative Commons images and audio for the website.

## Temple Image

### Option 1: Wikimedia Commons (Recommended - CC0 or CC BY-SA)
1. **Hampi Temple Architecture**
   - URL: https://commons.wikimedia.org/wiki/Category:Hampi
   - Search for: "Hampi temple architecture" or "Hampi Virupaksha"
   - License: Usually CC BY-SA 4.0 or CC0
   - Download size: High resolution preferred

2. **Ellora Kailasa Temple**
   - URL: https://commons.wikimedia.org/wiki/Category:Cave_16,_Ellora
   - Search for: "Kailasa temple Ellora"
   - License: Usually CC BY-SA 4.0

3. **General Hindu Temples**
   - URL: https://commons.wikimedia.org/wiki/Category:Hindu_temples_in_India
   - License: Various (check individual images)

### Option 2: Unsplash (Free - Unsplash License)
1. Search: "Hindu temple" or "Indian temple"
   - URL: https://unsplash.com/s/photos/hindu-temple
   - License: Unsplash License (free to use with attribution)
   - Recommended photographers: Look for photos tagged with "temple"

### Option 3: Pixabay (Free - Pixabay License)
1. Search: "Hindu temple India"
   - URL: https://pixabay.com/photos/search/hindu%20temple/
   - License: Pixabay License (free for commercial use, no attribution required)

## Instructions for Temple Image

1. Download a high-quality image (min 1920x1080px)
2. Save as: `/public/images/temple-background.jpg`
3. Recommended: Use a wide, atmospheric shot of temple architecture (not deity images)
4. Update `/public/attribution.md` with:
   - Image source URL
   - Photographer name
   - License type

## Temple Bells Audio

### Option 1: Freesound.org (Recommended - CC0 or CC BY)
1. **Search for: "temple bells" or "hindu temple bells"**
   - URL: https://freesound.org/search/?q=temple+bells
   - Filter by: CC0 (Public Domain) or CC BY (Attribution required)

2. **Recommended Sounds:**
   - Search: "temple bell loop" or "meditation bells"
   - Duration: 30-60 seconds (will loop)
   - Format: MP3 or OGG

### Option 2: Pixabay Audio
1. Search: "temple bells" or "meditation bells"
   - URL: https://pixabay.com/music/search/temple/
   - License: Pixabay License (free)

### Option 3: YouTube Audio Library
1. URL: https://www.youtube.com/audiolibrary
2. Search: "temple" or "bell"
3. Filter by: Music or Sound effects
4. Download: MP3 format

## Instructions for Audio

1. Download an audio file (MP3 format preferred)
2. Save as: `/public/audio/temple-bells.mp3`
3. Recommended specs:
   - Duration: 30-60 seconds (will auto-loop)
   - Bitrate: 128kbps or higher
   - Volume: Moderate (will be auto-adjusted to 30% in code)

4. Update `/public/attribution.md` with:
   - Audio source URL
   - Creator name
   - License type

## Quick Download Links

### Images (Direct Downloads - Check License First):
- Unsplash: https://unsplash.com/s/photos/hindu-temple-architecture
- Pixabay: https://pixabay.com/photos/search/temple%20hindu/
- Wikimedia: https://commons.wikimedia.org/wiki/Category:Hindu_temples_in_India

### Audio (Direct Downloads - Check License First):
- Freesound: https://freesound.org/search/?q=temple+bells&f=license%3A%22cc0%22%20OR%20license%3A%22cc-by%22
- Pixabay: https://pixabay.com/music/search/temple%20bells/

## Attribution Template

After downloading, add to `/public/attribution.md`:

### For Images:
```
- **Temple Background Image** (temple-background.jpg)
- **Source**: [Platform Name]
- **URL**: [Direct link to image page]
- **Photographer/Artist**: [Name if available]
- **License**: [License type - e.g., CC0, CC BY 4.0, Unsplash License]
```

### For Audio:
```
- **Temple Bells Audio** (temple-bells.mp3)
- **Source**: [Platform Name]
- **URL**: [Direct link to audio page]
- **Creator**: [Name if available]
- **License**: [License type - e.g., CC0, CC BY 4.0, Pixabay License]
```

## Notes

- **Respectful Use**: Ensure images don't show identifiable deity images in a disrespectful manner
- **File Size**: Optimize images (use Next.js Image component for automatic optimization)
- **Audio Volume**: The audio is set to 30% volume and loops automatically for ambient effect
- **User Control**: Users can pause/play the audio using the button in the bottom-right corner
- **Auto-play**: Audio may not auto-play in browsers due to autoplay policies - users can manually start it

