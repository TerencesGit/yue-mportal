import Home from '@/pages/home'
import Container from '@/pages/base/container'
import Login from '@/pages/base/login'
import Register from '@/pages/base/register'
import RegisterSuccess from '@/pages/base/register_success'
import DetailContainer from '@/pages/detail/container'
import Photography from '@/pages/detail/photography'
import PhotoNative from '@/pages/detail/photo_native'
import PhotoOversea from '@/pages/detail/photo_oversea'
import Tourism from '@/pages/detail/tourism'
import Finance from '@/pages/detail/finance'
import System from '@/pages/detail/system'

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
        name: '登录页',
        component: Login,  
    	},
      {
        path: 'register',
        name: '注册页',
        component: Register,
      },
      {
        path: 'register_success',
        name: '注册成功页',
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
      {
        path: 'tourism',
        name: '旅游服务',
        component: Tourism,
      },
      {
        path: 'finance',
        name: '金融服务',
        component: Finance,
      },
      {
        path: 'system',
        name: '系统服务',
        component: System,
      },
    ]
  }
]
export default routes;
