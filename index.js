function theBeatlesPlay(musicians,instruments){
  var emptyArray = [];
  for(let index=0; index<musicians.length; index++){
    emptyArray.push(`${musicians[index]} plays ${instruments[index]}`)
  }
  return emptyArray
}
function johnLennonFacts(facts){
  var index = 0
  var emptyArray = [];
  while(index<facts.length){
    emptyArray.push(facts[index]+"!!!")
    index++;
  }
  return emptyArray
}

function iLoveTheBeatles(n){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles!");
    n++;
  }
  while(n<15)

  return emptyArray
}
