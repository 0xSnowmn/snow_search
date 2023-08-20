const routes = [
    {
      path: '/',
      name: 'home',
      component: function () {
        return import(/* webpackChunkName: "subjects" */ '../views/subjects.vue')
        //return import(/* webpackChunkName: "home" */ '../views/home.vue')
      }
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: function () {
        return import(/* webpackChunkName: "subjects" */ '../views/subjects.vue')
      }
    },
    {
      path: '/records',
      name: 'records',
      component: function () {
        return import(/* webpackChunkName: "records" */ '../views/records.vue')
      }
    },
    {
      path: '/papers',
      name: 'papers',
      component: function () {
        return import(/* webpackChunkName: "papers" */ '../views/papers.vue')
      }
    }
]

export default routes