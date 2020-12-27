import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';

export const askPermission = async ({device}) => {
  try {
    const result = await request(device);

    if (result === RESULTS.GRANTED) {
      console.log('Camera!!!');
    }
  } catch (e) {
    console.log(e);
  }
};

export const requestGPSPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
  } catch (e) {
    console.log('error : ' + e);
  }
};
