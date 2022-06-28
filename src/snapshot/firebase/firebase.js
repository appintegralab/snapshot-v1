import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/storage'
import "firebase/compat/auth"
import config from "./config-obfuscated.js"

firebase.initializeApp(config);

const db = firebase.firestore();
const rdb = firebase.database();
const storage = firebase.storage();

function snapToArray(snap) {
    if (snap.val() == null) return []
    let vet = [], data = snap.val()
    for (let i in data) {
        vet.push(data[i])
    }
    return (vet);
}

export { db, rdb, storage, snapToArray }
