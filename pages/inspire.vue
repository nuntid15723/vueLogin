<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <img :src="photoUrl" height="250" />
        <blockquote class="blockquote">
          <small>
            <em
              >&mdash;Name :{{ name }}<br />
              Email : {{ email }}<br
            /></em>
          </small>
          <v-btn @click="logout" class="mr-4" color="error">Logout</v-btn>
        </blockquote>
      </v-col>
    </v-row>
  </div>
</template>
<script>

import { auth } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      name: '',
      email: '',
      photoUrl: '',
    }
  },
  // created(){
  //   this.getData()
  // },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        this.name = user.displayName
        this.email = user.email
        this.photoUrl = user.photoURL
      } else {
        this.$router.replace('/login')
      }
    })
  },
  methods: {
     logout() {
      auth
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log('Sign-out successful')
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
  
}
</script>

