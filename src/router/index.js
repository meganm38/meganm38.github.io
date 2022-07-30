import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import CoursesView from '../views/CoursesView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },
  {
    path: '/courses',
    name: 'Courses',
    component: CoursesView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
