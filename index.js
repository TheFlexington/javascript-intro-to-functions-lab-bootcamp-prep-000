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

function sayHiToGrandma (string) {
 if (logWhisper(string))
 return ('I can\'t hear you!');
 else if (logShout(string))
 return ('YES INDEED!');
 else if (sayHiToGrandma('I love you, Grandma.'))
 return ('I love you, too.');
}