//Recuresion function : the function calls it self to solve a problem

// factorial

function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(0));

// fibonancy a+b, b+c, c+d ...

function fibonancy(n){
    if(n <= 1) return n;

    return fibonancy(n-1) + fibonancy(n-2)
}

console.log(fibonancy(10));

//Sorting algorithm

// merge sort : dived and concqure (divde the array in two place and sort then merge )

// time complexity O (n log n) : big o notation

function mergesort(arr){
 if(arr.length <=1) return arr; // base case
 // separator
 var mid = Math.floor(arr.length / 2);
 var left = mergesort(arr.slice(0, mid));
 var right = mergesort(arr.slice(mid));
 return merge(left, right);

}
function merge(left, right){
 var result = [];
 while(left.length  && right.length ){
    if(left[0] < right[0])  result.push(left.shift());
    else{
        result.push(right.shift());
    }

 }
 return result.concat(left, right);
}

var arr1 = [2, 1, 4 ,6 ,3 ,5];

console.log(mergesort(arr1))


// searching tree
/*
there is two type of searching depth first and bredth first algorithms

BFs: exploar all nodes in depthe befor go to next nodes
DFS: exploaring
*/



