import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/home'
import Personal from '../pages/Personal/index'

const routes = [
  {
    path: '/home',
    components: Home,
    exact: true,
    name: '首页'
  },
  {
    path: '/personal',
    components: Personal,
    name: '个人中心'
  },
  {
    path: '/video',
    components: Personal,
    name: '直播'
  },
  {
    path: '/friends',
    components: Personal,
    name: '朋友'
  },
  {
    path: '/personalFM',
    components: Personal,
    name: '私人FM'
  },
  {
    path: '/introduce',
    components: Personal,
    name: '推荐'
  },
]

const routeConfig = () => {
  return(
    <Switch>
      {
        routes.map( (item,index) => {
          return(
            <Route path={item.path} component={item.components} exact={item.exact} key={index} />
          )
        })
      }
    </Switch>
  )
}
  
export default routeConfig