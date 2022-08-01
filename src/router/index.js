import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import CoursesView from "../views/CoursesView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContactView from "../views/ContactView.vue";
import CourseDetails from "../views/CourseDetails.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: AboutView,
	},
	{
		path: "/courses",
		name: "Courses",
		component: CoursesView,
	},
	{
		path: "/projects",
		name: "Projects",
		component: ProjectsView,
	},
	{
		path: "/contact",
		name: "Contact",
		component: ContactView,
	},
	{
		path: "/courses/:name",
		name: "CourseDetails",
		component: CourseDetails,
		props: true
	},
	{
		path: "/:catchAll(.*)",
		component: AboutView,
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
