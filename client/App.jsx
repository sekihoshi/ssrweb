import React from 'react'
import { hot } from 'react-hot-loader/root'
import {BackTop} from 'antd'
import Header from './component/header'
import ArticleList from './component/articleList';
class App extends React.PureComponent {
    render () {
        return <div style={{backgroundColor:'#f4f5f5'}}>
            <Header />
            <ArticleList />
            <BackTop visibilityHeight={300}/>
        </div>
    }
}

export default hot(App)