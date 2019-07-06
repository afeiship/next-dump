# next-dump
> Dump for next

## installation
```bash
npm install -S afeiship/next-dump --registry=https://registry.npm.taobao.org
```

## usage
```js
import 'next-dump';

// exmpale:
clipboard.on('image-changed',()={
  const currentImg = clipboard.readImage();
  nx.dump(currentImg);
});

// result:
// [ key - value ]: toPNG [Function: toPNG]
// [ key - value ]: toJPEG [Function: toJPEG]
// [ key - value ]: toBitmap [Function: toBitmap]
// [ key - value ]: getBitmap [Function: getBitmap]
// [ key - value ]: getNativeHandle [Function: getNativeHandle]
// [ key - value ]: toDataURL [Function: toDataURL]
// [ key - value ]: isEmpty [Function: isEmpty]
// [ key - value ]: getSize [Function: getSize]
// [ key - value ]: setTemplateImage [Function: setTemplateImage]
// [ key - value ]: isTemplateImage [Function: isTemplateImage]
// [ key - value ]: resize [Function: resize]
// [ key - value ]: crop [Function: crop]
// [ key - value ]: getAspectRatio [Function: getAspectRatio]
// [ key - value ]: addRepresentation [Function: addRepresentation]
```
