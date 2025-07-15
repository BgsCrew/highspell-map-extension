// Background script for Highspell Map Extension (Firefox)
// This runs as a background script

browser.runtime.onInstalled.addListener(() => {
  console.log('Highspell Map Extension installed');
});

// Handle any background tasks here if needed
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle messages from content script if needed
  if (request.action === 'backgroundTask') {
    // Perform background tasks
    sendResponse({ success: true });
  }
});
