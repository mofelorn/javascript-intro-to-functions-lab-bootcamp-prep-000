function shout(string){
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
}  

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else {
    return "YES INDEED!"
  }
}

function sayHiToGrandma(string){
  if (string === "I love you, Grandma."){
    return "I love you, too."
  } else if (string === string.toLowerCase()){
    return "I can't hear you!"
  } else {
    return "YES INDEED!"
  }
}

