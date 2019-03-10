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
        elements: {
            nodes: [
                { data: { id: 'cat', name: '猫' } },
                { data: { id: 'bird', name: '鳥' } },
                { data: { id: 'ladybug', name: 'てんとう虫' } },
                { data: { id: 'aphid', name: 'アブラムシ' } },
                { data: { id: 'rose', name: 'バラ' } },
                { data: { id: 'grasshopper', name: 'バッタ' } },
                { data: { id: 'plant', name: '植木鉢' } },
                { data: { id: 'wheat', name: '小麦' } }
            ],
            edges: [
                { data: { source: 'cat', target: 'bird' } },
                { data: { source: 'bird', target: 'ladybug' } },
                { data: { source: 'bird', target: 'grasshopper' } },
                { data: { source: 'grasshopper', target: 'plant' } },
                { data: { source: 'grasshopper', target: 'wheat' } },
                { data: { source: 'ladybug', target: 'aphid' } },
                { data: { source: 'aphid', target: 'rose' } }
            ]
        },
    },
    mutations: {
        search(state, newElements) {
            state.elements.nodes = newElements.nodes
            state.elements.edges = newElements.edges
            state.word = "hoge"
        },
        update(state, result) {
            state.word = result
        }
    },
    actions: {
        searchAction(ctx, word) {
            const neo4j = require('neo4j-driver').v1;
            const uri = "bolt://localhost";
            const user = "neo4j";
            const password = "password";
            const driver = neo4j.driver(uri, neo4j.auth.basic(user, password), { maxTransactionRetryTime: 30000 });
            const session = driver.session();

            const resultPromise = session.run(
                'MATCH (a{name: $name}) - [r] - (n) RETURN a, r, n',
                { name: word }
            );

            resultPromise.then(result => {
                session.close();
                driver.close();

                ctx.commit('search', result)
            })

        }
    }
})

export default store