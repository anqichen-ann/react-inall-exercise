import React from 'react';
import './Calculate.less';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Myhome from '../../Components/Myhome/Myhome';

class Calculate extends React.Component {
constructor(props) {
    super(props);
    this.state={
        value: 0,
        show: '',
        sum: 0
    }

}

handleInput = event => {
    this.setState({
        show: this.state.show + event.target.value
    })
}

handleClear = event => {
    this.setState({
        value: 0,
        show: '0'
    })
}

handleCount = event => {
    // this.setState({
    //     value: '0'
    // })
}

    render() {
        return <div className='Calculate'>
            <Router>
            <h1>在线计算器</h1>
            <div className='content'>
                <input type="text" id="box" style={{textAlign:'right'}} readOnly={true} value={this.state.show} />
                    <div className="funct">
                        <input type="reset" id="res" value="Clear" onClick={this.handleClear}/>
                        <input type="button" id="reduce" value="-" onClick={this.handleInput}/>                                
                        <input type="button" id="ride" value="*" onClick={this.handleInput}/>

                        <input type="button" id="add" value="+" onClick={this.handleInput}/>
                        <input type="button" id="sum" value="=" onClick={this.handleCount}/>    
                    
                        <div className="numb">
                            <input type="button" id="one" value="1" onClick={this.handleInput}/>
                            <input type="button" id="two" value="2" onClick={this.handleInput}/>
                            <input type="button" id="three" value="3" onClick={this.handleInput}/>
                            <input type="button" id="four" value="4" onClick={this.handleInput}/>
                            <input type="button" id="five" value="5" onClick={this.handleInput}/>
                            <input type="button" id="six" value="6" onClick={this.handleInput}/>
                            <input type="button" id="seven" value="7" onClick={this.handleInput}/>
                            <input type="button" id="eight" value="8" onClick={this.handleInput}/>
                            <input type="button" id="nine" value="9" onClick={this.handleInput}/>
                            <input type="button" id="zero" value="0" onClick={this.handleInput}/>
                        </div>                        
                    </div>
            </div>
            
               <h3>
            <NavLink to='/Home' className='link'style={{color:'white'}}>回到主页</NavLink>
            </h3>
            <Route path='/Home' component={Myhome}  /> 
            </Router>
            
        </div>
    }
}

export default Calculate;