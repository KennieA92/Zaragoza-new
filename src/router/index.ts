import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes: Array<any> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/trips',
        name: 'Trips',
        component: () => import('../views/TripsView.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/gallery',
        name: 'TripGallery',
        component: () => import('../views/TripGalleryView.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/AdminView.vue'),
        meta: {
            requiresAuth: true
        }
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }
        return { x: 0, y: 0 };  // Go to the top of the page if no hash
    },
});

/**
 * Returns a promise that resolves to the current user or null if no user is logged in.
 * @returns Promise that resolves to the current user or null if no user is logged in.
 */
const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeEventListener = onAuthStateChanged(
            auth,
            (user) => {
                removeEventListener();
                resolve(user);
            },
            reject
        )
    });
}
/**
 * Checks whether the user is logged in or not and whether the targeted route requires authentication.
 */
router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    if (requiresAuth) {
        if (await getCurrentUser()) {
            next();
        }
        else {
            next('/');
        }
    }
    else {
        next();
    }
})



export default router