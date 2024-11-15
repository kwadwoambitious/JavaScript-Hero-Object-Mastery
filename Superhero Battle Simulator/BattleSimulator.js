// When the 'battleBtn' is clicked, get the selected heroes and simulate the battle.
document.getElementById("battleBtn").addEventListener("click", function () {
  const hero1 = document.getElementById("hero1").value;
  const hero2 = document.getElementById("hero2").value;

  const result = simulateBattle(hero1, hero2);
  document.getElementById("result").innerText = result;
});

// Simulate a battle between two heroes based on their power levels.
function simulateBattle(hero1, hero2) {
  // Define power levels for each hero
  const heroes = {
    "Superman": { power: 100 },
    "Batman": { power: 75 },
    "Wonder Woman": { power: 85 },
    "Spider-Man": { power: 70 },
  };

  const hero1Power = heroes[hero1].power;
  const hero2Power = heroes[hero2].power;

  // Compare the powers and return the battle result
  if (hero1Power > hero2Power) {
    return `${hero1} wins!`;
  } else if (hero1Power < hero2Power) {
    return `${hero2} wins!`;
  } else {
    return "It's a tie!";
  }
}
