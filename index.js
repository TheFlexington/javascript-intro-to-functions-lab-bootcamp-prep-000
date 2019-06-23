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
  if (logShout(string))
  return "YES INDEED!"
}

function sayHiToGrandma(string) {
  if (logWhisper(string))
  return "I can't hear you!"
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.")
  return "I love you, too."
}

sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");