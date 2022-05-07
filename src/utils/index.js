import {showMessage} from 'react-native-flash-message';
export const utils = {
  validateEmail() {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  showFlashMessage(message, description, type) {
    showMessage({
      message,
      description,
      type,
    });
  },
};
