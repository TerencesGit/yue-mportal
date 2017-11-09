import Home from '@/pages/home'
import Container from '@/pages/base/container'
import Login from '@/pages/base/login'
import Register from '@/pages/base/register'
import RegisterSuccess from '@/pages/base/register_success'
import DetailContainer from '@/pages/detail/container'
import Photography from '@/pages/detail/photography'
import PhotoNative from '@/pages/detail/photo_native'
import PhotoOversea from '@/pages/detail/photo_oversea'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    component: Container,
    children: [
    	{
    		path: 'login',
        name: '登录',
        component: Login,  
    	},
      {
        path: 'register',
        name: '注册',
        component: Register,
      },
      {
        path: 'register_success',
        name: '注册成功',
        component: RegisterSuccess,
      }
    ]
  },
  {
    path: '/detail',
    name: '专题页',
    component: DetailContainer,
    children: [
      {
        path: 'photography',
        name: '旅拍展示',
        component: Photography,
      },
      {
        path: 'native',
        name: '国内旅拍',
        component: PhotoNative,
      },
      {
        path: 'oversea',
        name: '海外旅拍',
        component: PhotoOversea,
      },
    ]
  }
]
export default routes;
