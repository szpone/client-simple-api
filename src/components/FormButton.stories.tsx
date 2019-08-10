import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import FormButton from "./FormButton";
import { storiesOf } from '@storybook/react';
import { Button } from 'react-bootstrap';





storiesOf('components.Button', module)
  .add('with text', () => (

      <FormButton variant="primary" type="submit" content="I am a primary button"/>
  ));

