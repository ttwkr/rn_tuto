import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

const askPermission = async () => {
  try {
    const result = await request(PERMISSIONS.IOS.CAMERA);

    if (result === RESULTS.GRANTED) {
      console.log('Camera!!!');
    }
  } catch (e) {
    console.log(e);
  }
};

export default askPermission;
