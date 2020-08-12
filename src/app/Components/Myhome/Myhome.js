import React from 'react';
import './Myhome.less';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Calculate from '../../Components/Calculate/Calculate';
import Count from '../../Components/Count/Count';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const Myhome = () => {
  return (<div className="Myhome">
    <Router>
    <div className='select'>
      <img src={require('../../../images/hero-image.png')} className='hero'/>

      <div className='choice'>
      <ul>
        <li>
        <img src={require('../../../images/timer.png')} style={{width:'150px', height:'150px'}}/>
        <NavLink to='/Calculete' className='link'>计算器</NavLink>
        </li>
        <li>
        <img src={require('../../../images/calculator.png')} style={{width:'150px', height:'150px'}}/>
        <NavLink to='/Count' className='link'>倒计时器</NavLink>
        </li>
      </ul>
      </div>
    </div>
    <Switch>
            <Route path='/Calculete' component={Calculate}  />
            <Route path='/Count' component={Count}  />
    </Switch>
    </Router>
    

  </div>);
};

export default Myhome;

