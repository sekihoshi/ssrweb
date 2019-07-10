import React from 'react'
import { List, Avatar, Button, Skeleton, Icon} from 'antd';
import axios from 'axios';

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class extends React.Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res.data.results,
        list: res.data.results,
      });
    });
  }

  getData = callback => {
    axios.get(fakeDataUrl)
    .then(res => {
      callback(res)
    })
    .catch(err => {console.log(arr)})
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.data.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>加载更多</Button>
        </div>
      ) : null;

    return (
      <List
        style={{paddingTop: 48,maxWidth: 960,margin: '0 auto'}}
        loading={initLoading}
        itemLayout="vertical"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => {
          return(
          <List.Item 
            actions={[
              <IconText type="like-o" text="0" />,
              <IconText type="message" text="0" />,
            ]}
          >
            <Skeleton avatar title={true} loading={item.loading} active>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </Skeleton>
          </List.Item>
        )}}
      />
    );
  }
}