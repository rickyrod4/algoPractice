//Min to Front
//Given an array of comparable values, move the lowest element to array’s front, 
//shifting backward any elements previously ahead of it. 
//Do not otherwise change the array’s order. 
//Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
//As always, do this without using built-in functions.

function min2front(arr){
    console.log('Initial Array:', arr)
    console.log('Array length:,', arr.length)
    var min = arr[0];
    //iterate thru array
    for(var i = 0; i < arr.length; i++){
        //find the min and index of min value
        if(arr[i] < min){
            min = arr[i];
            var minIndex = i;
        }
    }
    //move min value to the front
    for(var j = minIndex; j > 0; j--){
        var temp = arr[j-1];
        arr[j-1] = min;
        arr[j] = temp;
    }
    return arr;
}

var newArr = min2front([4,20,10,3,5]);
console.log(newArr);
