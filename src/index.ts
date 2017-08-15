import * as Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    currencies: {
      [key: string]: string
    }
  }
}

new Vue({
  el: "#app",
  template: `<div>
    <button v-on:click="getCurrency">Get Currency</button>
    <div v-for="(currency, key) in currencies" key="key">
      <div style="display:flex;">
        <div>{{key}}</div>
        <div>{{currency}}</div>
      </div>
    </div>
  </div>`,
  data() {
    return {
      currencies: {}
    }
  },
  methods: {
    getCurrency() {
      fetch('http://localhost:3000/currencyLayer', {
        'method': 'get'
      }).then(function(response) {
        return response.json()
      }).then((ret) => {
        console.log(ret.quotes)
        Vue.set(this, 'currencies', ret.quotes);
      })
      .catch(function(error) {
        console.error(error);
      })
    }
  }
})