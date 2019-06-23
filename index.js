var uppercase = "HELLO!"
var lowercase = "hello!"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(string) {
  sayHiToGrandma("hello")
  if (string === string.toLowerCase()) 
    return 'I can\'t hear you!.'
}
function sayHiToGrandma(string) {
  sayHiToGrandma("I love you, Grandma.")
  if (string === "I love you, Grandma.")
    return "I love you, too."
}
function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) 
    return "YES INDEED!"
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");