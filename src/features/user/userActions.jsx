import moment from 'moment';
import {toastr} from 'react-redux-toastr'
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

