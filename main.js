import Vue from 'vue'
import App from './App'
import Global from './global.js'

Vue.config.productionTip = false

Vue.prototype.Global = Global

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
