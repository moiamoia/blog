import React,{Component} from "react"
import { StaticRouter,Router, Route, Link,Switch } from "react-router-dom"
import { BackTop } from 'antd'

import Home from './Home'
import Detail from './Detail'
import Login from './Login'
import Drawer from '../Component/Drawer'

import {observable,action} from 'mobx';
import {observer, Provider} from "mobx-react"

class Store{
    @observable title

    @action _change = (name,value)=>{
        this.title = value
    }
}

const nstore = new Store()

@observer
class App extends Component{
    constructor(props){
        super(props)
        let path = props.path
        if(typeof location === 'object'){
            path = location.pathname
        }
        this.path = path
    }

    render(){
        const {path} = this

        const context = {}

        return <Provider store={nstore}>
            <object>
                <StaticRouter location={path}
                key='router'
                context={context}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/detail/:id" component={Detail} />
                        </Switch>
                        </div>
                 </StaticRouter>
                 <BackTop/>
                 <Drawer/>
            </object>
        </Provider>
    }
}

export default App
