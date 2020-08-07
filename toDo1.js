//#1 - Push Front
//Given an array and an additional value, insert this value at the beginning of the array. 
//Do this without using any built-in array methods.


console.log('#1 - Push Front')
var arr = [2,4,6,8]
var value = 10

function pushFront(arr, value){
    console.log('Initial Array:',arr)
    //Iterate Thru Array
    for(var i = arr.length-1; i >= 0; i--){
        //Move everyone one over 1 spot
        arr[i+1] = arr[i]
    }
    //Place new value in arr[0]
    arr[0] = value
    console.log('New Array:', arr)
}

pushFront(arr,value)
console.log('-----------------------------------------------------------------')


//Pop Front
//Given an array, remove and return the value at the beginning of the array. 
//Do this without using any built-in array methods except pop().

console.log('#2 - Pop Front')
function popFront(arr){
    console.log('Initial Array:', arr)
    var first = arr[0]
    for(var i = 0; i < arr.length; i++){
        arr[i]=arr[i+1]
    }
    arr.pop()
    console.log('New Array:', arr)
    console.log('First Value:', first)
}

popFront(arr)
console.log('-----------------------------------------------------------------')




//Insert At
//Given an array, index, and additional value, insert the value into array at given index. 
//Do this without using built-in array methods. 
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

console.log('#3 - Insert At')
function insertAt(arr, index, value){
    console.log('Initial Array:', arr);
    for(var i = arr.length - 1; i >= index; i--){
        arr[i+1] = arr[i]
    }
    arr[index] = value;
    console.log('New Array:', arr);
    
}
insertAt(arr, 1, 100);
console.log('-----------------------------------------------------------------')



//Remove At
//Given an array and an index into array, remove and return the array value at that index. 
//Do this without using built-in array methods except pop(). 
//Think of popFront(arr) as equivalent to removeAt(arr,0).

console.log('#4 - Remove At')
function removeAt(arr, index){
    
}