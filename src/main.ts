import { createApp } from 'vue'
import App from './App.vue'
import Main from './components/Main.vue'
import Soon from './components/Soon.vue'
import VueCookies from 'vue-cookies'
import Contacts from './components/Contacts.vue'
import Film from './components/Film.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Redir from './components/Redir.vue'
import Sales from './components/Sales.vue'
import Sale from './components/Sale.vue'

const router = createRouter({
	routes: [
		{
			path: '/',
			name: 'main',
			component: Main,
			meta: {
				header: 1,
			},
		},
		{
			path: '/soon',
			name: 'soon',
			component: Soon,
			meta: {
				header: 2,
			},
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: Contacts,
			meta: {
				header: 3,
			},
		},
		{
			path: '/sales',
			name: 'sales',
			component: Sales,
			meta: {
				header: 4,
			},
		},

		{
			path: '/sales/:id(\\d+)',
			component: Sale,
			name: 'sale',
			meta: {
				header: 0,
			},
		},

		{
			path: '/film/:id(\\d+)',
			component: Film,
			name: 'film',
			meta: {
				header: 0,
			},
		},

		{
			path: '/redir/:id',
			component: Redir,
			name: 'redir',
			meta: {
				header: 0,
			},
		},
	],
	history: createWebHistory(),
})

createApp(App)
	.use(VueCookies, {
		expires: '1d',
	})
	.use(router)
	.mount('#app')
