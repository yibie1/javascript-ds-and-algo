// Data stracture and algorthim
//Array
// q1 : count the occrace

var nums = [1,2,3,3,4,4,4,4,5,5,6,16,1]

function countdown(num){
 var count = {}

 for(i of num){
    count[i] = count[i] ? count[i] + 1 : 1;
 }
 return count;

}

console.log(countdown(nums));

// q2 : remove redendecy from the array

function removeredendncy(num){
   return [...new Set(num)];

}
console.log(removeredendncy(nums));
// merge array
function mergearray(arr1, arr2){
    return [...arr1, ...arr2]
}

console.log(`merged array ${mergearray([1,3,4], ['a', 'b', 'c'])}`);

// spread ... operator

// sum array value
var no = [2,3,4]
var sum = (a, b, c) => a+b+c;

console.log("sum", sum(... no));


//q3: merge two objects
 var obj1 =[ {name: 'Yibelta', age: 26},  {name: 'Ma', age: 5}, {name: 'Tiza'}, {name: 'Tesf'},]
 var obj2 = {lname: 'Simachew'}

 function merge(obj1, obj2){
  return {...obj1, ...obj2};
 }

console.log( merge({name:'Yibe'}, obj2));
 // q4: count the occrance of an object how many keys

 function countKey (object){
    var  count ={}

    for (let obj of object){
        for(let key in obj){
            count[key] = count[key]?count[key] + 1 : 1
        }
    }
    return count
 }

console.log("key count",countKey(obj1));

//q5: reverse an array

function reverseArray(array){
  var letft = 0; // index
  var right = array.length - 1;

  while(letft < right){
     let swap = array[letft];
     array[letft] = array[right]
     array[right] = swap;

     letft ++;
     right --;
  }
  return array;
}
var adbout_me = ['Fentie','Simachew','Yibeltal'];
console.log(reverseArray(adbout_me));

// q6: Largets number in the array

function lrgetst_nums(num){
    return Math.max(...num);
}
console.log("largest number: ",lrgetst_nums(nums));

 // String questions

//  q1: palindrom check : palindrom mean the word
 function palindrom(str){
    const cleandstr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // clean
    const reversestr = cleandstr.split('').reverse().join('');

    return  cleandstr === reversestr;


 }
 console.log(palindrom("raaR"));

// q2:  count vouls in the string

function countvoles(str){
 const volus = [ 'a' , 'o' , 'e' , 'u' , 'i']
    var count = 0;
    for(let cahr of str.toLowerCase()){
        if(volus.includes(cahr)){
            count ++;
        }
    }
   return count;

}

console.log(`There are ${countvoles("Yibeltal")} vowels in my name`);


// q3: reverce string words

function reverseatrword(str){
    var reverse = str.split('').reverse().join('')

    return reverse;
}

console.log(`when my name is reversed it looks like this ${reverseatrword('Yibeltal Simachew')}`);
