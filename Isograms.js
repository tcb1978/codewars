<script type="text/javascript">
	
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  //if str is empty return true
  if (str.length === 0) {
  	return true;
  } else {
  	//to check all to lower case
  	str = str.toLowerCase();
  }
  // break str into an array and 
  var array = str.split('');
  var sortedArr = array.slice().sort();
  //loop through array checking for dupes
  for (var i = 0; i < array.length; i++) {
  	//if dupe found return false
  	if (sortedArr[i + 1] == sortedArr[i]) {
		return false;
    }
  }
  return true;
}

isIsogram("Dermatoglyphics");

</script>