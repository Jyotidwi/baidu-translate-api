// const cookie = require("./src/cookie");

// cookie.get().then(cookies => {
//     console.log(cookies)
// });

// const token = require("./src/token");

// token.get().then(res => {
//     console.log(res);
// });

// const translate = require("./src/translate");

// translate("让我们来翻译吧!", {
//     version: "v2"
// }).then(res => {
//     console.log(res);
// });

const translate = require("./src/translate");

module.exports = translate;