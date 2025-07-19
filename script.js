const allBtn = document.getElementById("showAll");
const memberBtns = document.querySelectorAll(".name-btn[data-member]");
const flipContainers = document.querySelectorAll(".flip-container");

memberBtns.forEach(button => {
  button.addEventListener("click", () => {
    const selectedMember = button.getAttribute("data-member");
    flipContainers.forEach(card => {
      const cardMember = card.getAttribute("data-member");

      // Show the card.
      if (cardMember === selectedMember) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// display all card
allBtn.addEventListener("click", () => {
  flipContainers.forEach(card => {
    card.style.display = "block";
  });
});

