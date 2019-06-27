import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth' 
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyBAIuBjaDHZLynB-76JuP-ftELGRHkeQlc",
    authDomain: "sufc2-c760b.firebaseapp.com",
    databaseURL: "https://sufc2-c760b.firebaseio.com",
    projectId: "sufc2-c760b",
    storageBucket: "sufc2-c760b.appspot.com",
    messagingSenderId: "1033360751464"
  };
  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebasePlayers = firebaseDB.ref('players');
  
  export {
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebasePlayers,
      firebaseDB
  }