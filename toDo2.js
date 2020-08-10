//Reverse
//Given a numerical array, reverse the order of values, in-place. 
//The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. 
//Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. 
//As always, do not use built-in array functions such as splice().

console.log('#1 - Reverse')
function reverse(arr){
    console.log('Initial Array:', arr);
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp;
    }
    console.log('Reversed Array:', arr);
}
reverse([1,2,3,4,5]);
console.log('-------------------------------------');


//Rotate
//Implement rotateArr(arr, shiftBy) that accepts array and offset. 
//Shift arr’s values to the right by that amount. 
//‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. 
//Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.
/*
            console.log('#2.1 - Rotate')
            function rotateArr(arr, value){
                console.log('Initial Array:', arr);
                var t = Math.abs(value);

                while(value >0){
                    var temp = arr[arr.length - 1];
                    for(var i = arr.length-1; i > 0; i--){
                        arr[i] = arr[i-1];
                        arr[0] = temp;
                    }
                    t--;
                }
                console.log('New Array:', arr);
            }
            rotateArr([1,2,3],2);
            console.log('-------------------------------------');

*/

//Second: allow negative shiftBy (shift L, not R).

//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

//Fourth: minimize the touches of each element.



//Filter Range
//Alan is good at breaking secret codes. 
//One method is to eliminate values that lie within a specific known range. 
//Given arr and values min and max, retain only the array values between min and max. 
//Work in-place: return the array you are given, with values in original order. No built-in array functions.


console.log('#3 - Filter Range');
function filterRange(arr, min, max){
    console.log('Initial Array:', arr);
    //Given arr[1,2,3,4,5,6,] min = 2 max = 6 
    //Return [3,4,5]

    //iterate thru array
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i] <= min){
            for(var j =i; j < arr.length-1; j++){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            arr.pop();
        }
    }
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i] >= max){
            for(var j =i; j < arr.length-1; j++){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            arr.pop();
        }
    }
    
    return arr;
}
var newArray = filterRange([1,2,3,4,5,6], min=2, max=6);
console.log('New Array:',newArray);



console.log('-------------------------------------');


//Concat
//Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. 
//Return a new array containing the first array’s elements, followed by the second array’s elements. 
//Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

console.log('#4 - Concat');
function concat(arr1, arr2){
    var newArray = [];
    for(var i = 0; i < arr1.length; i++){
        newArray.push(arr1[i]);
    }
    for(var j = 0; j < arr2.length; j++){
        newArray.push(arr2[j]);
    }
    return newArray;
}
var concatArray = concat(['a', 'b'], [1,2]);
console.log('New Array:', concatArray);
console.log('-------------------------------------');
