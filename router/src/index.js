import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Router, BrowserRouter} from 'react-router-dom'

class App extends React.Component{
    render() {
        return (<div className='wrap'>
                  <h3>首页</h3>
                  <div>
                      <a href="javascript;">列表页</a>
                      <span>|</span>
                      <a href="javascript;">收藏页</a>
                  </div>
               </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
