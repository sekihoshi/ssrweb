import React from 'react'
import Style from './index.css'
import { Icon } from 'antd'

export default (props) => {
   return (
        <React.Fragment>
            <div className={Style.article}>
                <div className={Style.articleTop}>
                <span>Author</span>
                <span>time</span>
                <span>keywords</span>
                </div>
                <div className={Style.articleMiddle}>
                    {'this is a Title'}
                </div>
                <div className={Style.articleBottom}>
                    <span className={Style.articleBottomTooltip}>
                       <Icon type="eye" />
                       <span className={Style.articleBottomTooltipEye}>{12}</span>
                    </span>
                </div>
            </div>
        </React.Fragment>
   )
}