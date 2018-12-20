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
                        <b-btn variant="outline-secondary"><i class="fas fa-angle-up"></i></b-btn>
                    </b-input-group-prepend>
                    <b-form-input type="number" min="0.00" v-model="quantity"></b-form-input>
                    <b-input-group-append>
                        <b-btn variant="outline-secondary"><i class="fas fa-angle-down"></i></b-btn>
                    </b-input-group-append>
                </b-input-group>
                <b-button>구매하기</b-button>
                <b-button>장바구니에 담기</b-button>
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
export default {
  name: 'Detail',
  data () {
    return {
        quantity:'0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
