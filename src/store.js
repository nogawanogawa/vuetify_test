import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


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
        items: [
            {
                title: "カテゴリ",
                content: "Category"
            },
            {
                title: "名前",
                content: "なまえ"
            },
            {
                title: "大きさ",
                content: "おおきさ"
            }
        ],
        res: [],
        flask_res: {
            headers: [
                {
                    text: "Dessert (50g serving)",
                    align: "left",
                    sortable: false,
                    value: "name"
                },
                { text: "Calories", value: "calories" },
                { text: "Fat (g)", value: "fat" },
                { text: "Carbs (g)", value: "carbs" },
                { text: "Protein (g)", value: "protein" },
                { text: "Iron (g)", value: "sample" }
            ],
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: "1%"
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: "1%"
                },
                {
                    name: "Eclair",
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: "7%"
                },
                {
                    name: "Cupcake",
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: "8%"
                },
                {
                    name: "Gingerbread",
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: "16%"
                },
                {
                    name: "Jelly bean",
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: "0%"
                },
                {
                    name: "Lollipop",
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: "2%"
                },
                {
                    name: "Honeycomb",
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: "45%"
                },
                {
                    name: "Donut",
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: "22%"
                },
                {
                    name: "KitKat",
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: "6%"
                }
            ]
        }
    },
    mutations: {
        search(state, newElements) {
            state.elements.nodes = newElements.nodes
            state.elements.edges = newElements.edges
            state.word = "hoge"
        },
        coindesk(state, info) {
            state.res = info.data
        },
        flask(state, info) {
            state.flask_res = info.data

        },
        update(state, result) {
            state.word = result
        }
    },
    getters: {
        time: state => state.res.time,
        updated: getters => getters.time.updated,
        updatedISO: getters => getters.time.updatedISO,
        updateduk: getters => getters.time.updateduk,
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
        },
        coindeskAction(ctx) {
            axios
                .get("https://api.coindesk.com/v1/bpi/currentprice.json")
                .then(response => ctx.commit('coindesk', response));
        },
        flaskAction(ctx) {
            axios
                .get("http://localhost:5000/")
                .then(response => ctx.commit('flask', response));
        }
    }
})

export default store