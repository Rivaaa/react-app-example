import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNzpBFeGjKG9205s9lhxCmt6BCDQgvPQg",
  authDomain: "marketplace-8db3a.firebaseapp.com",
  databaseURL: "https://marketplace-8db3a.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
