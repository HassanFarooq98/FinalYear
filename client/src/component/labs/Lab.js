import React from 'react'
import { Card, Grid, Row, Col } from 'antd'

function Lab() {
  return (
        
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <Card>
            <h2>Sql Labs</h2>
            <p>These labs will provide you with  the baiscs of sql</p>
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card>col-6</Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card>col-6</Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card>col-6</Card>
      </Col>
    </Row>
  )
}

export default Lab