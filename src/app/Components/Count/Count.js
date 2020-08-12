import React from 'react';
import './Count.less';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time: 0,
            sum: 0
        }
    
    }

    render() {
        return <div className='Count'>
            <h1>在线倒计时器</h1>
            <div>
                <label>设置时间</label>
                <input type='text' />
            </div>
            <div className='btn'>
                <button>Start</button>
            </div>
            <div className='show'>
                <input type='text' readOnly={true} value={this.state.time}></input>
            </div>
            
        </div>
    }
}

export default Count;