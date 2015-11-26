var phoneNumsOne = ['123-456-7777', '963-481-7945', '111-222-3333'];
var phoneNumsTwo = ['805-710-6302', '911-111-1111', '199-999-9999'];
var phoneNumsTre = ['222-121-2121', '555-555-5456', '111-111-1111', '555-555-5555'];

function getLargeNum(array){
  var i, j;
  var lrgCount;
  var lrgSum = 0;

  for(i = 0; i < array.length; i++){
    var digits = array[i].match(/[0-9]/g); /* extract digits */
    var sum = 0;

    for(j = 0; j < digits.length; j++){  // add up phone number
      sum += +digits[j];
    }

    if(sum >= lrgSum){
      lrgSum = sum;
      lrgCount = i;
    }
  }
  console.log(array[lrgCount]);
}
getLargeNum(phoneNumsOne); //963-481-7945
getLargeNum(phoneNumsTwo); //199-999-9999
getLargeNum(phoneNumsTre); //555-555-5456

