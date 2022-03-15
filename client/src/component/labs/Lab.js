import React from 'react';
import { Card, Grid, Button, Row, Col } from 'antd';

function Lab() {
  const onsubmit = (e, num) => {};
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className='gutter-row' span={6}>
        <Card>
          <h2>Sql Labs</h2>
          <p>These labs will provide you with the baiscs of sql</p>
          <Button type='primary' onClick={(e) => onsubmit(e, 0)}>
            Click me
          </Button>
        </Card>
      </Col>
      <Col className='gutter-row' span={6}>
        <Card>
          <h2>Sql Labs</h2>
        </Card>
      </Col>
      <Col className='gutter-row' span={6}>
        <Card>
          {' '}
          <p>These labs will provide you with the baiscs of sql</p>
        </Card>
      </Col>
      <Col className='gutter-row' span={6}>
        <Card>
          {' '}
          <Button type='primary' onClick={(e) => onsubmit(e, 0)}>
            Click me
          </Button>
        </Card>
      </Col>
    </Row>
  );
}

export default Lab;
