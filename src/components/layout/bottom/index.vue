<template>
  <div>
    <footer>
      <b-container>
        <ul class="list-inline">
          <li class="list-inline-item">상호: {{ company }}</li>
          <li class="list-inline-item">대표: {{ ceo }}</li>
          <li class="list-inline-item">개인정보관리책임자: {{ pi_manager }}</li>
          <li class="list-inline-item">전화: {{ phone }}</li>
          <li class="list-inline-item">이메일: {{ email }}</li>
        </ul>
        <ul class="list-inline">
          <li class="list-inline-item">주소: {{ address }}</li>
          <li class="list-inline-item">사업자등록번호: {{ lecense_no }}</li>
          <li class="list-inline-item">통신판매: {{ permission_no }}</li>
          <li class="list-inline-item">호스팅제공자: {{ hosting }}</li>
        </ul>
        <ul class="list-inline">
          <li class="list-inline-item"><router-link to="/policy">이용약관</router-link></li>
          <li class="list-inline-item"><router-link to="/privacy">개인정보처리방침</router-link></li>
        </ul>
        <p>
          {{ copyright }}
        </p>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
      company: '회사명',
      ceo: '홍길동',
      pi_manager: '홍길동',
      phone: '00-000-0000',
      email: 'test@domain.com',
      address: '서울특별시 영등포구 여의도동 10',
      lecense_no: '000-00-00000',
      permission_no: '제 2016-서울강남-00000호',
      hosting: 'abc호스팅',
      copyright: 'Copyright © Mycompany All rights reserved.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
