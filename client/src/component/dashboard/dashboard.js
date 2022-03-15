import React from 'react';
import { Typography, Card, Grid, Row, Col, Divider } from 'antd';

const { Title, Text } = Typography;

function Dashboard() {
  return (
    <>
      <Card style={{ backgroundColor: 'rgba(69, 43, 91, 1)' }}>
        <Title style={{ color: 'rgba(229, 149, 25, 1)' }}>Profile </Title>
        <Card style={{ backgroundColor: 'rgba(12,12,12,0.2)' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Title level={3} style={{ color: 'rgba(225, 225, 225, 1)' }}>
                Name : Hassan Farooq
              </Title>
            </Col>
            <Col span={12}>
              <Title level={3} style={{ color: 'rgba(225, 225, 225, 1)' }}>
                Email : hassanfarooq@gmail.com
              </Title>
            </Col>
          </Row>
        </Card>
        <Divider orientation='left' style={{ color: 'rgba(255,255,255,1)' }}>
          <Title style={{ color: 'rgba(229, 149, 25, 1)' }}>
            Labs Progress
          </Title>
        </Divider>
        <Row gutter={16}>
          <Col span={8}>
            <Card style={{ backgroundColor: 'rgba(12,12,12,0.2)' }}>
              <Title level={3} style={{ color: 'rgba(225, 225, 225, 1)' }}>
                Sql Lab Progress
              </Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ backgroundColor: 'rgba(12,12,12,0.2)' }}>
              <Title level={3} style={{ color: 'rgba(225, 225, 225, 1)' }}>
                Sql Lab Progress
              </Title>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ backgroundColor: 'rgba(12,12,12,0.2)' }}>
              <Title level={3} style={{ color: 'rgba(225, 225, 225, 1)' }}>
                Sql Lab Progress
              </Title>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Dashboard;
