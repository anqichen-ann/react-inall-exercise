import React from 'react';
import './Calculate.less';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Myhome from '../../Components/Myhome/Myhome';

class Calculate extends React.Component {
constructor(props) {
    super(props);
    this.state={
        show: '',
        sum: 0,
        operation: '',
        operationDisable: false
    }

}

handleInput = event => {
    if (parseInt(event.target.value) ) {
        this.setState({
            operationDisable: true,
        })

    } else {
        this.setState({
            operation: event.target.value,
            operationDisable: false
        })
    };
    this.setState({
        show: this.state.show + event.target.value,
    })
    
}

handleClear = event => {
    this.setState({
        show: ''
    })
}

handleCount = event => {
    let str = this.state.show.split(this.state.operation);
    let value1 = parseInt(str[0]);
    let value2 = parseInt(str[1]);
    let result;
    switch(this.state.operation){
        case '+': result = value1 + value2;break;
        case '-': result = value1 - value2;break;
        case '*': result = value1 * value2;
    }
    this.setState({
        show: result
    })
    
}

    render() {
        return <div className='Calculate'>
            <h1>在线计算器</h1>
            <div className='content'>
                <input type="text" id="box" style={{textAlign:'right'}} readOnly={true} value={this.state.show} />
                    <div className="btn">
                        <input type="button" id="add" value="+" disabled={!this.state.operationDisable} onClick={this.handleInput}/>
                        <input type="button" id="reduce" value="-" disabled={!this.state.operationDisable} onClick={this.handleInput}/>                                
                        <input type="button" id="multi" value="*" disabled={!this.state.operationDisable} onClick={this.handleInput}/>

                    
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
                        <input type="reset" id="clear" value="Clear" onClick={this.handleClear}/>
                        <input type="button" id="sum" value="=" onClick={this.handleCount}/>    

                    </div>
            </div>
            
               <h3>
            <NavLink to='/' className='link' style={{color:'black'}}>回到主页</NavLink>
            </h3>
            
        </div>
    }
}

export default Calculate;