import React from 'react';

export default class Footer extends React.Component{
    render() {
        let data = this.props.data
        return(
            <footer 
            className="footer"
            style = {{display:data.length ? 'block': 'none'}}
            >
                <div className="info">
                    <div className="left">共{this.props.length}首歌曲</div>
                    <div className="right">当前选中{this.props.selectNum}首歌曲</div>
                </div>
                <div>
                    <input 
                    type="button" 
                    value="删除选中歌曲" 
                    style={{display:this.props.selectNum ? 'inline-block': 'none'}}
                    onClick={() => {
                        this.props.deleteSelected()
                    }}/>
                    <input 
                    type="button" 
                    value="收藏选中歌曲"
                    style={{display: this.props.selectNum ? 'inline-block': 'none'}}
                    />
                    <input 
                    type="button" 
                    style={{display: this.props.selectNum ? 'inline-block': 'none'}}
                    value="取消收藏选中歌曲"/>
                    <input type="button" value="查看收藏清单"/>
                    <input type="button" value="查看所有清单"/>
                </div>
            </footer>
        )
    }
}