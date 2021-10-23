/**
 * @author Thomas Chambon <chambon.thomas.pro@gmail.com>
 */

        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            chrome.tabs.onUpdated.addListener(function() {
                chrome.tabs.executeScript(tabs[0].id, {file: 'popup/change_value.js'}, () => chrome.runtime.lastError); 
            });
        });
