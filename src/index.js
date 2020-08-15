import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Row, Col, Avatar, Descriptions, Card, Divider, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const experienceData = [
  {
    title: '產學合作案 - 峽谷即時遊憩資訊與環境品質監測智慧服務運用', content: "撰寫 Android app、Java 串接 Microsoft Face API 辨識人臉"
  },

];

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Skill</Menu.Item>
        <Menu.Item key="2">Portfolio</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '30px 10%', backgroundColor: "#000000"}}>
      <div className="site-layout-content" style={{backgroundColor:"#444444"}}>

      <Row gutter={24} align="middle">
        <Col span={8}>
          <Avatar size={256} icon={<UserOutlined />} />
        </Col>
        <Col span={16}>

        </Col>
      </Row>
      <Divider orientation="left"  style={{ marginTop: '30px', width:"100%", color:"#FFFFFF", fontSize:"32px", lineHeight:"32px" }}>Experience</Divider>
      <List
        itemLayout="horizontal"
		dataSource={experienceData}
		size="large"
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              	title={item.title}
              	description={item.content}
            />
          </List.Item>
        )}
      />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center', backgroundColor: "#222222", color:"#DDDDDD" }}>©2018 Created by bamdart</Footer>
  </Layout>,
  document.getElementById('container'),
);