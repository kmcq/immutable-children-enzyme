import React from 'react';
import App from './App';
import { shallow as enzyme2shallow } from 'enzyme2';
import { shallow as enzyme3shallow } from 'enzyme';

it('renders immutable children in enzyme 2', () => {
  expect(enzyme2shallow(<App />).debug()).toMatchSnapshot();
});

it('does not render immutable children in enzyme 3', () => {
  expect(enzyme3shallow(<App />).debug()).toMatchSnapshot();
});
