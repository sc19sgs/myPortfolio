function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  // Function to open the video modal
function openVideoPopup() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");

  modal.style.display = "block";
  video.play(); // Start playing the video when the modal is opened
}

// Function to close the video modal
function closeVideoPopup() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("videoPlayer");

  modal.style.display = "none";
  video.pause(); // Pause the video when the modal is closed
  video.currentTime = 0; // Reset video to the beginning
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById("videoModal");
  if (event.target == modal) {
    closeVideoPopup();
  }
}
