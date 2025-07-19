document.getElementById("mobForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("mobName").value;
  const desc = document.getElementById("mobDescription").value;
  const health = document.getElementById("mobHealth").value;
  const strength = document.getElementById("mobStrength").value;
  const dex = document.getElementById("mobDexterity").value;
  const intel = document.getElementById("mobIntelligence").value;
  const abilities = document.getElementById("mobAbilities").value.split(",");
  const imageFile = document.getElementById("mobImage").files[0];

  const reader = new FileReader();
  reader.onload = function() {
    const mobCard = document.createElement("div");
    mobCard.className = "mob-card";

    mobCard.innerHTML = `
      <img src="${reader.result}" alt="${name}">
      <h3>${name}</h3>
      <p>${desc}</p>
      <ul class="mob-stats">
        <li><strong>Health:</strong> ${health} HP</li>
        <li><strong>Strength:</strong> ${strength}</li>
        <li><strong>Dexterity:</strong> ${dex}</li>
        <li><strong>Intelligence:</strong> ${intel}</li>
        <li><strong>Abilities:</strong>
          <ul>
            ${abilities.map(ab => `<li>${ab.trim()}</li>`).join("")}
          </ul>
        </li>
      </ul>
    `;

    document.getElementById("customMobContainer").appendChild(mobCard);
    document.getElementById("mobForm").reset();
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  }
});
