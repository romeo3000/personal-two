import moment from 'moment';
import {toastr} from 'react-redux-toastr'
import cuid from 'cuid';
import { asyncActionError, asyncActionStart, asyncActionFinish } from '../async/asyncActions'


export const updateProfile =(user) =>
async (dispatchEvent, getState, {getFirebase}) =>{
   const firebase = getFirebase(); 
   //replacing user with updatedUser using spread operater to get a loaddash emit for free !
   const {isLoaded, isEmpty, ...updatedUser} = user;
   if (updatedUser.dateOfBirth !== getState().firebase.profile.dataOfBirth){
       updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
   }

   try {
       // the getfire base -updateprofile method is different from {.updateProfile in authAction method}
       await firebase.updateProfile(user);
       toastr.success('Success', 'Profile update')

   }catch(error){
       console.log(error)
   }
}


export const uploadProfileImage = (file, fileName) => async (
    dispatch,
    getState,
    { getFirebase, getFirestore }
  ) => {
    const imageName = cuid();
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    const path = `${user.uid}/user_images`;
    const options = {
      name: imageName
    };
    try {
      dispatch(asyncActionStart())
      // upload the file to firebase storage
      let uploadedFile = await firebase.uploadFile(path, file, null, options);
      // get url of image
      let downloadURL = await uploadedFile.uploadTaskSnapshot.downloadURL;
      // get the userdoc from firestore ~listing to docu
      let userDoc = await firestore.get(`users/${user.uid}`);
      // check if user has photo, if not update profile with new image
      if (!userDoc.data().photoURL) {
        await firebase.updateProfile({
          photoURL: downloadURL
        });
        await user.updateProfile({
          photoURL: downloadURL
        });
      }
      // add the new photo to photos collection
      await firestore.add({
        collection: 'users',
        doc: user.uid,
        subcollections: [{collection: 'photos'}]
      }, {
        name: imageName,
        url: downloadURL
      })
      dispatch(asyncActionFinish())
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError())
      throw new Error('Problem uploading photo')
    }
  };
// setup delte photos for firebase and Fstore 

  export const deletePhoto = (photo) => 
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser;
    try {
      await firebase.deleteFile(`${user.uid}/user_images/${photo.name}`)
      await firestore.delete({
        collection: 'users',
        doc: user.uid,
        subcollections: [{collection: 'photos', doc: photo.id}]
      })
    } catch (error) {
      console.log(error);
      throw new Error('Problem deleting the photo')
    }
  }

  //setting up main profile with the auth obj instead of fb then set photourl to url
  export const setMainPhoto = photo =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    try {
      return await firebase.updateProfile({
        photoURL: photo.url
      })
    } catch (error) {
      console.log(error);
      throw new Error('Problem setting main photo')
    }
  }