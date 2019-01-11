<template>
  <div>
    <b-container>
      <h1>{{ title }}</h1>
      <h4>아이디</h4>
      <input type="text" v-model="email"/>
      <h4>패스워드</h4>
      <input type="password" v-model="password"/>
      <div><button @click="SignUp()">가입하기</button></div>
      <router-link to="/signin">로그인</router-link>
    </b-container>
    
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signup',
  data () {
    return {
      title: 'Sign up',
      email: '',
      password: ''
    }
  },
  methods: {
    SignUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        alert("회원가입이 완료 되었습니다.\n이메일 주소로 로그인 해주세요")
        window.location("/signin/")
        //console.log(user)
      })
      .catch((error) => {
        let errorCode = error.code;
        var errorMessage = error.message;
        /*
        if (errorCode == "auth/email-already-in-use"){
          var errorMessage = "이미 가입된 이메일 입니다. 다른 이메일을 사용해 주세요." 
        }
        */
        alert(errorMessage)
      })
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
