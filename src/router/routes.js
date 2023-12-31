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
      path: '/subjects/:id',
      name: 'subjects',
      component: function () {
        return import(/* webpackChunkName: "home" */ '../views/home.vue')
      }
    },
    {
      path: '/subjects/:id/records',
      name: 'records',
      component: function () {
        return import(/* webpackChunkName: "records" */ '../views/records.vue')
      }
    },
    {
      path: '/subjects/:id/papers',
      name: 'papers',
      component: function () {
        return import(/* webpackChunkName: "papers" */ '../views/papers.vue')
      }
    }
]

export default routes