import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Counter component', () => {
    it('finds 1 h1 tag in Header', () => {
        const wrapper = shallow(<Header />);
        const text = wrapper.find('h1');
        expect(text).toHaveLength(1);
    });
});