var letters = process.argv.slice(2).join("");

function getPosition(string) {
  var position = {};
  for (var i=0; i<string.length;i++) {
    var character = string.charAt(i).toLowerCase();
    if(character !== " ") {
      if (position[character]) {
        position[character].push(i);
      } else {
        position[character] = [i];
      }
    }
  }
  return position;
}

 console.log(getPosition(letters));