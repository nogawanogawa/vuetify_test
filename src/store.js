import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: [
            { stage: { title: '下ごしらえ', detail: '鶏肉、じゃがいも、玉ねぎ、にんじんは一口大に切る。' } },
            { stage: { title: '加熱', detail: '厚手の鍋にサラダ油を熱し、(1)の鶏肉、じゃがいも、玉ねぎ、にんじんをよく炒める。' } },
            { stage: { title: '煮込', detail: '水を加え、沸騰したらあくを取り、弱火～中火で材料が柔らかくなるまで約15分煮込む。' } },
            { stage: { title: '投入', detail: 'いったん火を止め、ルウを割り入れて溶かし、再び弱火でとろみがつくまで約10分煮込む。' } },
            { stage: { title: '実食', detail: '冷めないうちに食す' } },
            { stage: { title: '洗い物', detail: 'こびりつかないうちにさっさと洗う' } }
        ],
    },
})

export default store