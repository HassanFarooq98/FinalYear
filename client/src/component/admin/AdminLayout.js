import {  Layout, Menu,  Avatar, Breadcrumb, Button, Title, Progress   } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MailOutlined } from '@ant-design/icons';
import axios from 'axios';

import { 
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
 } from '@ant-design/icons';
import React,{ useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SubMenu from 'antd/lib/menu/SubMenu';
import { getCurrentProfile } from '../../actions/profile';
import Lab from '../labs/Lab';

const { Header, Footer, Sider, Content } = Layout;

 const AdminLayout = ({
  deleteAccount,
  auth,
  profile
}) => {

  useEffect( async () => {
    const res = await axios.get('http://localhost:5000/api/profile/me');
    console.log(res)

  }, []);

  const [collapsed,setCollapsed]=useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

    return (
      <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
            <Menu.Item key='Labs'>
                View Labs
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <MailOutlined />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            
            <Content style={{ padding: '0 50px' }}>
              <div className='container'>
              <Routes>
                <Route exact path='/labs' element={<Lab/>}/>
              </Routes>
              </div>
             
            </Content>
            
           
            <Footer style={{ textAlign: 'center' }}>Copyrights @ Web Application Security Training Platform </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
    );
  }

  AdminLayout.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
  });
  
  export default connect(mapStateToProps, {})(
    AdminLayout
  );