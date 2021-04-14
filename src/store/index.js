import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

 

// realtime firebase
fb.vehiclesCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let postsArray = []
  snapshot.forEach(_doc => {
    let post = _doc.data()
    post.id = _doc.id
    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    vehicles: [],
    oils: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPerformingRequest(state, val) {
      state.performingRequest = val
    },
    setPosts(state, val) {
      state.vehicles = val
    } 
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/login')
    },
    async createPost({ state, commit }, post) {
      // create post in firebase
      await fb.vehiclesCollection.add({
        createdOn: new Date(),
        content: post.content,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0
      })
    },
    async likePost ({ commit }, post) {
      const userId = fb.auth.currentUser.uid
      const docId = `${userId}_${post.id}`

      // // check if user has liked post
      // const doc = await fb.likesCollection.doc(docId).get()
      // if (doc.exists) { return }

      // // create post
      // await fb.likesCollection.doc(docId).set({
      //   postId: post.id,
      //   userId: userId
      // })

      // // update post likes count
      // fb.vehiclesCollection.doc(post.id).update({
      //   likes: post.likesCount + 1
      // })
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        title: user.title
      })

      dispatch('fetchUserProfile', { uid: userId })

      // update all vehicles by user
      // const postDocs = await fb.vehiclesCollection.where('userId', '==', userId).get()
      // postDocs.forEach(doc => {
      //   fb.vehiclesCollection.doc(doc.id).update({
      //     userName: user.name
      //   })
      // })

      // // update all comments by user
      // const commentDocs = await fb.commentsCollection.where('userId', '==', userId).get()
      // commentDocs.forEach(doc => {
      //   fb.commentsCollection.doc(doc.id).update({
      //     userName: user.name
      //   })
      // })
    }
  },
  getters: {
    getVehicleById: (state) => (id) => {
      return state.vehicles.find(post => post.id === id)
    }
  }
})

export default store