let str = "#";
let sum = '';
for( let i = -6; i < str.length; i++ ){
   sum += str;
   console.log(sum);
}

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// ---------------

let n = 0;
for(let i = 0 ; i < 100; i++){
n += 1;
if (n % 5 ===0 && n % 3 ===0){
  console.log('BuzzFizz');
}else if (n % 5 ===0 ){
console.log('Buzz');
}else if (n % 3 ===0) {
  console.log('Fizz');
  }else{
console.log(n);
}
}


// ----------

let s ='#';
let d = ' ';
let sum = '';
let z = '';
for (let i= 0; i < 9; i++){
  sum += s + d; 
}
for(let x =0 ; x<9 ; x++){
  z += d+s;
}
for(let r = 0; r< 6 ; r++){
  console.log(sum);
console.log(z);
}

// -------------
function min (x,y){
  if (x>y){
    console.log(y);
  }else{
    console.log(x);
  }
  }
  min(111,22);

  // ---------------failed recursion

  // -------counting Bs

  let sum=0;
  function countBs(str){
    for(let i = 0; i < str.length; i++){
      if(str[i] === 'B'){
 sum = sum +1;
      }
      }
      return sum;
  }
  console.log(countBs('BBCbbbBB'));
 
//  --
  let su=0;
  function countBss(str, x){
    for(let i = 0; i < str.length; i++){
      if(str[i] === x){
 su = su +1;
      }
      }
      return su;
  }
 console.log(countBss('aaaKKKK', 'K'));
 
  // ----------- array no step tho

  let arr = [];
function range(x,y){
  arr.push(x);
  for(let i = 0; i<y; i++){
if (x<y){
  x++;
  arr.push(x);
}
}
}
range(1,10);
console.log(arr);

let summary=0;
function sum(array){
  for(let i = 0 ; i<array.length; i++){
    summary += array[i] 
  }
}
sum(arr);
console.log(summary);

// --------  just first 
let arrayValue = ['a','d','c', 'f'];
let newArr= [];
function reverseArray(arr){
  for(let i = arr.length - 1; i >=0; i--){
   newArr.push(arr[i]);
  }
};

// -----
let array =[5,6,7,8,9,10];
let list = null;
function arrayToList (arr){
for (let i = arr.length - 1; i >=0; i--){
  list = {value:arr[i] ,rest:list};
}
return list;
}

arrayToList(array);
console.log(list);


let newArr = [];
function listToArray(li){
for(let i = li; li;li = li.rest){
  newArr.push(li.value);
}
}
listToArray(list);
console.log(newArr)


function prepend(value, lis) {
  return {value, rest: lis};
}
console.log(prepend(10, prepend(20, null)));
// ---------------------------
// 5 higher func n 1
let arrays = [[1, 2, 3], [4, 5], [6]];
// let newArr = arrays.reduce((prev,next) => 
//  prev.concat(next) ,[] );
// console.log(newArr);

const array = arrays[0].concat(arrays[1],arrays[2]);
console.log(array);
// =---------- 5.2
