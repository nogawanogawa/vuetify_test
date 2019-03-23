import Search from "@/components/pages/SearchPage.vue"
import Taskboard from "@/components/pages/Taskboard.vue"

export default [{
    path: '/',
    redirect: 'Search'
}, {
    path: '/Search',
    component: Search
}, {
    path: '/Taskboard',
    component: Taskboard
}, {
    path: '*',
    redirect: '/'
}]
