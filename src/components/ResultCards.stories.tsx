import React from 'react';
import ResultCard from "./ResultCard";
import { storiesOf } from '@storybook/react';

const mockData = {
    title: "A very nice card",
    date: "2019-01-2000",
    url: "https://www.xkcd.com/1270/"
};


storiesOf('components.ResultCard', module)
  .add('with data', () => (
      <ResultCard newsTitle={mockData.title}
                  date={mockData.date}
                  link={mockData.url}
      />
  ));
