var string = 'hello world';
var charcodes = [];
for (var i = 0; i < string.length; i++) {
  var charcode = string[i].charCodeAt(0);
  if (charcode > 90) {
    charcode = charcode - 32;
  }
  charcodes.push(charcode);
}
var upperCase = String.fromCharCode(...charcodes);
console.log(upperCase);
