// Define function to switch tabs
function switchTab(tabName) {
    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';
}

// Add event listeners to tab buttons
document.addEventListener('DOMContentLoaded', function() {
    // Switch to the "Main" tab when the page is loaded
    switchTab('main');

    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});

let soundEnabled = true; // Ensure sound is enabled by default

function toggleSound() {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        // Play a sound effect
        playSoundEffect();
    }
}

function setNumberFormat(selectedFormat) {
    numberFormat = selectedFormat.value;
    // You can add additional logic here if needed
}

// Function to save the game state to local storage
function saveGameState() {
    var gameState = {
        score: points,
        pistolPurchased: pistolPurchased,
        smgPurchased: smgPurchased,
        shotgunPurchased: shotgunPurchased,
        sniperRiflePurchased: sniperRiflePurchased,
        // Add any other variables you want to save here
    };

    var gameStateJSON = JSON.stringify(gameState);

    localStorage.setItem('gameState', gameStateJSON);
}

// Function to load the game state from local storage
function loadGameState() {
    var gameStateJSON = localStorage.getItem('gameState');

    if (gameStateJSON !== null) {
        var gameState = JSON.parse(gameStateJSON);

        points = gameState.score;
        pistolPurchased = gameState.pistolPurchased;
        smgPurchased = gameState.smgPurchased;
        shotgunPurchased = gameState.shotgunPurchased;
        sniperRiflePurchased = gameState.sniperRiflePurchased;
        // Add any other variables you saved here

        // Update the interface
        updatePointsDisplay();
        
        // Hide purchase buttons for purchased weapons
        if (pistolPurchased) {
            document.getElementById('pistol-purchase').style.display = 'none';
        }
        if (smgPurchased) {
            document.getElementById('smg-purchase').style.display = 'none';
        }
        if (shotgunPurchased) {
            document.getElementById('shotgun-purchase').style.display = 'none';
        }
        if (sniperRiflePurchased) {
            document.getElementById('sniper-rifle-purchase').style.display = 'none';
        }
    }
}

// Function to auto-save the game state every 60 seconds
function autoSave() {
    setInterval(function() {
        saveGameState();
    }, 60000); // 60 seconds
}

// Function to handle saving progress manually
function saveProgress() {
    saveGameState();
}

// Event listener to load game state when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGameState();
    autoSave();
});

// Function to reset game progress
function resetProgress() {
    // Prompt confirmation before resetting progress
    var confirmation = confirm("Are you sure you want to clear your whole progression? NOTE: this cannot be reversed!");
    
    if (confirmation) {
        localStorage.removeItem('gameState');
        // Reset all variables to their default values
        points = 0;
        pistolPurchased = false;
        smgPurchased = false;
        shotgunPurchased = false;
        sniperRiflePurchased = false;
        // Reset any other variables as needed

        // Reset weapon zones and disable automatic points generation
        document.getElementById('pistol-zone').style.display = 'none';
        document.getElementById('smg-zone').style.display = 'none';
        document.getElementById('shotgun-zone').style.display = 'none';
        document.getElementById('sniper-rifle-zone').style.display = 'none';

        clearInterval(pistolInterval);
        clearInterval(smgInterval);
        clearInterval(shotgunInterval);
        clearInterval(sniperRifleInterval);

        // Update the interface
        updatePointsDisplay();
        // Add any other interface updates here
    }
}

// Call the saveGameState function whenever the game state changes
// For example, after earning points, purchasing weapons, etc.
// You can call this function wherever you modify game state variables

window.addEventListener('DOMContentLoaded', (event) => {
    initializeSoundEffects();
});
