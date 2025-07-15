// Settings page JavaScript for Highspell Map Extension (Chrome)

document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    
    document.getElementById('saveSettings').addEventListener('click', saveSettings);
});

function loadSettings() {
    chrome.storage.sync.get({
        mapUrl: '',
        buttonPosition: 'top-right',
        buttonText: 'Map',
        iframeWidth: 80,
        iframeHeight: 80
    }, function(items) {
        document.getElementById('mapUrl').value = items.mapUrl;
        document.getElementById('buttonPosition').value = items.buttonPosition;
        document.getElementById('buttonText').value = items.buttonText;
        document.getElementById('iframeWidth').value = items.iframeWidth;
        document.getElementById('iframeHeight').value = items.iframeHeight;
    });
}

function saveSettings() {
    const settings = {
        mapUrl: document.getElementById('mapUrl').value,
        buttonPosition: document.getElementById('buttonPosition').value,
        buttonText: document.getElementById('buttonText').value,
        iframeWidth: parseInt(document.getElementById('iframeWidth').value),
        iframeHeight: parseInt(document.getElementById('iframeHeight').value)
    };
    
    chrome.storage.sync.set(settings, function() {
        showStatus('Settings saved successfully!', 'success');
        
        // Notify content script of settings change
        chrome.tabs.query({url: "*://highspell.com/game*"}, function(tabs) {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, {
                    action: 'settingsUpdated',
                    settings: settings
                });
            });
        });
    });
}

function showStatus(message, type) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = 'status ' + type;
    status.style.display = 'block';
    
    setTimeout(() => {
        status.style.display = 'none';
    }, 3000);
}
