// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  // break str into an array and loop through array checking for dupes
  str = str.slice('');
  console.log(str);
}

Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );