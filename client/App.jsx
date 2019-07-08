import React from 'react'
import { hot } from 'react-hot-loader/root'
import Header from './component/header'
import ArticleList from './component/articleList';
class App extends React.PureComponent {
    render () {
        return <div>
            <Header />
            <ArticleList />
        </div>
    }
}

export default hot(App)