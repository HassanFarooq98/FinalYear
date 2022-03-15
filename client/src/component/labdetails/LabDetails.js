import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Button } from 'antd';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const arr = [
  {
    title: 'Sql title',
    Description: 'has desc',
    Poc: 'poc',
    htd: 'how to detect',
    lab_link: '',
  },

  {
    title: 'rfi title',
    Description: 'has desc',
    Poc: 'poc',
    htd: 'how to detect',
    lab_link: '',
  },
];

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

function LabDetails({ index = 0 }) {
  const onSubmit = (e, link) => {
    e.preventDefaults();
    axios.get(link, config);
  };
  return (
    <Typography>
      <Title>{arr[index].title}</Title>
      <Title level={2}>Description</Title>
      <Paragraph>{arr[index].Description}</Paragraph>
      <Title level={2}>Proof of Concept</Title>
      <Paragraph>{arr[index].Poc}</Paragraph>

      <Title level={2}>How to Detect</Title>
      <Paragraph>{arr[index].htd}</Paragraph>

      <Title level={2}>Lab Link</Title>
      <Button type='primary' onClick={(e) => onSubmit(e, arr[index].lab_link)}>
        Click Me
      </Button>
    </Typography>
  );
}

export default LabDetails;
