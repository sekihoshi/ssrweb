import React from 'react'
import {Menu, Icon} from 'antd'
import Style from './index.css'
const {Item} = Menu;

class Header extends React.PureComponent {
    dom = null
    state = {
        needFixed: false,
    }


    render() {
        const IconFont = Icon.createFromIconfontCN({scriptUrl: '//at.alicdn.com/t/font_1278300_5oft1on18ok.js'});
        return <React.Fragment>
            <div className={Style.headerMenu + ` ${this.state.needFixed ? Style.fixed: ''}`} ref={(dom)=>{this.dom = dom}}>
           
                <Menu mode="horizontal" className={Style.headerMenuMenu}>
                    <Item>
                        <Icon type="home" />
                        home
                    </Item>

                    <Item>
                        <Icon type="fire" />
                        news
                    </Item>

                    <Item>
                        <IconFont type="icon-game-----" />
                        videoGame
                    </Item>

                    <Item>
                        <IconFont type="icon-phone" />
                        phoneGame
                    </Item>

                    <Item>
                        <IconFont type="icon-appstore-fill" />
                        AppStore
                    </Item>

                    <Item>
                        <IconFont type="icon-news" />
                        AppNews
                    </Item>

                </Menu>
            </div>

        </React.Fragment>
    }
}

export default Header