import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAAqQUzLF1id4oNM1TtrLMu11bq8zhvaSo',
  authDomain: 'soundshop-400f2.firebaseapp.com',
  databaseURL:
    'https://soundshop-400f2-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'soundshop-400f2',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async user => {
    callback(user);
  });
}
