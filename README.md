## インストール (最初だけ)

```
git clone git@github.com:dotstudio/md2html4lig.git
cd md2html4lig
npm i
```

## 利用方法

まずはQiitaの下書きに投稿します。 http://qiita.com/xxxxxxx みたいなURLを用意しましょう。

1か2のどちらかで。

### 1. ブラウザ側に表示

起動して

```
node app 
```

http://hogehoge.com:3005/url?=<ここにQiitaのURL> でブラウザアクセス

![](https://i.gyazo.com/b1e4fc7b1f21afc97534eda7fed3b85e.png)

### 2. コマンドラインに表示

`qiitaUrl=<ここにQiitaのURL> node app.js`で起動する

```
qiitaUrl=http://qiita.com/n0bisuke/private/ddc2f0efd7a428b83a7c node app.js
```

![](https://i.gyazo.com/5be1ef765faf6bd13977d0db7cb143e6.png)