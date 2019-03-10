import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    items: [
      { no: 1, name: 'キャベツ', categoryNo: '1' },
      { no: 2, name: 'ステーキ', categoryNo: '2' },
      { no: 3, name: 'リンゴ', categoryNo: '3' },
      { no: 4, name: '冷蔵庫', categoryNo: '4' }
    ],
    items2: [
      { no: 5, name: 'きゅうり', categoryNo: '1' },
      { no: 6, name: 'ハンバーグ', categoryNo: '2' },
      { no: 7, name: 'バナナ', categoryNo: '3' },
      { no: 8, name: 'PS4', categoryNo: '4' }
    ]
  },
}).$mount('#app')
