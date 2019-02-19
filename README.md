# ionic-camera
This is an ionic application that is able to take a picture for android and iOS .

---

## How to setup ?

```:bash
$ ionic cordova platform add android ios
$ ionic cordova plugin add cordova-plugin-camera cordova-base64-to-gallery
$ npm install
```


## How to run ?

1. Connect your Android or iOS device。

2. Execute the following code.

```:bash
$ ionic cordova emulate ios --target="--device--" --buildFlag="-UseModernBuildSystem=0"
```

## Sample

