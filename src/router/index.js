import Home from '@/pages/home'
import Detail from '@/pages/detail/index'
import Photography from '@/pages/detail/photography'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    children: [
      {
        path: 'photography',
        name: 'photography',
        component: Photography,
      },
    ]
  }
]
export default routes;
