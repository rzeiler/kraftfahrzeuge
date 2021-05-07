import { SnackbarProgrammatic } from "buefy";
import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/index";

Vue.use(Vuex);

fb.auth.onAuthStateChanged((user) => {
  if (user) {
    // realtime firebase

    fb.eventCollection.onSnapshot((snapshot) => {
      let events = [];
      snapshot.forEach((doc) => {
        let event = doc.data();
        event.id = doc.id;
        event.selected = false;
        events.push(event);
      });
      store.commit("setEvents", events);
    });

    fb.vehiclesCollection
      .orderBy("createdOn", "desc")
      .where("uid", "==", user.uid)
      .onSnapshot((snapshot) => {
        let postsArray = [];

        console.log("user.uid", user.uid, snapshot);

        snapshot.forEach((_doc) => {
          let post = _doc.data();
          post.id = _doc.id;
          post.image = null;
          fb.vehicleImages
            .ref(`vehicleImages/${user.uid}/${post.id}`)
            .getDownloadURL()
            .then((url) => {
              post.image = url;
            });

          postsArray.push(post);
        });

        store.commit("setPosts", postsArray);
      });
  } else {
    store.commit("setPosts", []);
  }
});

const store = new Vuex.Store({
  state: {
    userProfile: {},
    vehicles: [],
    error: {
      active: false,
      msg: "",
    },
    events: [],
  },
  mutations: {
    setError(state, val) {
      state.error.active = true;
      state.error.msg = val;
    },
    setEvents(state, val) {
      state.events = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setPerformingRequest(state, val) {
      state.performingRequest = val;
    },
    setPosts(state, val) {
      state.vehicles = val;
    },
    setVehicle(state, val) {
      state.vehicle = val;
    },
  },
  actions: {
    async login({ dispatch, commit }, form) {
      fb.auth
        .signInWithEmailAndPassword(form.email, form.password)
        .then((user) => {
          // fetch user profile and set in state
          dispatch("fetchUserProfile", user);
        })
        .catch((err) => {
          commit("setError", err.message);
        });
    },
    async removeVehicle({ state, commit }, vehicle) {
      await fb.vehiclesCollection.doc(vehicle.key).delete();
    },
    async signup({ dispatch, commit }, form) {
      // sign user up
      fb.auth
        .createUserWithEmailAndPassword(form.email, form.password)
        .then(function(user) {
          // create user object in userCollections
          fb.usersCollection
            .doc(user.uid)
            .set({
              name: form.name,
              title: form.title,
            })
            .then(function() {
              // fetch user profile and set in state
              dispatch("fetchUserProfile", user);
            });
        })
        .catch((err) => {
          commit("setError", err.message);
        });
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());

      // change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut();

      // clear user data from state
      commit("setUserProfile", {});

      // redirect to login view
      router.push("/login");
    },
    async getVehicle({ state, commit }, key) {
      commit(
        "setVehicle",
        state.vehicles.find((v) => v.id === key)
      );
    },
    async createVehicle({ state, commit }, vehicle) {
      // create in firebase
      await fb.vehiclesCollection.add({
        createdOn: new Date(),
        title: vehicle.title,
        mileage: vehicle.mileage,
        nextcheck: vehicle.nextcheck,
        uid: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        oil: [],
      });
    },
    async updateVehicle({ state, commit }, vehicle) {
      // create in firebase
      await fb.vehiclesCollection.doc(vehicle.key).update({
        title: vehicle.title,
        mileage: vehicle.mileage,
        nextcheck: vehicle.nextcheck,
        uid: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        oil: [],
      });
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid;
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        title: user.title,
      });

      dispatch("fetchUserProfile", { uid: userId });
    },
  },
  getters: {
    getVehicleById: (state) => (id) => state.vehicles.find((v) => v.id === id),
  },
});

export default store;
