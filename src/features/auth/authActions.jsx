import {} from "./authConstants";
import { SubmissionError} from "redux-form";
import { closeModal } from "../modals/modalActions";

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const registerUser = (user) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    //i will need to setup the user in auth
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);
    console.log(createdUser);
    // will update the auth profile to
    await createdUser.updateProfile({
      displayName: user.displayName
    })
    //create a new profile in firestore
    let newUser = {
      displayName: user.displayName,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    await firestore.set(`users/${createdUser.uid}`, { ...newUser });
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
    throw new SubmissionError({
      _error: error.message
    });
  }
}


export const socialLogin = (selectedProvider) => 
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
   
    // this is when the modal will not display due to the firebase flow?
    // and dispatch will work witht the selected provider
    try { 
      dispatch(closeModal());
     let user = await firebase.login({
      provider: selectedProvider,
      type: 'popup'
        
      })
      // test to see if user is getting all the details from provider
      // console.log(user)
      //this allow if user signed in a second time blah balh?
      if(user.additionalUserInfo.isNewUser){
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.avatarUrl,
          createdAt: firestore.FieldValue.serverTimestamp()
        })
      }

    } catch (error){
   console.log(error)
   }

    
  }

