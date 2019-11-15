import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

let data =[
    {
        selected:true,
        name: '问茶',
        singer: '杨青',
        save: false
    },
    {
        selected:false,
        name: '问茶123',
        singer: '杨青123',
        save: false
    },
    {
        selected:false,
        name: '问茶456',
        singer: '杨青456',
        save: false
    },
    {
        selected:false,
        name: '问茶789',
        singer: '杨青789',
        save: false
    }
]

class App extends React.Component{
    constructor() {
        super(...arguments);
        this.state = {
            data: data
        };
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
        this.checkAll = this.checkAll.bind(this)
        this.isCheckAll = this.isCheckAll.bind(this)
        this.singleCheck = this.singleCheck.bind(this)
        this.deleteSelected = this.deleteSelected.bind(this)
    }
    add(name, singer) {
        let data = this.state.data
        let obj = {
            selected:false,
            name: name,
            singer: singer,
            save: false
        }
        data.push(obj)
        this.setState({
            data: data
        })
    }
    delete(item, index) {
        let data = this.state.data
        data.splice(index,1)
        this.setState({
            data: data
        })
    }
    isCheckAll () {
        let data = this.state.data
        let len = data.length
        let initFlag = 0
        for (var i= 0 ; i<data.length; i++){
            if(data[i].selected) {
                initFlag ++
            }
        }
        // data.map((item, index)=> {
        //     if(item.selected){
        //         initFlag ++
        //     }
        // })
        if (initFlag === len){
            return true
        } else {
            return false
        }
    }
    checkAll (check) {
        console.log(check)
        let data = this.state.data
        data.map((item, index)=> {
            item.selected = check
            return item
        })
        console.log(data)
        this.setState({
            data:data
        })
    }
    singleCheck (checked,index,flag) {
        let data = this.state.data
        data[index][flag] = checked
        this.setState({
            data: data
        })
        
    }
    selected() {
        let data = this.state.data
        let selectNum = 0
        for (var i=0; i<data.length; i++){
            if (data[i].selected){
                selectNum ++
            }
        }
        return selectNum
    }
    deleteSelected () {
        let data = this.state.data.filter((item, index)=> {
            return !item.selected
        })
        // console.log(data)
        // let lastData = data.filter((item, index)=> {
        //      return !item.selected
        // })
        // console.log(lastData)
        console.log(data)
        this.setState({
            data
        })
    }
    render() {
        return (<div className='listWrap'>
                 <Header add={this.add}></Header>
                 <Main 
                 data={data} 
                 delete={this.delete}
                 isCheckAll= {this.isCheckAll}
                 checkAll = {this.checkAll}
                 singleCheck = {this.singleCheck}
                 ></Main>
                 <Footer
                 data={data}
                 length={data.length}
                 selectNum = {this.selected()}
                 deleteSelected={this.deleteSelected}
                 ></Footer>
                </div>)
    }
}

ReactDOM.render(
    ( <App>
    </App>), 
    document.getElementById('root')
);