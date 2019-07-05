import React from 'react'
import { hot } from 'react-hot-loader/root'
import Header from './component/header'

class App extends React.PureComponent {
    render () {
        return <div>
            <Header />
        </div>
    }
}

export default hot(App)