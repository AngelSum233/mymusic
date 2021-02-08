import './App.scss';
import Siderbar from './components/Siderbar/Siderbar'
import routeConfig from './route/index'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="home">
        <div className="home-top">
          <Header />
        </div>
        <div className="home-content">
          <div className="home-left">
            <Siderbar className="home-left-sider" />
          </div>
          <div className="home-right">
            {/* 路由渲染的页面 */}
            {routeConfig()}
          </div>
        </div>
        <div className="home-footer"></div>
      </div>
    </Router>
  );
}

export default App
