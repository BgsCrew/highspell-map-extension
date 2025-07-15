# Privacy Policy for Highspell Map Extension

*Last updated: [Current Date]*

## Introduction

This Privacy Policy describes how the Highspell Map Extension ("we", "our", or "the extension") collects, uses, and protects your information when you use our browser extension. We are committed to protecting your privacy and being transparent about our data practices.

## Information We Collect

### Data Stored Locally

The extension stores the following information locally on your device using your browser's storage API:

- **User Settings**: Your preferences for map URL, button position, button text, and iframe dimensions
- **Extension State**: Basic information about extension configuration and status

### Data We Do NOT Collect

- Personal information (name, email, address, phone number)
- Browsing history or activity outside of highspell.com
- Game data, character information, or gameplay statistics
- Login credentials or authentication tokens
- Financial or payment information
- Location data
- Device identifiers or tracking cookies

## How We Use Information

The locally stored settings are used exclusively to:

- Remember your customized extension preferences
- Provide a personalized user experience
- Maintain your settings between browser sessions

## Data Sharing and Third Parties

### No Data Sharing
We do not share, sell, rent, or trade any user data with third parties.

### Third-Party Services
The extension connects to the following external services:

1. **Highspell.com**: The extension operates on this domain to enhance your gaming experience
2. **Highlite.dev**: The extension loads maps from `https://www.highlite.dev/map` in an iframe

Please review the privacy policies of these services:
- [Highspell Privacy Policy](https://highspell.com/privacy) (if available)
- [Highlite.dev Privacy Policy](https://www.highlite.dev/privacy) (if available)

### No Tracking or Analytics
The extension does not include any tracking, analytics, or telemetry systems.

## Data Security

- All settings are stored locally on your device using browser storage APIs
- No data is transmitted to external servers (except for loading the map iframe)
- The extension operates with minimal permissions to reduce security risks

## Your Rights and Choices

### Data Control
You have full control over your data:

- **Access**: View your settings through the extension's options page
- **Modify**: Change any settings at any time through the options interface
- **Delete**: Remove all stored data by:
  - Uninstalling the extension
  - Clearing browser extension data
  - Resetting extension settings to defaults

### Opt-Out
You can stop using the extension at any time by:
- Disabling the extension in your browser
- Uninstalling the extension completely

## Permissions Explained

The extension requests the following browser permissions:

### Storage Permission
- **Purpose**: Save your personalized settings locally
- **Scope**: Limited to extension settings only
- **Data**: Map URL, button position, iframe dimensions, button text

### Host Permission (highspell.com)
- **Purpose**: Inject the map button into the game interface
- **Scope**: Limited to `https://highspell.com/game` only
- **Function**: Add interactive elements to enhance gameplay

## Children's Privacy

This extension is designed for users of the Highspell game. We do not knowingly collect personal information from children under 13. The extension only stores local preferences and does not collect any personal data.

## Data Retention

- Settings are retained locally until you uninstall the extension or clear browser data
- No data is stored on external servers
- No automatic data expiration or deletion occurs

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. When we do:

- We will update the "Last updated" date at the top of this policy
- Significant changes will be communicated through extension updates
- Continued use of the extension after changes constitutes acceptance of the new policy

## Contact Information

This is an open-source project. For privacy-related questions or concerns:

1. Review the source code on our repository
2. Open an issue on our GitHub project
3. The extension operates transparently with all code available for inspection

## Compliance

This extension is designed to comply with:

- Browser extension store policies
- General privacy best practices
- Minimal data collection principles

## Technical Details

### Browser Storage Usage
- Uses browser.storage.local API (Chrome) or browser.storage.sync API (Firefox)
- Maximum storage: Limited by browser extension storage quotas
- Storage format: JSON objects containing user preferences

### Network Requests
The extension makes network requests only to:
- Load the map iframe from highlite.dev (user-initiated)
- Access extension assets (icons, etc.) from the extension package

### Content Script Behavior
- Operates only on highspell.com/game
- Does not access or modify game data
- Only adds UI elements for map functionality
- Does not interfere with game mechanics or anti-cheat systems

## Disclaimer

This privacy policy applies only to the Highspell Map Extension. Please review the privacy policies of Highspell.com and Highlite.dev for their respective data practices, as this extension connects to their services.

---

*This extension is not officially affiliated with Highspell or Highlite.dev. This privacy policy is specific to the browser extension and does not cover the privacy practices of the connected services.*