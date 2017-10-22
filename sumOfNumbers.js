// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!	

function GetSum( a,b ){
		//If the two numbers are equal return a or b
	if (a === b) {
		return a;
	}
	var s = a, e = b, sum = 0;
	if(a > b) { 
		s = b; 
		e = a;
	}
	for(i=s; i<=e; i++) sum += i;
		return sum;
}

Test.describe("Basic Tests:", function(){
       
        Test.assertEquals(GetSum(0,-1),-1);
        Test.assertEquals(GetSum(0,1),1);
        
});