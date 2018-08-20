<template>
  <div class="form-inline">
    <h3>Sign Up</h3>
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
      <button class="btn btn-primary" @click="signUp">Sign up</button>
    </div>
    <br>
    <router-link to="/signin">Already a user? Sing in</router-link>
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
        signUp(){
          firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(error=>{
            this.error = error
          })
        }
      }
  }
</script>
