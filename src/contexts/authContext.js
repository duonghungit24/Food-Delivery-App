import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import {SignInReducer} from '../reducers/authReducers';
import auth from '@react-native-firebase/auth';
import {utils} from '../utils';
export const SignInContext = createContext();
// export const auth = getAuth();

export const useUserContext = () => {
  return useContext(SignInContext);
};
export const SignInContextProvider = props => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // const[signedIn,dispatchSignedIn] = useReducer(SignInReducer,{
  //     userToken:null,
  // })
  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return [unsubscribe, setLoading(false)];
  }, []);

  const registerUser = (email, password, name) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() =>
        updateProfile(auth().currentUser, {
          displayName: name,
        }),
      )
      .then(() => {
        utils.showFlashMessage(
            'Thông báo',
            'Tạo tài khoản thành công',
            'success',
          );
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          utils.showFlashMessage(
            'Thông báo',
            'Địa chỉ Email đã được sử dụng',
            'warning',
          );
        }
        if (error.code === 'auth/invalid-email') {
          utils.showFlashMessage(
            'Thông báo',
            'Địa chỉ Email không hợp lệ',
            'warning',
          );
        } else {
          utils.showFlashMessage(
            'Thông báo',
            'Lỗi vui lòng thử lại',
            'warning',
          );
        }
      })
  };

  const signInUser = (email, password) => {
    setLoading(true)
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {})
      .catch(err =>{})
  };

  const logoutUser = () => {
    setLoading(true);
    auth().signOut();
  };

  const getInforUser = () => {
    const user = auth().currentUser;
    if(!user) return null;
    return {
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      url: user.url
    }
  }

  const updateUserInfor = async(values) => {
      const inforUpdate = {
        displayName: values.name,
        photoURL: value.url
      }
    await auth().currentUser.updateProfile(inforUpdate)
  }
  const valueContext = {
    user,
    loading,
    registerUser,
    signInUser,
    logoutUser,
    getInforUser,
    updateUserInfor
  };
  return (
    <SignInContext.Provider value={valueContext}>
      {props.children}
    </SignInContext.Provider>
  );
};
