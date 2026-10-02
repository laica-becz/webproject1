import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import BlogPage from '@/components/BlogPage.vue'
import GalleryPage from '@/components/GalleryPage.vue'
import AboutPage from '@/components/AboutPage.vue'
import ContactPage from '@/components/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/BlogPage',
      name: 'BlogPage',
      component: BlogPage,
    },
    {
      path: '/GalleryPage',
      name: 'GalleryPage',
      component: GalleryPage,
    },
    {
      path: '/AboutPage',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/ContactPage',
      name: 'ContactPage',
      component: ContactPage,
    },
  ],
})

export default router
