import React from 'react';
import { Card, Grid, Row, Col } from 'antd';

function Dashboard() {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className='gutter-row' span={6}>
        <Card>
          <h2>Dashboard</h2>
        </Card>
      </Col>
      <Col className='gutter-row' span={6}>
        <Card>User Progress A</Card>
      </Col>
      <Col className='gutter-row' span={6}>
        <Card>User Progress B</Card>
      </Col>
      <Col className='gutter-row' span={6}>
        <Card>User Progress C</Card>
      </Col>
    </Row>
  );
}

export default Dashboard;
