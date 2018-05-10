function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for(let index= 0; index<musicians.length; index++ ){
    empty.push([musicians[index]] + " " + "plays" + " " + [instruments[index]])
  }
  return empty
}

function johnLennonFacts(facts){
  var newArray =[];
  var index = 0;
  while(index<facts.length){
    index++
    newArray.push(facts[index] + "!!!")
  }
  return newArray
}

function iLoveTheBeatles(number){
  var empty = [];
  do{
    empty.push("I love the Beatles!");
    number++ 
  }
  while(number< 15);
  return empty;
}
