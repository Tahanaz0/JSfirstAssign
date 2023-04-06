// Q no:1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console....


let num1=prompt(" Qno.1::  Enter the first number");
let num2 = prompt('Enter the secont number');

console.log('Qno :1')

if (num1 > num2){
   
    console.log(num1)

}
else if (num2 > num1){
    
    console.log(num2)

}




// Q no:2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


let firtNum = +prompt('Qno.2::  Enter the number')
console.log('Qno :2')

if (firtNum <= 0){
    alert('the sign of -')
  console.log(firtNum);
}
else {
    alert('the sign is +' )
    console.log( firtNum);
}




// Q no:3 Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.
let a = prompt('Qno.3::  Enter the First number');
let b = prompt('Enter the Second number');
let c = prompt('Enter the Third number');
let d = prompt('Enter the Fourth number');
let e = prompt('Enter the  Fifth number');
console.log('Qno :3')

if (a >b &&  a > c  && a > d && a > e){
    console.log(a);
}
else if(b >a &&  b > c && b > d  && b > e){
    console.log(b);
}
else if (c >a &&  c > b && c > d   && c > e){
    console.log(c);
}
else if(d >a &&  d > b && d > c && d >e ){
    console.log(d);
}
else{
    console.log(e);
}





//Q no :4Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
console.log('Qno :4')

for (let i = 0; i <= 15; i++ ){
    if (i % 2 ===0) {
        console.log(i +  ' is even');
}
else {
        console.log(i + ' is odd');
}
}




// Q  no:5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
let marks = prompt(' Qno.5::Enter your marks');
console.log('Qno :5')

if (marks <= 60){
    console.log('Grade : F')
}else if (marks <= 70){
    console.log('Grade : D')
} 
else if (marks <= 80){
    console.log('Grade : C')
}
else if (marks <= 90){
    console.log('Grade : B')
}
else if (marks <= 100){
    console.log('Grade : A')
}




//Q no:6Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".
console.log('Qno :6')

for ( let i = 1; i <= 100; i++ )
{  
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + ' FizzBuzz' );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ ' Fizz' );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ ' Buzz ' );
  }
  else
  {
    console.log(i);
  }
}



// Q no:7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.

console.log('Qno :7')
 var stars='';
for(i=1; i <=6; i++)
{  
   for (a=1; a < i; a++)
     {
    stars=stars+("*");        
      }
      
 console.log(stars);
 stars='';    
}