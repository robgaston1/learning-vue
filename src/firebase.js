import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDn_gacFEsZAcQVd93J0-tF36dqkML27aA",
    authDomain: "learning-vue-c5c93.firebaseapp.com",
    databaseURL: "https://learning-vue-c5c93.firebaseio.com",
    projectId: "learning-vue-c5c93",
    storageBucket: "learning-vue-c5c93.appspot.com",
    messagingSenderId: "126171167428"
  });

  export const db = app.database();
  export const namesRef = db.ref('names');
