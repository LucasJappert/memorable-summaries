import { createRouter, createWebHistory } from 'vue-router'
import { isKnownBookSlug } from '../books/catalog'
import LibraryView from '../views/LibraryView.vue'
import BookView from '../views/BookView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'library', component: LibraryView },
    {
      path: '/libro/:slug',
      name: 'book',
      component: BookView,
      props: true,
      beforeEnter: (to) => {
        if (!isKnownBookSlug(String(to.params.slug))) return '/'
      },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 0 }
    return { top: 0 }
  },
})
