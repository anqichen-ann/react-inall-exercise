import React from 'react';
import './Count.less';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            showTime: 'Start',
            second: 0,
            btn: false
        }
    
    }

    handleInput = event => {
        this.setState({
            second: event.target.value
        })
    }

    handleClick = event => {
        this.setState({
            btn: true
        });
        let time = this.state.second;
        let timer = setInterval(() => {
            this.setState({
                showTime: time + ' Second'
            })
            if (time ===0) {
                clearInterval(timer);
                this.setState({
                    btn: false,
                    showTime: 'End'
                })
            }

            time--;

        }, 1000)
    }

    render() {
        return <div className='Count'>
            <h1>在线倒计时器</h1>
            <div>
                <label id='set'>设置时间</label>
                <input type='text' id='timeInput' onChange={this.handleInput}/>
            </div>
            <div className='btn'>
                <button onClick={this.handleClick} disabled={this.state.btn}>Start</button>
            </div>
            <div className='show'>
                <input type='text' readOnly={true} value={this.state.showTime}></input>
            </div>

            <h3>
            <NavLink to='/' className='link' style={{color:'black'}}>回到主页</NavLink>
            </h3>
            
        </div>
    }
}

export default Count;