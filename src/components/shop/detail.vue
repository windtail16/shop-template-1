<template>
  <div>
    <!-- GOODS TOP//S -->
    <b-container>
      <b-row>
          <b-col cols="12" md="6">
              <b-img src="https://picsum.photos/600/400/?image=41" fluid alt="Responsive image" />
          </b-col>
          <b-col cols="12" md="6">
            <!-- ORDER UNIT//S -->
            <div>
                <h3>
                타이틀
                </h3>
                <p>
                상품설명
                </p>
                <h5>
                33,000원
                </h5>
                <b-input-group class="mb-2">
                    <b-input-group-prepend>
                        <b-btn variant="outline-secondary" @click="decrementCounter"><i class="fas fa-angle-down"></i></b-btn>
                    </b-input-group-prepend>
                    <b-input type="text" v-model="quantity" readonly></b-input>
                    <b-input-group-append>
                        <b-btn variant="outline-secondary" @click="incrementCounter"><i class="fas fa-angle-up"></i></b-btn>
                    </b-input-group-append>
                </b-input-group>
                <p>최대구매수량: {{max}}</p>
                <b-button v-on:click="buy">구매하기</b-button>
                <b-button v-on:click="inCart">장바구니에 담기</b-button>
            </div>
            <!-- ORDER UNIT//E -->
          </b-col>
      </b-row>
    </b-container>
    <!-- GOODS TOP//S -->
    <b-container>
        detail info
    </b-container>
  </div>
</template>

<script>
import Goods from "../../common/goods.json"

export default {
  name: 'Detail',
  data () {
    return {
      quantity:'0',
      max:'10',
      min:'0',
      goods: []
    }
  },
  created() {
    let url = "../../common/goods.json"
    this.$http.get(url).then((result) => {
      console.log(result);
    }).catch((err) => {
      
    })
  },
  watch: {
    // 라우터 객체를 감시하고 있다가 fetchData() 함수를 호출한다
    '$route': 'fetchData'
  },
  
  methods: {
    buy: function() {
      alert('구매');
    },
    inCart: function() {
      alert('장바구니에 담았습니다.');
    },
    incrementCounter() {
      if (this.quantity >= this.max) {
        alert('최대수량초과')
      } else {
        this.quantity++;
      }
    },
    decrementCounter() {
      if (this.quantity > this.min) {
        this.quantity--;
      } 
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
