import React from 'react';
import './home.less';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Calculate from './Components/Calculate/Calculate';
import Count from './Components/Count/Count';
import Myhome from './Components/Myhome/Myhome';


const Home = () => {
  return (<div className="home">
    <Router>
    <ul>
        <li>
          <NavLink to='/' className='link' style={{color:'white'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/Calculete' className='link' style={{color:'white'}}>在线计算器</NavLink>
        </li>
        <li>
          <NavLink to='/Count' className='link'style={{color:'white'}}>在线倒计时器</NavLink>
        </li>
    </ul>
    <Switch>            
            <Route exact path='/' component={Myhome}  />
            <Route path='/Calculete' component={Calculate}  />
            <Route path='/Count' component={Count}  />
    </Switch>
    </Router>
  </div>);
};

export default Home;

