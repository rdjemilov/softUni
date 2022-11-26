// As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter's account with all of his games-> strings, separated by space. Until you receive "Play!" you will be receiving commands which Peter does with his account.

// You may receive the following commands:

// · Install {game} - add the game at the last position in the account, but only if it isn't installed already.

// · Uninstall {game} - delete the game if it exists.

// · Update {game} - update the game if it exists and place it in the last position.

// · Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";

//UNDERSTANDING:
// I'll receive list of commands, until command Play

//SUBTASKS:
// 1- Separate game with space
// 2- If command is not a Play, continue with others

//RESEARCH:
// - How can I separate arrays with space

//PSEUDO- CODE:

function buildSteamAcc(input) {
  let games = input[0].split(" ");
  let arrLength = input.length;

  for (let i = 1; i < arrLength; i++) {
    let currEl = input[i].split(" ");
    let command = currEl[0];
    let newGame = currEl[1];
    if (command === "Play") {
      break;
    } else if (command === "Install" && games.includes(newGame) === false) {
      games.push(newGame);
    } else if (command === "Uninstall" && games.includes(newGame)) {
      let index = games.indexOf(newGame);
      games.splice(index, 1);
    } else if (command === "Update" && games.includes(newGame)) {
      let index = games.indexOf(newGame);
      games.splice(index, 1);
      games.push(newGame);
    } else if (command === "Expansion") {
      let expansion = newGame.split("-");
      let game = expansion[0];

      if (games.includes(game)) {
        let expandedGame = expansion.join(":");
        let index = games.indexOf(game);
        games.splice(index + 1, 0, expandedGame);
      }
    }
    console.log(games.join(" "));
  }
}

buildSteamAcc([
  "CS WoW Diablo",

  "Install LoL",

  "Uninstall WoW",

  "Update Diablo",

  "Expansion CS-Go",

  "Play!",
]);
