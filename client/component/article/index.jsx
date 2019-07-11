import React from "react";
import { Breadcrumb, Row, Col } from "antd";
import style from "./index.css";

export default class extends React.PureComponent {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className={style.article}>
          <Row>
            <Col span={24}>
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>分类</Breadcrumb.Item>
                <Breadcrumb.Item>正文</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <h1>This is a artcle title and its right is h1</h1>
            <div className={}></div>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
