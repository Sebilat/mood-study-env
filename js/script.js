// Wait until the DOM Loads

document.addEventListener("DOMContentLoaded", () => {

    // Selects all the element with the class ".bubble" and selects the main container
    const bubbles = document.querySelectorAll(".bubble");
    const mainContent = document.getElementById("main-content");

    // Loops over each bubble displays an environment page for each mood clicked 
    bubbles.forEach(bubble => {
        bubble.addEventListener("click", () => {
            const selectedMood = bubble.dataset.mood;
            showEnvironment(selectedMood);
        });
    });

    function showEnvironment(mood) {

        // Replace the mood selection with a simple environment placeholder
        mainContent.innerHTML = `
            <div id="environment" class="${mood}-bg">
                <h2>Your ${mood.charAt(0).toUpperCase() + mood.slice(1)} Study Environment</h2>
                <p>🎵 Recommended Playlist: [Placeholder]</p>
                <p>⏰ Timer format: [Placeholder]</p>
                <button id="back-btn">Back to Mood Selection</button>
            </div>
        `;

        // Add click listner for back button
        document.getElementById("back-btn").addEventListener("click", () => {
            
            // Reload the page (simple way to go back)
            location.reload();
        });
    }
});