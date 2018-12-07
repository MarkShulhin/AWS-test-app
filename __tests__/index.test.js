/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index.js';
import Title from '../components/Title';

describe('With Enzyme', () => {
  it('should render App with styled title', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Title).exists()).toBe(true);
  });
});

describe('With Snapshot Testing', () => {
  it('should render App that shows ssr hello world', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
