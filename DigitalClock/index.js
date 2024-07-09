function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Dakikalar ve saniyeleri iki basamaklı yap
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock(); 


setInterval(updateClock, 1000);
