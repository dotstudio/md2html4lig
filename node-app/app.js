'use strict';

let henkan = require('./lib/henkan');
let qiitapost = require('./lib/qiita');
let url = process.argv[2];

henkan(url, (res) => {
  console.log(res.body);
  // qiitapost(res.title, res.body, (res) => {
  //   console.log('変換完了です！ '+ res.url);
  //   // bot.reply(message, '変換完了です！ '+ res.url);
  //   // qiitadel(res.id);
  // });
});
