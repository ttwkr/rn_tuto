import {View, Touchable, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';
import React, {useRef} from 'react';

const TakeCamera = () => {
  // const cameraRef = useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
  //
  // const takePhoto = async () => {
  //   console.log('cameraRef', cameraRef);
  //   if (cameraRef) {
  //     const data = await cameraRef.current.takePictureAsync({
  //       quality: 1,
  //       exif: true,
  //     });
  //     console.log('😻 data', data);
  //   }
  // };

  return (
    <>
      <RNCamera
        style={{width: 200, height: 200}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        ref={(ref) => {
          this.camera = ref;
        }}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      {/*<View>*/}
      {/*  <Touchable onPress={takePhoto}>*/}
      {/*    <Button />*/}
      {/*  </Touchable>*/}
      {/*</View>*/}
    </>
  );
};

export default TakeCamera;
