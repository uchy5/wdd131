const searchBar = document.getElementById("searchBar");
const mobCards = document.querySelectorAll(".mob-card");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.trim().toLowerCase();

  mobCards.forEach(card => {
    const mobName = card.querySelector("h3").textContent.toLowerCase();
    const mobInfo = card.querySelector("p").textContent.toLowerCase();

    if (mobName.includes(query) || mobInfo.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Show all if the input is empty
  if (query === "") {
    mobCards.forEach(card => {
      card.style.display = "block";
    });
  }
});
