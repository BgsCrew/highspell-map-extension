// Background script for Highspell Map Extension (Chrome)
// This runs as a service worker in Manifest V3

chrome.runtime.onInstalled.addListener(() => {
  console.log('Highspell Map Extension installed');
});

// Handle any background tasks here if needed
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle messages from content script if needed
  if (request.action === 'backgroundTask') {
    // Perform background tasks
    sendResponse({ success: true });
  }
});
