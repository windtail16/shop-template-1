<template>
  <div>
    <b-container>
      <h1>{{ title }}</h1>
      <h4>아이디</h4>
      <input type="text" v-model="email"/>
      <h4>패스워드</h4>
      <input type="password" v-model="password"/>
      <div><button @click="signIn()">로그인</button></div>
      
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signin',
  data () {
    return {
      title: 'Sign in',
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        
        console.log(user)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

      });
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
