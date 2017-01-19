import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './components/App.vue'

let app = new Vue({
  // provide the store using the "store" option.
  // this will inject the store instance to all child components 
  // and will be available on them as this.$store
  name: "app",
  store,
  el: '#app',
  // data: {
  //   greet: 'Hello Vue!',
  // },
  // Render overwrites the template syntax of  {{greet}} on index.html
  render: h => h(App),
});