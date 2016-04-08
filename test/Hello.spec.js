import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import Hello from '../src/Hello';

describe('<Hello />', () => {
  it('renders a name', () => {
    const wrapper = mount(<Hello name="Foo" />);
    expect(wrapper.find('.name').length).toBe(1);
  });
});

