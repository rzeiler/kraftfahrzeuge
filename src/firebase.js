import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { firebaseConfig } from "../firebase.config";

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const vehicleImages = firebase.storage();
 

// collection references
const usersCollection = db.collection("users");
const vehiclesCollection = db.collection("vehicles");
const eventCollection = db.collection("vehicle-events");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  vehiclesCollection,
  vehicleImages,
  eventCollection,
};
