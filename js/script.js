// Mood to Recommendations mapping 
const moodRecommendations = {
    stressed: {
        playlist: "lofi-relax",
        bg: "stressed-bg",
        timer: "10/2 micro"
    },

    sleepy: {
        playlist: "focus-beats",
        bg: "sleepy-bg",
        timer: "15/5" 
    },

    motivated: {
        playlist: "power-up",
        bg: "motivated-bg",
        timer: "10/2 micro"
    },

    overwhelmed: {
        playlist: "ambient-calm",
        bg: "overwhelmed-bg",
        timer: "5/2 micro"
    },

    calm: {
        playlist: "nature-sounds",
        bg: "calm-bg",
        timer: "30/5"
    }
};

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
        // Get recommendations for the selected mood
        const rec = moodRecommendations[mood];

        // Replace the mood selection with a simple environment placeholder
        mainContent.innerHTML = `
        <div id="environment" class="${rec.bg}">   
            <div id="floating-circles"></div> <!-- for animations -->
            <h2>Your ${mood.charAt(0).toUpperCase() + mood.slice(1)} Study Environment</h2>
            <p>🎵 Recommended Playlist: ${rec.playlist}</p>
            <p>⏰ Timer format: ${rec.timer}</p>
            <button id="back-btn">Back to Mood Selection</button>
        </div>
        `;

        const circlesContainer = document.getElementById("floating-circles");

        // Create 10 floating circles
        for (let i = 0; i < 10; i++) {
            const circle = document.createElement("div");
            circle.classList.add("circle");

            // Randomize size
            const size = Math.random() * 40 + 20; // 20px to 60px
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;

            // Randomize animation duration
            const duration = Math.random() * 5 + 3;
            circle.style.animationDuration = `${duration}s`;

            // Randomize initial position
            circle.style.left = `${Math.random() * 100}%`;
            circle.style.top = `${Math.random() * 100}%`;

            circlesContainer.appendChild(circle);
        }

        // Add click listner for back button
        document.getElementById("back-btn").addEventListener("click", () => {
            
            // Reload the page (simple way to go back)
            location.reload();
        });
    }
});

// Quick mood mapping tests in console
console.log("Testing Mood Mapping:");
["stressed", "sleepy", "motivated", "overwhelmed", "calm"].forEach(m => {
    console.log(m, moodRecommendations[m]);
})