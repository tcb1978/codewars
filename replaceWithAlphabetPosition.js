// function alphabetPosition(text) {
  //Split text into an array.
  text.split("");
  var character = "";
  //Create an alphabet array.
  var array = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  //Loop thru getting the letter at each position in the array and converting it to lowercase.
  for(var i = 0; i < text.length; i++){
    character = text.charAt(i).toLowerCase();
    //If the letter has an index in the alphabet array greater than -1, then push it into a new array.
    if(alphabet.indexOf(character) > -1){
      array.push(alphabet.indexOf(character) + 1);
      //Join the array to convert it back to a string with a space between each number.
      var newArray = array.join(" ");
    }
    
  }
  return newArray;
}

alphabetPosition("The sunset sets at twelve o' clock.");