const character = {
  name: "Oenus the Conqueror",
  class: "Abyssal Knight",
  level: 5,
  health: 100,
  image: "_34e1b73a-553c-4489-ac6b-e620082afe2b.jpg",
  
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      this.level -= 1;
    } else {
      alert("Character Died");
    }
  },

  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};

function updateCharacterStats() {
  document.querySelector("#level").textContent = character.level;
  document.querySelector("#health").textContent = character.health;
}

document.querySelector("#attacked").addEventListener("click", () => {
  character.attacked();
  updateCharacterStats();
});

document.querySelector("#levelup").addEventListener("click", () => {
  character.levelUp();
  updateCharacterStats();
});
