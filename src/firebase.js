import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../firebase.config";

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const vehiclesCollection = db.collection("vehicles");

// export utils/refs
export { db, auth, usersCollection, vehiclesCollection };
