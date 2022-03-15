import {
  Layout,
  Menu,
  Avatar,
  Breadcrumb,
  Button,
  Title,
  Progress,
} from 'antd';
import { Link, Route, Routes, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { routes } from '../../routes';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SubMenu from 'antd/lib/menu/SubMenu';
import Lab from '../labs/Lab';

const { Header, Footer, Sider, Content } = Layout;

const AdminLayout = () => {
  const getRoutes = () => {
    if (routes == null) return null;
    return routes.map((x, key) => {
      return <Route path={x.path} element={<x.component />} key={key} />;
    });
  };

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='App'>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
        </Header>
        <Layout>
          <Sider style={{ height: '100vh' }}>
            <Menu defaultSelectedKeys={['Dashboard']} mode='inline'>
              {routes &&
                routes.map((x, idx) => {
                  if (!x.accessory) {
                    return (
                      <Menu.Item key={x.name}>
                        <NavLink id={x.path.substring(1)} to={x.layout}>
                          {x.name}
                        </NavLink>
                      </Menu.Item>
                    );
                  }
                })}
            </Menu>
          </Sider>
          <Layout>
            <Content
              style={{
                margin: '20px 12px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <div className='container'>
                {routes !== null ? <Routes>{getRoutes()}</Routes> : <></>}
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>
              Copyrights @ Web Application Security Training Platform{' '}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

AdminLayout.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {})(AdminLayout);
