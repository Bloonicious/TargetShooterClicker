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
    // Create an object to store the game state
    var gameState = {
        score: points,
        pistolPurchased: pistolPurchased,
        smgPurchased: smgPurchased,
        shotgunPurchased: shotgunPurchased,
        sniperRiflePurchased: sniperRiflePurchased,
        // Add any other variables you want to save here
    };

    // Convert the game state object to a JSON string
    var gameStateJSON = JSON.stringify(gameState);

    // Save the JSON string to local storage
    localStorage.setItem('gameState', gameStateJSON);
}

// Function to load the game state from local storage
function loadGameState() {
    // Retrieve the JSON string from local storage
    var gameStateJSON = localStorage.getItem('gameState');

    // If the JSON string is not null (i.e., if there is a saved game state)
    if (gameStateJSON !== null) {
        // Parse the JSON string to get the game state object
        var gameState = JSON.parse(gameStateJSON);

        // Set the game variables based on the saved game state
        points = gameState.score;
        pistolPurchased = gameState.pistolPurchased;
        smgPurchased = gameState.smgPurchased;
        shotgunPurchased = gameState.shotgunPurchased;
        sniperRiflePurchased = gameState.sniperRiflePurchased;
        // Add any other variables you saved here

        // Update the game interface to reflect the loaded game state
        updatePointsDisplay();
        // Add any other interface updates here
    }
}

// Call the loadGameState function when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGameState();
});

// Function to reset game progress
function resetProgress() {
    // Reset all game variables to their default values
    points = 0;
    pistolPurchased = false;
    smgPurchased = false;
    shotgunPurchased = false;
    sniperRiflePurchased = false;
    // Reset any other variables as needed

    // Update the game interface to reflect the reset progress
    updatePointsDisplay();
    // Reset any other interface elements as needed

    // Save the game state to update local storage
    saveGameState();

    // Optionally, you can add a confirmation message to notify the player that their progress has been reset
    alert('Your progress has been reset.');
}

// Call the saveGameState function whenever the game state changes
// For example, after earning points, purchasing weapons, etc.
// You can call this function wherever you modify game state variables

window.addEventListener('DOMContentLoaded', (event) => {
    initializeSoundEffects();
});
