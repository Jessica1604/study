import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <table 
            className="table"
            style={{display: this.props.data.length? 'table': 'none'}}
            >
                <thead>
                    <tr>
                        <th className="checkAll">
                            <input 
                            type="checkbox" 
                            id="checkAll"
                            checked= {this.props.isCheckAll()}
                            onChange={(e) => {this.props.checkAll(e.target.checked)}}
                            />
                            <label htmlFor='checkAll'>全选</label>
                        </th>
                        <th className="long">歌曲</th>
                        <th className="long">歌手</th>
                        <th className="save">收藏</th>
                        <th className="delete">删除</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item,index)=> {
                            return( 
                                <tr key={index}>
                                    <td>
                                    <input 
                                    type="checkbox" 
                                    checked={item.selected}
                                    onChange = {(e) => {
                                        this.props.singleCheck(e.target.checked, index, 'selected')

                                    }}
                                    />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.singer}</td>
                                    <td><input 
                                    type="checkbox" 
                                    checked={item.save}
                                    onChange = {(e) => {
                                        this.props.singleCheck(e.target.checked, index, 'save')

                                    }}
                                    /></td>
                                    <td
                                     onClick={() => {this.props.delete(item, index)}}
                                    >X</td>
                                </tr>   
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}