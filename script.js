// Get elements for memory book project
const modal = document.getElementById("project-modal");
const photobookCard = document.getElementById("photobook-card");
const closeBtn = document.querySelector(".close-btn");

// Open modal when project card is clicked
photobookCard.onclick = function() {
  modal.style.display = "flex";
}

// Close popup when (X) is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close popup if user clicks anywhere outside the box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}