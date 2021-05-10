import { SnackbarProgrammatic } from "buefy";
import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/index";
import moment from "moment";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile: {},
    vehicles: [],
    loading: false,
    error: {
      active: false,
      msg: "",
    },
    events: [],
  },
  mutations: {
    setLoading(state, val) {
      state.loading = val;
    },
    setError(state, val) {
      state.loading = false;
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
    async saveImage({ state, commit }, vehicle) {
      commit("setLoading", true);
      await fb.vehicleImages
        .ref(`vehicleImages/${fb.auth.currentUser.uid}/${vehicle.key}`)
        .putString(vehicle.base64, "base64")
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            store.state.vehicles.find((v) => v.id === vehicle.key).image = url;
          });
          commit("setLoading", false);
        });
    },
    async createVehicle({ state, commit }, vehicle) {
      commit("setLoading", true);

      fb.vehiclesCollection
        .add({
          category: vehicle.category,
          createdOn: new Date(),
          title: vehicle.title,
          mileage: vehicle.mileage,
          nextcheck: vehicle.nextcheck,
          uid: fb.auth.currentUser.uid,
          userName: state.userProfile.name,
          oil: [],
        })
        .then((vehicle) => {
          commit("setLoading", false);
          commit("setVehicle",vehicle)
          console.log("save title", vehicle.title);
        })
        .catch((err) => {
          commit("setError", err.message);
        });
    },
    async updateVehicle({ state, commit, dispatch }, vehicle) {
      commit("setLoading", true);
      await fb.vehiclesCollection
        .doc(vehicle.key)
        .update({
          title: vehicle.title,
          mileage: vehicle.mileage,
          nextcheck: vehicle.nextcheck,
          uid: fb.auth.currentUser.uid,
          userName: state.userProfile.name,
          oil: [],
        })
        .then(() => {
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setError", err.message);
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
    getVehicle: (state) => (id) => state.vehicles.find((v) => v.id === id),
  },
});

fb.auth.onAuthStateChanged((user) => {
  store.commit("setLoading", true);
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
          const post = _doc.data();
          const date = new Date(post.nextcheck.seconds * 1000);
          post.id = _doc.id;
          post.image = null;
          post.nextcheck = moment(date).toDate(),

          fb.vehicleImages
            .ref(`vehicleImages/${user.uid}/${post.id}`)
            .getDownloadURL()
            .then((url) => {
              post.image = url;
            }).catch((err) => {
              //store.commit("setError", err.message);
            });

          postsArray.push(post);
        });

        store.commit("setPosts", postsArray);
        store.commit("setLoading", false);
      });
  } else {
    store.commit("setPosts", []);
    store.commit("setLoading", false);
  }
});

export default store;
