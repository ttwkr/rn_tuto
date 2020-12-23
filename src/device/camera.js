import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import React from 'react';

const TakeCamera = () => {
  console.log('Camera!!!!!!');
  return (
    <View>
      <RNCamera
        style={{width: 200, height: 200}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
    </View>
  );
};

export default TakeCamera;
