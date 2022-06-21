function oneThroughTwenty(){

  let listaNome = []
  for(let i = 1; i <= 20; i++){
      listaNome.push(i)
      
  }

  return listaNome

}
console.log(oneThroughTwenty())

function evensToTwenty(){

  let listaNome1 = []
  for (let i = 1; i <= 20; i++){
      if(i % 2 == 0 ){
       listaNome1.push(i);   
      }
  }
   return listaNome1
}
console.log(evensToTwenty())


function oddsToTwenty(){

  let listaNome2 = []
  for (let i = 1; i <= 20; i++){
      if(i % 2 == 1 ){
          listaNome2.push(i);       
      }
  }
  return listaNome2
      
}
console.log(oddsToTwenty())
 
function multiplesOfFive(){
  let listaNome3 = []
  for(let i = 5; i <= 100; i = i + 5){
      listaNome3.push(i);
  }
  return listaNome3
}
console.log(multiplesOfFive())




function countingBackwards(){

  let listaNome5 = []
  for(let i = 20; i >= 1; i = i - 1){
      listaNome5.push(i)
  }
  return listaNome5
}
console.log(countingBackwards())


function evenNumbersBackwards(){
  let listaNome7 = []
  for(let i = 20; i >= 1; i = i - 2){
      listaNome7.push(i)

  }

  return listaNome7
}
console.log(evenNumbersBackwards())

function oddNumbersBackwards(){
  let listaNome8 = []
  for(let i = 20; i >= 1; i = i - 1){
      if(i % 2 == 1){
      listaNome8.push(i)  
      }   
  }
  return listaNome8
}
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards(){
  let listaNome9 = []

  for(let i = 100;i >=1; i = i - 5 ){
      listaNome9.push(i)

  }
return listaNome9

}
console.log(multiplesOfFiveBackwards())



// proxima atividade 10

 // 1, 4, 9, 16, 25, 36, 49, 64, 81 e 100


