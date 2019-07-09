import React from 'react'
import {Menu, Icon} from 'antd'
import Style from './index.css'
const {Item} = Menu;

class Header extends React.PureComponent {
    dom = null
    state = {
        needFixed: false,
    }

    componentDidMount() {
        const nextDom = this.dom.nextElementSibling;
        nextDom.style.marginTop = 48 + 'px'
        window.onscroll = () => {
            const fixedTop = this.dom.offsetHeight
            
            let scrollTop = Math.max(document.body.scrollTop,document.documentElement.scrollTop)
            if(scrollTop >= fixedTop ) {
                this.setState({
                    needFixed: true,
                })
                console.log(1)
                nextDom.style.marginTop = fixedTop + 'px'
            }else if(scrollTop < fixedTop) {
                this.setState({
                    needFixed: false,
                })
                nextDom.style.marginTop = 0;
            }
        }
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