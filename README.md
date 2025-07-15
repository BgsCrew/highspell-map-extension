# Highspell Map Extension

A browser extension that enhances the [Highspell](https://highspell.com) gaming experience by providing easy access to an interactive map overlay from [Highlite.dev](https://www.highlite.dev/map).

## Features

- 🗺️ **Interactive Map Access**: One-click access to the Highlite.dev map while playing Highspell
- ⚙️ **Customizable Settings**: Configure map URL, button position, iframe size, and more
- 🎮 **Game Integration**: Seamlessly integrates with the Highspell game interface without interfering with gameplay
- 🔒 **Privacy Focused**: Minimal permissions and data collection
- 🌐 **Cross-Browser Support**: Available for both Chrome and Firefox

## Installation

### Chrome/Chromium-based browsers

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `chrome` directory from this repository
5. The extension icon should appear in your browser toolbar

### Firefox

1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the `firefox` directory and select the `manifest.json` file
6. The extension will be loaded temporarily (until Firefox is restarted)

## Usage

1. Navigate to [https://highspell.com/game](https://highspell.com/game)
2. Once logged in, you'll see a map button in the top-right corner of the game interface
3. Click the map button to open the interactive map in an overlay
4. Use the close button (×) or press Escape to close the map
5. Configure settings by right-clicking the extension icon and selecting "Options"

## Settings

The extension provides several customization options:

- **Map URL**: Change the map source (default: https://www.highlite.dev/map)
- **Button Position**: Choose where the map button appears (top-right, top-left, bottom-right, bottom-left)
- **Button Text**: Customize the button label
- **Iframe Dimensions**: Adjust the width and height of the map overlay (20-100%)

## Development

### Prerequisites

- Node.js (for any build tools if needed)
- A modern web browser (Chrome or Firefox)
- Basic knowledge of browser extension development

### Project Structure

```
highspell-map-extension/
├── chrome/                 # Chrome extension files
│   ├── manifest.json      # Chrome extension manifest
│   ├── content.js         # Content script for DOM manipulation
│   ├── background.js      # Background/service worker script
│   ├── settings.html      # Settings page UI
│   ├── settings.js        # Settings page logic
│   └── icon-128.png       # Extension icon
├── firefox/               # Firefox extension files
│   ├── manifest.json      # Firefox extension manifest
│   ├── content.js         # Content script (Firefox version)
│   ├── background.js      # Background script (Firefox version)
│   ├── settings.html      # Settings page UI
│   ├── settings.js        # Settings page logic
│   └── icon-128.png       # Extension icon
├── README.md              # This file
└── PRIVACY.md             # Privacy policy
```

### Making Changes

1. **Chrome Development**:
   - Make changes to files in the `chrome/` directory
   - Go to `chrome://extensions/` and click the refresh icon for the extension
   - Test your changes on [https://highspell.com/game](https://highspell.com/game)

2. **Firefox Development**:
   - Make changes to files in the `firefox/` directory
   - Go to `about:debugging` and reload the extension
   - Test your changes on [https://highspell.com/game](https://highspell.com/game)

### Key Components

- **Content Script**: Injects the map button into the Highspell game interface and handles the map overlay
- **Background Script**: Handles extension lifecycle and inter-script communication
- **Settings Page**: Provides user interface for customizing extension behavior
- **Manifest**: Defines extension permissions, content script matches, and metadata

## Permissions

This extension requires minimal permissions:

- **Storage**: To save user settings and preferences
- **Host Permission for highspell.com**: To inject the map button and functionality into the game

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly on both Chrome and Firefox
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is open source. Please ensure compliance with the terms of service of Highspell.com and Highlite.dev when using this extension.

## Support

If you encounter issues:

1. Check that you're on [https://highspell.com/game](https://highspell.com/game)
2. Ensure you're logged into Highspell
3. Try refreshing the page
4. Check the browser console for error messages
5. Disable and re-enable the extension

## Disclaimer

This extension is not officially affiliated with Highspell or Highlite.dev. Use at your own discretion and ensure compliance with the respective platforms' terms of service.