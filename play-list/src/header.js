import React from 'react';

export default class Header extends React.Component{
    constructor(){
        super(...arguments)
        this.state = {
            name: '',
            singer: ''
        }
    }
    render() {
        return (
            <div className="header">
            <h3>播放列表</h3>
            <div className='btnList'>
                <input 
                 className='song' 
                 placeholder='请输入歌曲' 
                 type="text"
                 value={this.state.name}
                 onChange={(e) => {this.setState({name:e.target.value})}}
                 />
                <input 
                className='singer' 
                placeholder='请输入歌手' 
                type="text"
                value={this.state.singer}
                onChange={(e) => {this.setState({singer:e.target.value})}}
                />
                <input 
                type="button" 
                value="添加音乐"
                onClick = {() =>{
                    if(this.state.name && this.state.singer){
                        this.props.add(this.state.name, this.state.singer)
                        this.setState({
                            name: '',
                            singer: ''
                        })
                    }
                }}
                />
            </div>
        </div>
        )
    }
}