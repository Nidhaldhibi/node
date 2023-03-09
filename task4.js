var generator = require("generate-password");

var password = generator.generate({
  length: 12,
  numbers: true,
  uppercase: false,
});

console.log(password);
