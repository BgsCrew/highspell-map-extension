# Highspell Map Extension

A browser extension that seamlessly integrates an interactive map into the Highspell online game, providing players with easy access to the Highlite.dev map without leaving the game interface.

## ⬇️ Extension Store Links

### [Chrome](https://chromewebstore.google.com/detail/highspell-map-extension/giacimgcjcicjiilpanocdhabihemodh)

### Firefox: Awaiting approval...

## Quick Start - Sideloading Instructions

### For Chrome Users

1. **Download the Extension**
   - Clone this repository: `git clone https://github.com/BgsCrew/highspell-map-extension.git`
   - Or download as ZIP and extract to a folder

2. **Enable Developer Mode**
   - Open Chrome and navigate to `chrome://extensions/`
   - Toggle "Developer mode" ON in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to and select the `chrome` folder from the downloaded repository
   - The extension should appear in your extensions list with a green "On" toggle

4. **Verify Installation**
   - You should see "Highspell Map Extension" in your extensions list
   - The extension icon should appear in your Chrome toolbar (optional)

### For Firefox Users

#### Method 1: Temporary Installation (Recommended for Testing)
1. **Download the Extension**
   - Clone this repository: `git clone https://github.com/BgsCrew/highspell-map-extension.git`
   - Or download as ZIP and extract to a folder

2. **Open Firefox Developer Tools**
   - Type `about:debugging` in the address bar and press Enter
   - Click "This Firefox" in the left sidebar

3. **Load the Extension**
   - Click "Load Temporary Add-on..." button
   - Navigate to the `firefox` folder from the downloaded repository
   - Select the `manifest.json` file
   - The extension will load temporarily (until Firefox restarts)


### Troubleshooting

**Chrome Issues:**
- If "Load unpacked" is grayed out, ensure Developer mode is enabled
- If the extension doesn't appear, try refreshing the extensions page
- Check the console for any error messages

**Firefox Issues:**
- Temporary add-ons are removed when Firefox restarts - this is normal
- If manifest errors occur, ensure you selected the correct `manifest.json` file

**General Issues:**
- Make sure you're selecting the correct folder (`chrome` or `firefox`)
- Verify all files are present in the selected folder
- Check that you have the latest version of your browser

## Features

- **One-Click Map Access**: Adds a convenient map button to the Highspell game interface
- **Seamless Integration**: Button appears as part of the native Highspell UI with proper styling
- **Instant Loading**: Map loads once and remains cached for quick subsequent access
- **Responsive Design**: Clean, modern modal overlay that doesn't interfere with gameplay
- **Cross-Browser Support**: Works on both Chrome and Firefox

## Installation

### Chrome
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `chrome` folder
5. The extension will appear in your extensions list

### Firefox
1. Download or clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the `firefox` folder and select `manifest.json`
6. The extension will be loaded temporarily

## Usage

1. Navigate to [https://highspell.com/game](https://highspell.com/game)
2. Log into your Highspell account
3. Look for the map button in the top-right area of the game interface
4. Click the button to open the interactive map overlay
5. Use the X button or press Escape to close the map
6. The map will remain loaded for instant access on subsequent opens

## Technical Details

### Permissions
- **Storage**: Used to save user preferences and settings
- **Host Permissions**: Limited to `https://highspell.com/game` for security

### Files Structure
```
├── chrome/                 # Chrome extension files
│   ├── manifest.json      # Chrome manifest
│   ├── content.js         # Main content script
│   ├── background.js      # Background service worker
│   ├── settings.html      # Settings page
│   ├── settings.js        # Settings functionality
│   └── icon-128.png       # Extension icon
├── firefox/               # Firefox extension files
│   ├── manifest.json      # Firefox manifest
│   ├── content.js         # Main content script
│   ├── background.js      # Background script
│   ├── settings.html      # Settings page
│   ├── settings.js        # Settings functionality
│   └── icon-128.png       # Extension icon
├── README.md              # This file
└── PRIVACY_POLICY.md      # Privacy policy
```

### How It Works
1. The extension injects a content script into the Highspell game page
2. Uses MutationObserver to detect when the game UI loads (handles login/logout)
3. Dynamically creates a map button with proper Highspell styling classes
4. Creates an iframe modal displaying the Highlite.dev map
5. Implements click event blocking to prevent character movement when using the map


## Development

This extension is built using:
- **Manifest V3** (Chrome) / **Manifest V2/3** (Firefox)
- **Vanilla JavaScript** - No external dependencies
- **Modern Web APIs** - MutationObserver, CSS Flexbox
- **Cross-browser compatibility** - Separate builds for Chrome and Firefox

### Building from Source
1. Clone the repository
2. Make your changes to the appropriate browser folder
3. Test in developer mode
4. Package using browser-specific tools for distribution

## Compatibility

- **Chrome**: Version 88+ (Manifest V3 support required)
- **Firefox**: Version 109+ (as specified in manifest)
- **Websites**: Only works on `https://highspell.com/game`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes in both `chrome/` and `firefox/` folders
4. Test in both browsers
5. Submit a pull request

## License

This project is open source. Please respect the terms of service of both Highspell and Highlite.dev when using this extension.

## Disclaimer

This extension is not officially affiliated with Highspell or Highlite.dev. It is a community-created tool designed to enhance the gaming experience. Use at your own discretion and in accordance with the game's terms of service.

## Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Ensure you specify which browser you're using
- Include steps to reproduce any bugs

## Version History

### v1.0
- Initial release
- Basic map integration
- Chrome and Firefox support
- Settings page functionality
- Responsive design implementation
