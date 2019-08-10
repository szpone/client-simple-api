import React from 'react';
import Header from "./Header";
import { storiesOf } from '@storybook/react';


storiesOf('components.Header', module)
  .add('with text', () => (
    <Header  content={"I'm a header"}/>
  ));
