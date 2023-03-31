import {
  createRouter,
  createWebHistory
} from 'vue-router'
import FriendCard from '../views/FriendCard.vue'

const routes = [{
    path: '/',
    name: 'friendcard',
    component: FriendCard
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router