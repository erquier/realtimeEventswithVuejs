<template>
  <div class="form-inline">
    <h3>Sign In</h3>
    <div class="form-grop">
      <input
      id="email"
      type="text"
      placeholder="email"
      class="form-control"
      v-model="email"
      />
         <input
         id="password"
      type="password"
      placeholder="password"
      class="form-control"
      v-model="password"
      />
      <br><br>
      <button class="btn btn-primary" @click="signIn">Sign in</button>
    </div>
    <br>
    <router-link to="/signup" >Not a user? Sign up</router-link>
    <p>{{error.message}}</p>
    <br>
  </div>
</template>

<script>
import {firebase, firebaseApp} from '../firebaseApp'
  export default{
    data(){
      return{
        email:'',
        password:'',
        error:{
          message:''
        }
      }
    },
          methods: {
        signIn(){
          firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(error=>{
            this.error = error
          })
        }
      }
  }
</script>
