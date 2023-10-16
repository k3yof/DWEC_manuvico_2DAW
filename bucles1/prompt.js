
for (let i = 0;i<100;i++){
    if ( i % 5 === 0)
    console.log(i);
}
console.log("------------------------while--------------------------")
let i = 0;
while( i < 100 ){
  if ( i % 5 === 0)
 console.log(i);

  i++;
}
console.log("ejercicio pizzarra");
for (let i = 0;i<=100;i++){

    if ( i % 3 === 0 &&  i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if ( i % 5 === 0){
        console.log("buzz");
    }
    else if ( i % 3 === 0){
        console.log("fizz");
    }
    else{
        console.log(i)
    }
}



