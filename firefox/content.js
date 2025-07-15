// Content script for Highspell Map Extension (Firefox)
// This script runs in the context of the highspell.com/game page

(function() {
    'use strict';
    
    // Prevent default actions for clicks on UI elements to avoid character movement
    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Bind click events to prevent default actions such as clicking the gameworld, causing the character to move
    function bindOnClickBlockHsMask(element, callback) {
        element.addEventListener("click", (e) => {
            callback(e);
            preventDefault(e);
        });
        element.addEventListener("pointerdown", preventDefault);
        element.addEventListener("pointerup", preventDefault);
    }
    
    // Wait for the page to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initExtension);
    } else {
        initExtension();
    }
    
    function initExtension() {
        console.log('Highspell Map Extension content script loaded');
        
        // Start watching for the hs-screen-mask element
        startWatchingForElement();
    }
    
    function startWatchingForElement() {
        // Try to create button immediately
        if (createMapButton()) {
            return; // Button created successfully
        }
        
        // Set up MutationObserver to watch for DOM changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    // Check if hs-screen-mask was added
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (node.id === 'hs-screen-mask' || node.querySelector('#hs-screen-mask')) {
                                console.log('hs-screen-mask element detected via MutationObserver');
                                createMapButton();
                            }
                        }
                    });
                    
                    // Check if hs-screen-mask was removed (user logged out)
                    mutation.removedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (node.id === 'hs-screen-mask' || node.querySelector('#hs-screen-mask')) {
                                console.log('hs-screen-mask element removed (user logged out)');
                                // The button will be removed with the parent element automatically
                            }
                        }
                    });
                }
            });
        });
        
        // Start observing
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // Fallback: periodic check every 2 seconds
        const intervalId = setInterval(() => {
            if (createMapButton()) {
                console.log('hs-screen-mask element found via periodic check');
                // Don't clear interval - keep checking in case user logs out and back in
            }
        }, 2000);
        
        console.log('Started watching for hs-screen-mask element');
    }
    
    function createMapButton() {
        // Find the hs-screen-mask element
        const screenMask = document.getElementById('hs-screen-mask');
        if (!screenMask) {
            return false; // Element not found
        }
        
        // Check if button already exists
        if (document.getElementById('highspell-map-button')) {
            return true; // Button already exists
        }
        
        console.log('Creating map button in hs-screen-mask element');
        
        // Create the button element
        const mapButton = document.createElement('button');
        mapButton.id = 'highspell-map-button';
        
        // Add the required classes
        mapButton.className = 'hs-button hs-menu hs-minimap-quadrant__button hs-minimap-quadrant-button-transition hs-image-button';
        
        // Apply the specified CSS
        mapButton.style.cssText = `
            top: 52px;
            right: 206px;
            position: fixed;
            width: 40px;
            height: 40px;
            background-image: url('${browser.runtime.getURL('icon-128.png')}');
            background-size: 24px 24px;
            background-position: center;
            background-repeat: no-repeat;
        `;
        
        // Add click event to show iframe with click blocking
        bindOnClickBlockHsMask(mapButton, showMapIframe);
        
        // Inject button as the 4th child of hs-screen-mask
        const children = screenMask.children;
        if (children.length >= 3) {
            // Insert as 4th child (index 3)
            screenMask.insertBefore(mapButton, children[3]);
        } else {
            // If less than 3 children, just append
            screenMask.appendChild(mapButton);
        }
        
        return true; // Button created successfully
    }
    
    function showMapIframe(e) {
        // Check if iframe already exists
        const existingContainer = document.getElementById('highspell-map-iframe-container');
        if (existingContainer) {
            // Just show the existing iframe
            existingContainer.style.display = 'flex';
            return;
        }
        
        // Create iframe container (first time only)
        createMapIframe();
    }
    
    function createMapIframe() {
        
        // Create iframe container
        const container = document.createElement('div');
        container.id = 'highspell-map-iframe-container';
        container.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: rgba(16, 16, 16, 0.98);
            border: 2px solid #333;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            z-index: 10001;
            display: flex;
            flex-direction: column;
        `;
        
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.textContent = '×';
        closeButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 15px;
            background: #f44336;
            color: white;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            z-index: 10002;
        `;
        
        closeButton.addEventListener('click', () => {
            container.style.display = 'none';
        });
        
        // Create iframe (placeholder for now)
        const iframe = document.createElement('iframe');
        iframe.style.cssText = `
            width: 100%;
            height: calc(100% + 78px);
            border: none;
            border-radius: 12px;
            flex: 1;
            margin-top: -78px;
            clip-path: inset(78px 0 0 0);
        `;
        iframe.src = 'https://www.highlite.dev/map';
        
        // Add title
        const title = document.createElement('div');
        title.textContent = 'Highlite.dev Map';
        title.style.cssText = `
            padding: 15px;
            font-family: Arial, sans-serif;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            color: white;
            border-bottom: 1px solid #ddd;
        `;
        
        // Assemble the container
        container.appendChild(title);
        container.appendChild(closeButton);
        container.appendChild(iframe);
        
        // Add to page
        document.body.appendChild(container);
        
        // Close on escape key
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                const mapContainer = document.getElementById('highspell-map-iframe-container');
                if (mapContainer && mapContainer.style.display !== 'none') {
                    mapContainer.style.display = 'none';
                }
            }
        });
    }
})();
