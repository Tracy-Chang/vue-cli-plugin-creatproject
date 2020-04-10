# init a common project

### Usage
```js
vue add @tracy-chang/creatproject
```

### publish
```js
npm publish --access public
```

### unpublish
```js
npm unpublish packagename --force
```


### Features
* 集成`git-cz`规范提交message（中文提示信息），强制验证提交信息
* 集成`standard-version`自动生成changelog
* 集成 editorconfig, gitattributes, jsconfig.json 等对代码优化的功能配置
* 集成 npm，git 的通用配置